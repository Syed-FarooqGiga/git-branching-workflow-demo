# Git Branching Workflow Demonstration

A comprehensive DevOps case study project demonstrating Git branching strategies, merge workflows, and conflict resolution using a simple web-based demo application.

## Project Overview

This project serves as a practical demonstration of modern Git branching workflows commonly used in DevOps environments. It includes a simple web interface that simulates version changes across different Git branches, making it perfect for educational purposes and viva presentations.

## Branch Strategy

Our project follows the **Git Flow** branching model with the following branch structure:

### Main Branches

- **`main`** - The production-ready stable branch
  - Contains the latest stable release
  - Always deployable and production-ready
  - Only receives merges from `develop` and `hotfix-*` branches

- **`develop`** - Integration branch for ongoing development
  - Contains the latest completed features
  - Acts as a staging area before merging to main
  - Feature branches merge into this branch

### Supporting Branches

- **Feature Branches** (`feature-*`) - New feature development
  - Created from: `develop`
  - Merged into: `develop`
  - Naming convention: `feature-login`, `feature-dashboard`, `feature-api-v2`
  - Used for adding new features without affecting stable code

- **Hotfix Branches** (`hotfix-*`) - Urgent production fixes
  - Created from: `main`
  - Merged into: `main` and `develop`
  - Naming convention: `hotfix-ui-bug`, `hotfix-security-patch`
  - Used for critical fixes that cannot wait for regular release cycle

## File Structure

```
git-branching-workflow-demo/
├── index.html          # Main web page
├── styles.css          # Styling and layout
├── script.js           # Interactive functionality
├── config.txt          # Configuration file (used for merge conflict demo)
└── README.md           # This documentation file
```

## How to Run the Project

1. **Local Development:**
   - Simply open `index.html` in any modern web browser
   - No server setup required - it's a static HTML/CSS/JS application

2. **Interactive Demo:**
   - Click "Apply Feature Change" to simulate feature branch changes
   - Click "Apply Hotfix Change" to simulate hotfix branch changes
   - Watch the version text and changelog update in real-time

## Git Commands Reference

### Initial Setup

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: base Git branching workflow demo"

# Set main as default branch
git branch -M main

# Add remote repository (replace with your GitHub username)
git remote add origin https://github.com/<your-username>/git-branching-workflow-demo.git

# Push to GitHub
git push -u origin main
```

### Branch Management

```bash
# Create and switch to develop branch
git checkout -b develop
git push -u origin develop

# Create feature branch from develop
git checkout develop
git checkout -b feature-login
# Make your changes
git add .
git commit -m "Added login feature simulation"
git push -u origin feature-login

# Create hotfix branch from main
git checkout main
git checkout -b hotfix-ui-bug
# Make urgent fix
git add .
git commit -m "Hotfix: UI bug resolution"
git push -u origin hotfix-ui-bug
```

## Merge Conflict Demonstration

This project includes a `config.txt` file specifically designed to demonstrate merge conflicts:

1. **On develop branch:**
   - Modify `version=1.1.0` and `feature_flag=true`
   - Commit and push changes

2. **On feature-login branch:**
   - Modify `version=1.0.1` and `feature_flag=false`
   - Commit and push changes

3. **Attempt merge:**
   ```bash
   git checkout develop
   git merge feature-login
   ```

This will create a merge conflict that demonstrates Git's conflict resolution process.

## Learning Objectives

- **Version Control Fundamentals:** Understanding Git's distributed nature
- **Branching Strategies:** Learning Git Flow methodology
- **Collaboration Workflows:** Pull Request process and code review
- **Conflict Resolution:** Manual merge conflict handling
- **DevOps Practices:** Continuous Integration and deployment strategies
- **Team Collaboration:** Role-based responsibilities in software development

## Educational Use

This project is designed for:
- **College DevOps Courses** - Practical demonstration of Git workflows
- **Viva Preparation** - Interactive demo for technical interviews
- **Team Training** - Learning collaborative development practices
- **Portfolio Projects** - Showcasing DevOps knowledge and Git expertise

## Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Contributing

This is an educational project. For modifications or improvements:
1. Create a feature branch from `develop`
2. Make your changes
3. Create a Pull Request for review
4. Merge after approval

---

**Project:** Git Branching Workflow Demonstration  
**Course:** DevOps – Ability Enhancement Course – V (5th Semester)  
**Type:** Educational Case Study  
**Team Size:** 2 Members