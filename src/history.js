import { readFile, writeFile, access } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';

export class CommandHistory {
  constructor() {
    this.historyFile = join(homedir(), '.ai-shell-history.json');
  }

  async addCommand(query, command) {
    try {
      const history = await this.getHistory();
      
      const newEntry = {
        query,
        command,
        timestamp: new Date().toISOString()
      };

      history.unshift(newEntry); // Add to beginning
      
      // Keep only last 100 entries
      if (history.length > 100) {
        history.splice(100);
      }

      await writeFile(this.historyFile, JSON.stringify(history, null, 2));
    } catch (error) {
      // Silently fail if we can't write history
      console.warn('Warning: Could not save command to history');
    }
  }

  async getHistory() {
    try {
      await access(this.historyFile);
      const data = await readFile(this.historyFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // File doesn't exist or can't be read
      return [];
    }
  }

  async clearHistory() {
    try {
      await writeFile(this.historyFile, JSON.stringify([], null, 2));
    } catch (error) {
      throw new Error('Could not clear history file');
    }
  }
} 