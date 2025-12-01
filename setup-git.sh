#!/bin/bash
# Git Branching Workflow Demo - Push Script
# Run these commands in Git Bash to push to your repository

echo "=== Setting up Git Repository ==="

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: base Git branching workflow demo"

# Set main as default branch
git branch -M main

# Add remote repository (your GitHub repo)
git remote add origin https://github.com/AbuTalha06/projdev.git

echo "=== Pushing to GitHub ==="

# Push to main branch
git push -u origin main

echo "=== Creating develop branch ==="

# Create and push develop branch
git checkout -b develop
git push -u origin develop

echo "=== Creating feature branch ==="

# Create and push feature branch
git checkout develop
git checkout -b feature-login
git push -u origin feature-login

echo "=== Creating hotfix branch ==="

# Create and push hotfix branch  
git checkout main
git checkout -b hotfix-ui-bug
git push -u origin hotfix-ui-bug

echo "=== Setup Complete ==="
echo "Your repository is now ready!"
echo "Repository URL: https://github.com/AbuTalha06/projdev"