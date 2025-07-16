import Anthropic from '@anthropic-ai/sdk';
import { BaseProvider } from './base-provider.js';

export class AnthropicProvider extends BaseProvider {
  constructor(config) {
    super(config);
    this.client = new Anthropic({
      apiKey: config.apiKey,
      baseURL: config.baseUrl
    });
  }

  async convertToCommand(query) {
    try {
      const message = await this.client.messages.create({
        model: this.config.model,
        max_tokens: 100,
        temperature: 0.1,
        messages: [
          {
            role: 'user',
            content: this.getPrompt(query)
          }
        ]
      });

      const command = message.content[0].text.trim();
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
      const message = await this.client.messages.create({
        model: this.config.model,
        max_tokens: 150,
        temperature: 0.3,
        messages: [
          {
            role: 'user',
            content: this.getExplanationPrompt(command)
          }
        ]
      });

      return message.content[0].text.trim();
    } catch (error) {
      return 'Unable to generate explanation.';
    }
  }
} 