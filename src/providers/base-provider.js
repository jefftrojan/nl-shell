export class BaseProvider {
  constructor(config) {
    this.config = config;
  }

  async convertToCommand(query) {
    throw new Error('convertToCommand must be implemented by subclass');
  }

  async getCommandExplanation(command) {
    throw new Error('getCommandExplanation must be implemented by subclass');
  }

  getPrompt(query) {
    return `You are a helpful assistant that converts natural language descriptions into shell commands.

IMPORTANT: Return ONLY the shell command, nothing else. No explanations, no markdown formatting, just the raw command.

Examples:
- "list all files in current directory" → "ls -la"
- "find all python files" → "find . -name '*.py'"
- "show disk usage" → "df -h"
- "list all git branches sorted by date" → "git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/"

User request: "${query}"

Command:`;
  }

  getExplanationPrompt(command) {
    return `Explain what this shell command does in simple, plain English:

Command: ${command}

Explanation:`;
  }
} 