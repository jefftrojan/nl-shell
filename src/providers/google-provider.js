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
      return 'Unable to generate explanation.';
    }
  }
} 