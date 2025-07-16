import { BaseProvider } from './base-provider.js';

export class OllamaProvider extends BaseProvider {
  constructor(config) {
    super(config);
    this.baseUrl = config.baseUrl || 'http://localhost:11434';
  }

  async convertToCommand(query) {
    try {
      const response = await fetch(`${this.baseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.config.model,
          prompt: this.getPrompt(query),
          stream: false,
          options: {
            temperature: 0.1,
            num_predict: 100
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status}`);
      }

      const data = await response.json();
      const command = data.response.trim();
      const explanation = await this.getCommandExplanation(command);

      return {
        success: true,
        command,
        explanation
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getCommandExplanation(command) {
    try {
      const response = await fetch(`${this.baseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.config.model,
          prompt: this.getExplanationPrompt(command),
          stream: false,
          options: {
            temperature: 0.3,
            num_predict: 150
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status}`);
      }

      const data = await response.json();
      return data.response.trim();
    } catch (error) {
      return 'Unable to generate explanation.';
    }
  }
} 