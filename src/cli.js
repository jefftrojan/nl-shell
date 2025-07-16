import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import { AIShell } from './ai-shell.js';
import { CommandHistory } from './history.js';
import { ConfigManager } from './config.js';
import { displayBanner } from './ascii-art.js';

const program = new Command();

export async function runCLI() {
  const configManager = new ConfigManager();
  let aiShell;
  let history;
  
  try {
    aiShell = new AIShell();
    history = new CommandHistory();
  } catch (error) {
    aiShell = null;
    history = null;
  }

  // Display banner on startup
  displayBanner('main');

  program
    .name('ai-shell')
    .description('Convert natural language to shell commands using OpenAI')
    .version('1.0.0')
    .argument('[query]', 'Natural language description of the command you want to run')
    .option('-e, --explain', 'Explain what the command does')
    .option('-d, --dry-run', 'Show the command but don\'t run it')
    .option('--history', 'Show command history')
    .option('--setup', 'Run setup wizard to configure AI provider')
    .option('--config', 'Show current configuration')
    .option('--uninstall', 'Remove nlshell configuration and history')
    .action(async (query, options) => {
      try {
        // Handle setup wizard
        if (options.setup) {
          displayBanner('setup');
          await configManager.setupWizard();
          return;
        }

        // Handle config display
        if (options.config) {
          const config = await configManager.loadConfig();
          if (!config) {
            console.log(chalk.yellow('No configuration found. Run --setup to configure.'));
            return;
          }
          displayBanner('providers');
          console.log(chalk.blue('\nCurrent Configuration:'));
          console.log(chalk.gray(`Provider: ${config.provider}`));
          console.log(chalk.gray(`Model: ${config.model}`));
          console.log(chalk.gray(`Base URL: ${config.baseUrl}`));
          console.log(chalk.gray(`Setup Date: ${config.setupDate}`));
          return;
        }

        // Handle uninstall
        if (options.uninstall) {
          displayBanner('safety');
          console.log(chalk.yellow('\n⚠️  Uninstall nlshell configuration and history?'));
          console.log(chalk.gray('This will remove:'));
          console.log(chalk.gray('  • Configuration file (~/.ai-shell-config.json)'));
          console.log(chalk.gray('  • Command history (~/.ai-shell-history.json)'));
          console.log(chalk.gray('  • All saved settings and preferences'));
          console.log(chalk.red('\nThis action cannot be undone!'));
          
          const { confirm } = await inquirer.prompt([
            {
              type: 'confirm',
              name: 'confirm',
              message: 'Do you want to proceed with uninstall?',
              default: false
            }
          ]);

          if (confirm) {
            try {
              await configManager.uninstall();
              await history.clearHistory();
              console.log(chalk.green('\n✅ nlshell configuration and history removed successfully!'));
              console.log(chalk.gray('The nlshell package is still installed. To completely remove it, run:'));
              console.log(chalk.white('  npm uninstall -g nlshell'));
            } catch (error) {
              console.log(chalk.red('\n❌ Error during uninstall:'), error.message);
            }
          } else {
            console.log(chalk.yellow('\nUninstall cancelled.'));
          }
          return;
        }

        // Check if configuration exists
        const config = await configManager.loadConfig();
        if (!config) {
          console.log(chalk.yellow('No configuration found. Running setup wizard...'));
          await configManager.setupWizard();
          // Re-initialize after setup
          aiShell = new AIShell();
          history = new CommandHistory();
        }

        // If no query provided and not setup/config, show help
        if (!query && !options.setup && !options.config) {
          console.log(chalk.yellow('No query provided.'));
          console.log(chalk.white('Usage: npx ai-shell "your natural language command"'));
          console.log(chalk.white('Run --help for more options.'));
          return;
        }

        // Show history if requested
        if (options.history) {
          const commands = await history.getHistory();
          if (commands.length === 0) {
            console.log(chalk.yellow('No command history found.'));
            return;
          }
          console.log(chalk.blue('\nCommand History:'));
          commands.forEach((cmd, index) => {
            console.log(chalk.gray(`${index + 1}. ${cmd.query}`));
            console.log(chalk.white(`   → ${cmd.command}`));
            console.log(chalk.gray(`   ${cmd.timestamp}`));
            console.log('');
          });
          return;
        }

        // Show spinner while getting AI response
        const spinner = ora('Converting to shell command...').start();
        
        const result = await aiShell.convertToCommand(query);
        spinner.stop();

        if (!result.success) {
          console.error(chalk.red('Error:'), result.error);
          process.exit(1);
        }

        const { command, explanation } = result;

        // Show explanation if requested
        if (options.explain) {
          console.log(chalk.blue('\nExplanation:'));
          console.log(chalk.white(explanation));
          console.log('');
        }

        // Show the command
        console.log(chalk.green('\nSuggested command:'));
        console.log(chalk.cyan(command));
        console.log('');

        // Safety check
        if (aiShell.isDangerousCommand(command)) {
          displayBanner('safety');
          console.log(chalk.red('⚠️  Warning: This command may be dangerous!'));
          console.log(chalk.red('Execution blocked for safety.'));
          process.exit(1);
        }

        // Dry run mode
        if (options.dryRun) {
          console.log(chalk.yellow('Dry run mode - command not executed.'));
          return;
        }

        // Ask for confirmation
        const { confirm } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'confirm',
            message: 'Do you want to execute this command?',
            default: false
          }
        ]);

        if (!confirm) {
          console.log(chalk.yellow('Command execution cancelled.'));
          return;
        }

        // Execute the command
        console.log(chalk.blue('\nExecuting command...\n'));
        const executionResult = await aiShell.executeCommand(command);
        
        if (executionResult.success) {
          displayBanner('success');
          if (executionResult.output) {
            console.log(chalk.white('\nOutput:'));
            console.log(executionResult.output);
          }
        } else {
          displayBanner('error');
          console.log(chalk.red(executionResult.error));
        }

        // Save to history
        await history.addCommand(query, command);

      } catch (error) {
        console.error(chalk.red('Unexpected error:'), error.message);
        process.exit(1);
      }
    });

  await program.parseAsync();
} 