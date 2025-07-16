import { GoogleGenerativeAI } from '@google/generative-ai';
import { BaseProvider } from './base-provider.js';

export class GoogleProvider extends BaseProvider {
  constructor(config) {
    super(config);
    this.client = new GoogleGenerativeAI(config.apiKey);
  }

  async convertToCommand(query) {
    try {
      const model = this.client.getGenerativeModel({ model: this.config.model });
      
      const result = await model.generateContent(this.getPrompt(query));
      const response = await result.response;
      const command = response.text().trim();
      
      const explanation = await this.getCommandExplanation(command);

      return {
        success: true,
        command,
        explanation
      };
    } catch (error) {
      // Handle model not found errors
      if (error.message.includes('models/') && error.message.includes('is not found')) {
        return {
          success: false,
          error: `Model '${this.config.model}' not found. Please check the model name or run 'nlshell --setup' to reconfigure.`
        };
      }
      
      // Handle quota/rate limit errors
      if (error.message.includes('429') || error.message.includes('quota') || error.message.includes('rate limit')) {
        return {
          success: false,
          error: `Google API quota exceeded. Please check your billing or try again later. You can also switch to a different provider with 'nlshell --setup'.`
        };
      }
      
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getCommandExplanation(command) {
    try {
      const model = this.client.getGenerativeModel({ model: this.config.model });
      
      const result = await model.generateContent(this.getExplanationPrompt(command));
      const response = await result.response;
      
      return response.text().trim();
    } catch (error) {
      // Handle model not found errors
      if (error.message.includes('models/') && error.message.includes('is not found')) {
        return `Unable to generate explanation: Model '${this.config.model}' not found.`;
      }
      
      // Handle quota/rate limit errors
      if (error.message.includes('429') || error.message.includes('quota') || error.message.includes('rate limit')) {
        return 'Unable to generate explanation: Google API quota exceeded.';
      }
      
      return 'Unable to generate explanation.';
    }
  }
} 