# NLShell

A powerful Node.js CLI tool that converts natural language descriptions into shell commands using multiple AI providers.

```
    ╔══════════════════════════════════════════════════════════════╗
    ║  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗  ║
    ║  ║ N ║  ║ L ║  ║ S ║  ║ H ║  ║ E ║  ║ L ║  ║ L ║  ║ ! ║  ║
    ║  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝  ║
    ╚══════════════════════════════════════════════════════════════╝
    🤖 Convert natural language to shell commands with AI
    🚀 Multi-provider support: OpenAI, Anthropic, Google, Ollama
    🛡️  Built-in safety filters and command history
```

## Features

- 🤖 **Multi-AI Support**: Choose from OpenAI GPT, Anthropic Claude, Google Gemini, or Ollama
- 🛡️ **Safety First**: Built-in safety filters to prevent dangerous commands
- 📝 **Command History**: Tracks your command history locally with timestamps
- 🎨 **Beautiful UI**: Colored output, spinners, and ASCII art for better UX
- ⚡ **Fast**: Optimized prompts for quick responses
- 🔍 **Explanations**: Get detailed explanations of what commands do
- 🧪 **Dry Run**: Test commands without executing them
- 🎯 **Setup Wizard**: Interactive setup for selecting providers and API keys
- 📊 **Command Confirmation**: Review and confirm commands before execution
- 🗑️ **Clean Uninstall**: Safe removal of configuration and history files

## Installation

### Global Installation (Recommended)

```bash
npm install -g nlshell
```

### Local Installation

```bash
npm install nlshell
npx nlshell
```

## Quick Start

1. **Install the package:**
   ```bash
   npm install -g nlshell
   ```

2. **Run the setup wizard:**
   ```bash
   nlshell --setup
   ```

3. **Start using it:**
   ```bash
   nlshell "list all files in current directory"
   ```

## Usage

### Basic Usage

```bash
# Convert natural language to shell command
nlshell "list all files in current directory"

# With explanation
nlshell "show disk usage" --explain

# Dry run - show command without executing
nlshell "list git branches" --dry-run
```

### Command Options

```bash
nlshell [options] <query>

Options:
  -V, --version          output the version number
  -h, --help            display help for command
  -e, --explain         explain what the command does
  -d, --dry-run         show command without executing
  -s, --setup           run interactive setup wizard
  --history             show command history
  --uninstall           remove configuration and history files
```

### Examples

| Natural Language | Generated Command |
|------------------|-------------------|
| "list all files in current directory" | `ls -la` |
| "find all python files" | `find . -name '*.py'` |
| "show disk usage" | `df -h` |
| "list all git branches sorted by date" | `git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/` |
| "check system memory" | `free -h` |
| "find files modified today" | `find . -mtime -1` |
| "compress all jpg files" | `tar -czf images.tar.gz *.jpg` |

## AI Providers

NLShell supports multiple AI providers:

### OpenAI GPT
- **Model**: GPT-4 or GPT-3.5-turbo
- **Setup**: Requires OpenAI API key
- **Best for**: General command generation

### Anthropic Claude
- **Model**: Claude-3-Sonnet or Claude-3-Haiku
- **Setup**: Requires Anthropic API key
- **Best for**: Detailed explanations and reasoning

### Google Gemini
- **Model**: Gemini Pro
- **Setup**: Requires Google API key
- **Best for**: Creative command solutions

### Ollama (Local)
- **Models**: Any Ollama model (llama2, codellama, etc.)
- **Setup**: Requires Ollama running locally
- **Best for**: Privacy and offline use

## Configuration

### Setup Wizard

Run the interactive setup wizard to configure your preferred AI provider:

```bash
nlshell --setup
```

The wizard will:
- Let you choose your preferred AI provider
- Guide you through API key setup
- Test the connection
- Save your configuration

### Manual Configuration

Configuration is stored in `~/.nlshell-config.json`:

```json
{
  "provider": "openai",
  "apiKey": "your-api-key-here",
  "model": "gpt-4"
}
```

### Environment Variables

You can also set API keys via environment variables:
- `OPENAI_API_KEY`: For OpenAI
- `ANTHROPIC_API_KEY`: For Anthropic
- `GOOGLE_API_KEY`: For Google

## Safety Features

The tool includes comprehensive safety filters that block dangerous commands:

- `rm -rf` operations
- `dd` commands
- System shutdown/reboot commands
- File system operations (`mkfs`, `fdisk`, etc.)
- Dangerous permission changes
- Wildcards with root directories
- Fork bombs and other malicious patterns

## Command History

Command history is stored in `~/.nlshell-history.json` and includes:
- Original natural language query
- Generated shell command
- Timestamp
- Provider used

View your history:
```bash
nlshell --history
```

## Uninstallation

To completely remove NLShell and all its data:

```bash
nlshell --uninstall
```

This will:
- Remove the global package
- Delete configuration files
- Clear command history
- Clean up all traces

## Development

### Project Structure

```
nlshell/
├── index.js          # CLI entry point
├── package.json      # Dependencies and metadata
├── src/
│   ├── cli.js        # Main CLI logic
│   ├── ai-shell.js   # AI integration and command execution
│   ├── config.js     # Configuration management
│   └── history.js    # Command history management
├── docs/             # Documentation
├── .github/          # GitHub templates and workflows
└── README.md         # This file
```

### Running Tests

```bash
# Test basic functionality
nlshell "list files" --dry-run

# Test explanation feature
nlshell "show disk usage" --explain --dry-run

# Test setup wizard
nlshell --setup
```

## Troubleshooting

### Common Issues

1. **"API key not found"**
   - Run `nlshell --setup` to configure your API key
   - Or set the appropriate environment variable

2. **"Command execution failed"**
   - Check if the command is valid for your system
   - Some commands may require specific tools to be installed

3. **"This command may be dangerous"**
   - The safety filter detected a potentially dangerous command
   - Review the command carefully before proceeding

4. **"Provider not available"**
   - Ensure your chosen AI provider is properly configured
   - Check your API key and internet connection

### Getting Help

```bash
# Show help
nlshell --help

# Show version
nlshell --version
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Start for Contributors

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/ai-shell.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/amazing-feature`
5. Make your changes and test: `npm start "test command"`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to your fork: `git push origin feature/amazing-feature`
8. Open a Pull Request

## Roadmap

### Version 2.0 - Agentic Features
- **Session Memory**: Remember context across multiple commands
- **Multi-step Reasoning**: Break complex tasks into steps
- **Learning Mode**: Learn from user corrections and preferences
- **Autonomous Decision Making**: Execute safe commands automatically
- **Multi-agent Collaboration**: Use multiple AI providers for complex tasks

### Version 1.x - Current Development
- ✅ Multi-provider AI support
- ✅ Setup wizard
- ✅ Command history
- ✅ Safety filters
- ✅ Beautiful UI
- 🔄 Enhanced error handling
- 🔄 More AI providers
- 🔄 Plugin system

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is provided as-is. Always review generated commands before execution. The safety filters are not foolproof and should not be relied upon as the only safety measure. Use at your own risk.

## Support

- 📖 [Documentation](https://github.com/trojan0x/ai-shell#readme)
- 🐛 [Report Issues](https://github.com/trojan0x/ai-shell/issues)
- 💡 [Feature Requests](https://github.com/trojan0x/ai-shell/issues)
- 🤝 [Contributing](CONTRIBUTING.md)

---

**Made with ❤️ by the NLShell community** 