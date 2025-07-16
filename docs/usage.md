# NLShell Usage Guide

## Quick Start

```bash
# Install globally (recommended)
npm install -g nlshell

# Run setup wizard
nlshell --setup

# Start using it
nlshell "list all files in current directory"
```

## Basic Usage

```bash
nlshell "list all files in current directory"
nlshell "find all python files"
nlshell "show disk usage"
```

## Command Options

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

## Examples

### Basic Commands
```bash
nlshell "list all files in current directory"
nlshell "find all python files"
nlshell "show disk usage"
nlshell "check system memory"
```

### With Explanations
```bash
nlshell "show disk usage" --explain
nlshell "list git branches sorted by date" --explain
```

### Dry Run (Safe Testing)
```bash
nlshell "find all python files" --dry-run
nlshell "compress all jpg files" --dry-run
```

### History and Configuration
```bash
nlshell --history
nlshell --setup
```

## AI Providers

NLShell supports multiple AI providers. Use the setup wizard to choose:

### OpenAI GPT
- **Models**: GPT-4, GPT-3.5-turbo
- **Best for**: General command generation
- **Setup**: Requires OpenAI API key

### Anthropic Claude
- **Models**: Claude-3-Sonnet, Claude-3-Haiku
- **Best for**: Detailed explanations and reasoning
- **Setup**: Requires Anthropic API key

### Google Gemini
- **Models**: Gemini Pro
- **Best for**: Creative command solutions
- **Setup**: Requires Google API key

### Ollama (Local)
- **Models**: Any Ollama model (llama2, codellama, etc.)
- **Best for**: Privacy and offline use
- **Setup**: Requires Ollama running locally

## Configuration

### Setup Wizard (Recommended)
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

## Command History

View your command history:
```bash
nlshell --history
```

History includes:
- Original natural language query
- Generated shell command
- Timestamp
- AI provider used

## Safety Features

NLShell includes comprehensive safety filters that block dangerous commands:
- `rm -rf` operations
- `dd` commands
- System shutdown/reboot commands
- File system operations (`mkfs`, `fdisk`, etc.)
- Dangerous permission changes
- Wildcards with root directories
- Fork bombs and other malicious patterns

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
nlshell --help
nlshell --version
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

## More Information

- See [README.md](../README.md) for full project info
- See [CONTRIBUTING.md](../CONTRIBUTING.md) for how to contribute
- Report issues on [GitHub](https://github.com/trojan0x/ai-shell/issues) 