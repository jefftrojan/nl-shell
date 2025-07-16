import OpenAI from 'openai';
import { BaseProvider } from './base-provider.js';

export class OpenAIProvider extends BaseProvider {
  constructor(config) {
    super(config);
    this.client = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseUrl
    });
  }

  async convertToCommand(query) {
    try {
      const completion = await this.client.chat.completions.create({
        model: this.config.model,
        messages: [
          {
            role: 'system',
            content: 'You are a shell command expert. Return only the command, no explanations.'
          },
          {
            role: 'user',
            content: this.getPrompt(query)
          }
        ],
        max_tokens: 100,
        temperature: 0.1
      });

      const command = completion.choices[0].message.content.trim();
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
      const completion = await this.client.chat.completions.create({
        model: this.config.model,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that explains shell commands in simple terms.'
          },
          {
            role: 'user',
            content: this.getExplanationPrompt(command)
          }
        ],
        max_tokens: 150,
        temperature: 0.3
      });

      return completion.choices[0].message.content.trim();
    } catch (error) {
      return 'Unable to generate explanation.';
    }
  }
} 