import chalk from 'chalk';

export const ASCII_ART = {
  // Main banner for the CLI - More vibrant and eye-catching
  banner: `
${chalk.magenta('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.magenta('    ║')}  ${chalk.red('╔═══╗')}  ${chalk.green('╔═══╗')}  ${chalk.yellow('╔═══╗')}  ${chalk.blue('╔═══╗')}  ${chalk.magenta('╔═══╗')}  ${chalk.cyan('╔═══╗')}  ${chalk.magenta('║')}
${chalk.magenta('    ║')}  ${chalk.red('║')} ${chalk.white.bold('A')} ${chalk.red('║')}  ${chalk.green('║')} ${chalk.white.bold('I')} ${chalk.green('║')}  ${chalk.yellow('║')} ${chalk.white.bold('-')} ${chalk.yellow('║')}  ${chalk.blue('║')} ${chalk.white.bold('S')} ${chalk.blue('║')}  ${chalk.magenta('║')} ${chalk.white.bold('H')} ${chalk.magenta('║')}  ${chalk.cyan('║')} ${chalk.white.bold('L')} ${chalk.cyan('║')}  ${chalk.magenta('║')}
${chalk.magenta('    ║')}  ${chalk.red('╚═══╝')}  ${chalk.green('╚═══╝')}  ${chalk.yellow('╚═══╝')}  ${chalk.blue('╚═══╝')}  ${chalk.magenta('╚═══╝')}  ${chalk.cyan('╚═══╝')}  ${chalk.magenta('║')}
${chalk.magenta('    ╚══════════════════════════════════════════════════════════════╝')}
${chalk.red.bold('    🤖')} ${chalk.white('Convert natural language to shell commands with AI')}
${chalk.green.bold('    🚀')} ${chalk.white('Multi-provider support: OpenAI, Anthropic, Google, Ollama')}
${chalk.blue.bold('    🛡️')} ${chalk.white('Built-in safety filters and command history')}
`,

  // Compact version for smaller displays - More vibrant
  compact: `
${chalk.magenta('╔══════════════════════════════════════════════════════════════╗')}
${chalk.magenta('║')}  ${chalk.red.bold('AI')}${chalk.green.bold('-')}${chalk.yellow.bold('SHELL')}  ${chalk.white('🤖 Natural language → Shell commands')}  ${chalk.magenta('║')}
${chalk.magenta('╚══════════════════════════════════════════════════════════════╝')}
`,

  // Minimal version for error messages - More vibrant
  minimal: `${chalk.red.bold('AI')}${chalk.green.bold('-')}${chalk.yellow.bold('SHELL')} ${chalk.magenta('🤖')}`,

  // Success message with art - More vibrant
  success: `
${chalk.green.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.green.bold('    ║')}  ${chalk.white.bold('🎉 SUCCESS! Command executed successfully! 🎉')}  ${chalk.green.bold('║')}
${chalk.green.bold('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Error message with art - More vibrant
  error: `
${chalk.red.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.red.bold('    ║')}  ${chalk.white.bold('💥 ERROR! Command failed! 💥')}  ${chalk.red.bold('║')}
${chalk.red.bold('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Setup wizard art - More vibrant
  setup: `
${chalk.blue.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.blue.bold('    ║')}  ${chalk.white.bold('🔧 AI-SHELL Setup Wizard 🔧')}  ${chalk.blue.bold('║')}
${chalk.blue.bold('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Help art - More vibrant
  help: `
${chalk.yellow.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.yellow.bold('    ║')}  ${chalk.white.bold('📖 AI-SHELL Help & Usage 📖')}  ${chalk.yellow.bold('║')}
${chalk.yellow.bold('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Version art - More vibrant
  version: `
${chalk.magenta.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.magenta.bold('    ║')}  ${chalk.white.bold('📦 AI-SHELL v1.0.0 📦')}  ${chalk.magenta.bold('║')}
${chalk.magenta.bold('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Loading spinner art - More vibrant
  loading: `
${chalk.cyan.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.cyan.bold('    ║')}  ${chalk.white.bold('🔄 Processing your request... 🔄')}  ${chalk.cyan.bold('║')}
${chalk.cyan.bold('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Provider selection art - More vibrant
  providers: `
${chalk.green.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.green.bold('    ║')}  ${chalk.white.bold('🤖 Available AI Providers 🤖')}  ${chalk.green.bold('║')}
${chalk.green.bold('    ╚══════════════════════════════════════════════════════════════╝')}
`,

  // Safety warning art - More vibrant
  safety: `
${chalk.red.bold('    ╔══════════════════════════════════════════════════════════════╗')}
${chalk.red.bold('    ║')}  ${chalk.white.bold('⚠️  SAFETY WARNING - COMMAND BLOCKED ⚠️')}  ${chalk.red.bold('║')}
${chalk.red.bold('    ╚══════════════════════════════════════════════════════════════╝')}
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