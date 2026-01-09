/**
 * Daily Commit Generator
 * Generates commits based on contribution patterns
 */

const fs = require('fs');
const path = require('path');

// Pattern configuration
const COMMIT_MESSAGES = [
  'Update dependencies',
  'Fix minor issue',
  'Refactor code',
  'Update docs',
  'Clean up files',
  'Minor improvements',
  'Optimize logic',
  'Update config',
  'Bug fix',
  'Code cleanup',
  'Update tests',
  'Improve performance',
  'Adjust settings',
  'Code review',
  'Format code'
];

// Get random commit message
function getRandomMessage() {
  return COMMIT_MESSAGES[Math.floor(Math.random() * COMMIT_MESSAGES.length)];
}

// Create activity log entry
function createActivityLog() {
  const logDir = path.join(__dirname, '..', '.github', 'activity');
  const logFile = path.join(logDir, 'log.txt');
  
  // Ensure directory exists
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  
  // Append entry
  const timestamp = new Date().toISOString();
  const entry = `${timestamp} - Activity log entry\n`;
  fs.appendFileSync(logFile, entry);
  
  console.log('✓ Activity log updated');
  return logFile;
}

// Main function
function generate() {
  console.log('🚀 Daily Commit Generator Started');
  console.log(`📝 Message: ${getRandomMessage()}`);
  
  try {
    createActivityLog();
    console.log('✅ Generation completed successfully');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generate();
}

module.exports = { generate, getRandomMessage, createActivityLog };
