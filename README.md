# AI Shell

A Node.js CLI tool that converts natural language descriptions into shell commands using OpenAI's GPT API.

## Features

- 🤖 **AI-Powered**: Uses OpenAI GPT to convert natural language to shell commands
- 🛡️ **Safety First**: Built-in safety filters to prevent dangerous commands
- 📝 **Command History**: Tracks your command history locally
- 🎨 **Beautiful UI**: Colored output and spinners for better UX
- ⚡ **Fast**: Optimized prompts for quick responses
- 🔍 **Explanations**: Get explanations of what commands do
- 🧪 **Dry Run**: Test commands without executing them

## Installation

### Prerequisites

- Node.js 16+ 
- OpenAI API key

### Setup

1. **Clone or download this repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set your OpenAI API key:**
   ```bash
   export OPENAI_API_KEY="your-api-key-here"
   ```
4. **Make the CLI executable:**
   ```bash
   chmod +x index.js
   ```

## Usage

### Basic Usage

```bash
# Convert natural language to shell command
npx ai-shell "list all files in current directory"

# Or run directly if installed locally
node index.js "find all python files"
```

### Command Options

```bash
# Show explanation of what the command does
npx ai-shell "show disk usage" --explain

# Dry run - show command without executing
npx ai-shell "list git branches" --dry-run

# View command history
npx ai-shell --history
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

## Safety Features

The tool includes comprehensive safety filters that block dangerous commands:

- `rm -rf` operations
- `dd` commands
- System shutdown/reboot commands
- File system operations (`mkfs`, `fdisk`, etc.)
- Dangerous permission changes
- Wildcards with root directories
- Fork bombs and other malicious patterns

## Configuration

### Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)

### History File

Command history is stored in `~/.ai-shell-history.json` and includes:
- Original natural language query
- Generated shell command
- Timestamp

## Development

### Project Structure

```
ai-shell/
├── index.js          # CLI entry point
├── package.json      # Dependencies and metadata
├── src/
│   ├── cli.js        # Main CLI logic
│   ├── ai-shell.js   # OpenAI integration and command execution
│   └── history.js    # Command history management
└── README.md         # This file
```

### Running Tests

```bash
# Test basic functionality
npx ai-shell "list files" --dry-run

# Test explanation feature
npx ai-shell "show disk usage" --explain --dry-run
```

## Troubleshooting

### Common Issues

1. **"OPENAI_API_KEY environment variable is required"**
   - Set your OpenAI API key: `export OPENAI_API_KEY="your-key"`

2. **"Command execution failed"**
   - Check if the command is valid for your system
   - Some commands may require specific tools to be installed

3. **"This command may be dangerous"**
   - The safety filter detected a potentially dangerous command
   - Review the command carefully before proceeding

### Getting Help

```bash
# Show help
npx ai-shell --help

# Show version
npx ai-shell --version
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Disclaimer

This tool is provided as-is. Always review generated commands before execution. The safety filters are not foolproof and should not be relied upon as the only safety measure. 