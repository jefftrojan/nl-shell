import { readFile, writeFile, access } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { displayBanner } from './ascii-art.js';

export class ConfigManager {
  constructor() {
    this.configFile = join(homedir(), '.ai-shell-config.json');
    this.providers = {
      openai: {
        name: 'OpenAI (GPT-3.5, GPT-4)',
        models: ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-turbo'],
        defaultModel: 'gpt-3.5-turbo',
        envKey: 'OPENAI_API_KEY',
        baseUrl: 'https://api.openai.com/v1'
      },
      anthropic: {
        name: 'Anthropic (Claude)',
        models: ['claude-3-haiku-20240307', 'claude-3-sonnet-20240229', 'claude-3-opus-20240229'],
        defaultModel: 'claude-3-haiku-20240307',
        envKey: 'ANTHROPIC_API_KEY',
        baseUrl: 'https://api.anthropic.com'
      },
      google: {
        name: 'Google (Gemini)',
        models: ['gemini-pro', 'gemini-pro-vision'],
        defaultModel: 'gemini-pro',
        envKey: 'GOOGLE_API_KEY',
        baseUrl: 'https://generativelanguage.googleapis.com'
      },
      ollama: {
        name: 'Ollama (Local)',
        models: ['llama2', 'codellama', 'mistral', 'gemma'],
        defaultModel: 'llama2',
        envKey: 'OLLAMA_API_KEY',
        baseUrl: 'http://localhost:11434'
      }
    };
  }

  async loadConfig() {
    try {
      await access(this.configFile);
      const data = await readFile(this.configFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  }

  async saveConfig(config) {
    await writeFile(this.configFile, JSON.stringify(config, null, 2));
  }

  async setupWizard() {
    displayBanner('setup');
    console.log(chalk.gray('Choose your AI provider and configure your API key.\n'));

    // Step 1: Choose provider
    const { provider } = await inquirer.prompt([
      {
        type: 'list',
        name: 'provider',
        message: 'Select your AI provider:',
        choices: Object.entries(this.providers).map(([key, value]) => ({
          name: value.name,
          value: key
        }))
      }
    ]);

    const selectedProvider = this.providers[provider];

    // Step 2: Choose model
    const { model } = await inquirer.prompt([
      {
        type: 'list',
        name: 'model',
        message: `Select a model for ${selectedProvider.name}:`,
        choices: selectedProvider.models.map(model => ({
          name: model,
          value: model
        })),
        default: selectedProvider.defaultModel
      }
    ]);

    // Step 3: Enter API key
    const { apiKey } = await inquirer.prompt([
      {
        type: 'password',
        name: 'apiKey',
        message: `Enter your ${selectedProvider.name} API key:`,
        validate: (input) => {
          if (!input || input.trim().length === 0) {
            return 'API key is required';
          }
          return true;
        }
      }
    ]);

    // Step 4: Optional base URL (for Ollama or custom endpoints)
    let baseUrl = selectedProvider.baseUrl;
    if (provider === 'ollama') {
      const { customUrl } = await inquirer.prompt([
        {
          type: 'input',
          name: 'customUrl',
          message: 'Enter Ollama server URL (default: http://localhost:11434):',
          default: 'http://localhost:11434'
        }
      ]);
      baseUrl = customUrl;
    }

    const config = {
      provider,
      model,
      apiKey,
      baseUrl,
      setupDate: new Date().toISOString()
    };

    await this.saveConfig(config);

    console.log(chalk.green('\n✅ Configuration saved successfully!'));
    console.log(chalk.gray(`Provider: ${selectedProvider.name}`));
    console.log(chalk.gray(`Model: ${model}`));
    console.log(chalk.gray(`Config file: ${this.configFile}`));
    console.log(chalk.yellow('\nYou can now use ai-shell!'));
    console.log(chalk.white('Example: npx ai-shell "list all files"'));
  }

  async getConfig() {
    const config = await this.loadConfig();
    if (!config) {
      console.log(chalk.yellow('No configuration found. Running setup wizard...'));
      await this.setupWizard();
      return await this.loadConfig();
    }
    return config;
  }

  async updateConfig(updates) {
    const config = await this.loadConfig() || {};
    const updatedConfig = { ...config, ...updates };
    await this.saveConfig(updatedConfig);
    return updatedConfig;
  }

  getProviderInfo(providerKey) {
    return this.providers[providerKey];
  }

  listProviders() {
    return Object.entries(this.providers).map(([key, value]) => ({
      key,
      ...value
    }));
  }
} 