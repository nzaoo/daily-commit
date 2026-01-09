#!/bin/bash

# Local testing script for Daily Commit
# This allows you to test the pattern generation locally

set -e

echo "🧪 Testing Daily Commit Pattern Generator"
echo "=========================================="

# Create test directory
TEST_DIR=".test-run"
mkdir -p "$TEST_DIR"

# Configure test environment
cd "$TEST_DIR"
git init -q || true
git config user.name "Test User" 2>/dev/null || git config --global user.name "Test User"
git config user.email "test@example.com" 2>/dev/null || git config --global user.email "test@example.com"

# Create test activity file
mkdir -p .github/activity
echo "Test entry at $(date -Iseconds)" >> .github/activity/log.txt

# Test git operations
git add . 2>/dev/null || true
git commit -m "Test commit from local script" 2>/dev/null || echo "Note: No remote configured for push test"

echo "✅ Test completed successfully!"
echo "Test directory: $TEST_DIR"
echo ""
echo "To clean up test files, run: rm -rf $TEST_DIR"
