#!/usr/bin/env node

import { displayBanner } from './src/ascii-art.js';

console.log('\n🎨 AI-SHELL ASCII Art Demo\n');

// Test all banner variations
const contexts = [
  'main',
  'compact', 
  'setup',
  'help',
  'version',
  'success',
  'error',
  'loading',
  'providers',
  'safety'
];

contexts.forEach((context, index) => {
  console.log(`\n${index + 1}. ${context.toUpperCase()} Banner:`);
  displayBanner(context);
  console.log(''); // Add spacing
});

console.log('\n✨ All ASCII art variations displayed successfully!'); 