import { exec } from 'child_process';
import { promisify } from 'util';
import { ConfigManager } from './config.js';
import { ProviderFactory } from './providers/index.js';

const execAsync = promisify(exec);

export class AIShell {
  constructor() {
    this.configManager = new ConfigManager();
    this.provider = null;
  }

  async initialize() {
    const config = await this.configManager.getConfig();
    this.provider = ProviderFactory.createProvider(config);
    this.config = config;
  }

  async convertToCommand(query) {
    if (!this.provider) {
      await this.initialize();
    }
    
    return await this.provider.convertToCommand(query);
  }

  async getCommandExplanation(command) {
    if (!this.provider) {
      await this.initialize();
    }
    
    return await this.provider.getCommandExplanation(command);
  }

  isDangerousCommand(command) {
    const dangerousPatterns = [
      /rm\s+-rf/i,
      /rm\s+-r\s+.*\/.*\*/i,
      /dd\s+if=/i,
      /shutdown/i,
      /halt/i,
      /reboot/i,
      /:\(\)\{\s*:\|:\s*&\s*\};:/, // fork bomb
      /mkfs/i,
      /fdisk/i,
      /parted/i,
      /chmod\s+777/i,
      /chown\s+root/i,
      /sudo\s+rm\s+-rf/i,
      /sudo\s+dd/i,
      /sudo\s+shutdown/i,
      /sudo\s+halt/i,
      /sudo\s+reboot/i,
      /sudo\s+mkfs/i,
      /sudo\s+fdisk/i,
      /sudo\s+parted/i
    ];

    // Check for dangerous patterns
    for (const pattern of dangerousPatterns) {
      if (pattern.test(command)) {
        return true;
      }
    }

    // Check for wildcards with root directories
    const rootWildcardPatterns = [
      /\*\s*\/etc/i,
      /\*\s*\/var/i,
      /\*\s*\/usr/i,
      /\*\s*\/bin/i,
      /\*\s*\/sbin/i,
      /\*\s*\/boot/i,
      /\*\s*\/home/i,
      /\*\s*\/root/i
    ];

    for (const pattern of rootWildcardPatterns) {
      if (pattern.test(command)) {
        return true;
      }
    }

    return false;
  }

  async executeCommand(command) {
    try {
      const { stdout, stderr } = await execAsync(command, {
        timeout: 30000 // 30 second timeout
      });

      return {
        success: true,
        output: stdout,
        error: stderr
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout,
        stderr: error.stderr
      };
    }
  }
} 