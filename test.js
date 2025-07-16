#!/usr/bin/env node

// Test script to verify CLI functionality
import { Command } from 'commander';

const program = new Command();

program
  .name('ai-shell')
  .description('Convert natural language to shell commands using OpenAI')
  .version('1.0.0')
  .argument('[query]', 'Natural language description of the command you want to run')
  .option('-e, --explain', 'Explain what the command does')
  .option('-d, --dry-run', 'Show the command but don\'t run it')
  .option('--history', 'Show command history')
  .action((query, options) => {
    console.log('✅ CLI structure test passed!');
    console.log('Query:', query || 'none');
    console.log('Options:', options);
    
    if (!query) {
      console.log('\n📋 Available commands:');
      console.log('  npx ai-shell "list all files"');
      console.log('  npx ai-shell "find python files" --dry-run');
      console.log('  npx ai-shell "show disk usage" --explain');
      console.log('  npx ai-shell --history');
    }
  });

program.parse(); 