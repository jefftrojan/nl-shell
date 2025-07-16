import chalk from 'chalk';

export const ASCII_ART = {
  // Main banner for the CLI
  banner: `
${chalk.cyan('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.cyan('    ║')}  ${chalk.blue('╔═══╗')}  ${chalk.blue('╔═══╗')}  ${chalk.blue('╔═══╗')}  ${chalk.blue('╔═══╗')}  ${chalk.blue('╔═══╗')}  ${chalk.blue('╔═══╗')}  ${chalk.cyan('║')}
${chalk.cyan('    ║')}  ${chalk.blue('║')} ${chalk.white('A')} ${chalk.blue('║')}  ${chalk.blue('║')} ${chalk.white('I')} ${chalk.blue('║')}  ${chalk.blue('║')} ${chalk.white('-')} ${chalk.blue('║')}  ${chalk.blue('║')} ${chalk.white('S')} ${chalk.blue('║')}  ${chalk.blue('║')} ${chalk.white('H')} ${chalk.blue('║')}  ${chalk.blue('║')} ${chalk.white('L')} ${chalk.blue('║')}  ${chalk.cyan('║')}
${chalk.cyan('    ║')}  ${chalk.blue('╚═══╝')}  ${chalk.blue('╚═══╝')}  ${chalk.blue('╚═══╝')}  ${chalk.blue('╚═══╝')}  ${chalk.blue('╚═══╝')}  ${chalk.blue('╚═══╝')}  ${chalk.cyan('║')}
${chalk.cyan('    ╚══════════════════════════════════════════════════════════════╝')}
${chalk.gray('    🤖 Convert natural language to shell commands with AI')}
${chalk.gray('    🚀 Multi-provider support: OpenAI, Anthropic, Google, Ollama')}
${chalk.gray('    🛡️  Built-in safety filters and command history')}
`,

  // Compact version for smaller displays
  compact: `
${chalk.cyan('╔══════════════════════════════════════════════════════════════╗')}
${chalk.cyan('║')}  ${chalk.blue('AI-SHELL')}  ${chalk.gray('🤖 Natural language → Shell commands')}  ${chalk.cyan('║')}
${chalk.cyan('╚══════════════════════════════════════════════════════════════╝')}
`,

  // Minimal version for error messages
  minimal: `${chalk.blue('AI-SHELL')} ${chalk.gray('🤖')}`,

  // Success message with art
  success: `
${chalk.green('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.green('    ║')}  ${chalk.white('✅ Command executed successfully!')}  ${chalk.green('║')}
${chalk.green('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Error message with art
  error: `
${chalk.red('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.red('    ║')}  ${chalk.white('❌ Command failed!')}  ${chalk.red('║')}
${chalk.red('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Setup wizard art
  setup: `
${chalk.blue('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.blue('    ║')}  ${chalk.white('🔧 AI-SHELL Setup Wizard')}  ${chalk.blue('║')}
${chalk.blue('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Help art
  help: `
${chalk.yellow('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.yellow('    ║')}  ${chalk.white('📖 AI-SHELL Help & Usage')}  ${chalk.yellow('║')}
${chalk.yellow('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Version art
  version: `
${chalk.magenta('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.magenta('    ║')}  ${chalk.white('📦 AI-SHELL v1.0.0')}  ${chalk.magenta('║')}
${chalk.magenta('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Loading spinner art
  loading: `
${chalk.cyan('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.cyan('    ║')}  ${chalk.white('🔄 Processing your request...')}  ${chalk.cyan('║')}
${chalk.cyan('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Provider selection art
  providers: `
${chalk.green('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.green('    ║')}  ${chalk.white('🤖 Available AI Providers')}  ${chalk.green('║')}
${chalk.green('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Safety warning art
  safety: `
${chalk.red('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.red('    ║')}  ${chalk.white('⚠️  Safety Warning - Command Blocked')}  ${chalk.red('║')}
${chalk.red('    ╚══════════════════════════════════════════════════════════════╝')}
`
};

// Function to display banner based on context
export function displayBanner(context = 'main') {
  switch (context) {
    case 'main':
      console.log(ASCII_ART.banner);
      break;
    case 'compact':
      console.log(ASCII_ART.compact);
      break;
    case 'setup':
      console.log(ASCII_ART.setup);
      break;
    case 'help':
      console.log(ASCII_ART.help);
      break;
    case 'version':
      console.log(ASCII_ART.version);
      break;
    case 'success':
      console.log(ASCII_ART.success);
      break;
    case 'error':
      console.log(ASCII_ART.error);
      break;
    case 'loading':
      console.log(ASCII_ART.loading);
      break;
    case 'providers':
      console.log(ASCII_ART.providers);
      break;
    case 'safety':
      console.log(ASCII_ART.safety);
      break;
    default:
      console.log(ASCII_ART.minimal);
  }
}

// Function to get banner without displaying (for testing)
export function getBanner(context = 'main') {
  return ASCII_ART[context] || ASCII_ART.minimal;
} 