// Git Branching Workflow Demo - Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the version text and changelog
    updateVersionText("Version: 1.0.0 (Base)");
    addLog("System initialized - Git branching workflow demo ready");
    
    // Get button elements
    const featureBtn = document.getElementById('feature-btn');
    const hotfixBtn = document.getElementById('hotfix-btn');
    
    // Add click event listeners
    featureBtn.addEventListener('click', applyFeatureChange);
    hotfixBtn.addEventListener('click', applyHotfixChange);
});

/**
 * Update the version text displayed on the page
 * @param {string} version - The new version string to display
 */
function updateVersionText(version) {
    const versionTextElement = document.getElementById('version-text');
    versionTextElement.textContent = version;
    
    // Add a subtle animation effect
    versionTextElement.style.transform = 'scale(1.05)';
    versionTextElement.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        versionTextElement.style.transform = 'scale(1)';
    }, 300);
}

/**
 * Add a log entry to the changelog
 * @param {string} message - The log message to add
 */
function addLog(message) {
    const changelog = document.getElementById('changelog');
    const logItem = document.createElement('li');
    
    // Get current timestamp for the log entry
    const timestamp = new Date().toLocaleTimeString();
    logItem.textContent = `[${timestamp}] ${message}`;
    
    // Add the new log item to the top of the changelog
    changelog.insertBefore(logItem, changelog.firstChild);
    
    // Keep only the last 10 log entries for readability
    while (changelog.children.length > 10) {
        changelog.removeChild(changelog.lastChild);
    }
    
    // Add entrance animation
    logItem.style.animation = 'slideIn 0.5s ease-out';
}

/**
 * Simulate a feature branch change
 * This represents changes made on a feature-login branch
 */
function applyFeatureChange() {
    const newVersion = "Version: 1.1.0 (Feature Branch Demo)";
    updateVersionText(newVersion);
    addLog("Simulated feature change from feature-login branch");
    addLog("Feature: Enhanced login simulation - merging to develop");
}

/**
 * Simulate a hotfix branch change
 * This represents changes made on a hotfix-ui-bug branch
 */
function applyHotfixChange() {
    const newVersion = "Version: 1.0.1 (Hotfix Demo)";
    updateVersionText(newVersion);
    addLog("Simulated hotfix change from hotfix-ui-bug branch");
    addLog("Hotfix: UI bug resolved - urgent merge to main");
}

/**
 * Reset to base version (for demo purposes)
 * This simulates reverting to the main branch state
 */
function resetToBase() {
    updateVersionText("Version: 1.0.0 (Base)");
    addLog("Reset to base version (main branch)");
}

// Export functions for potential testing or external use
window.GitWorkflowDemo = {
    updateVersionText,
    addLog,
    applyFeatureChange,
    applyHotfixChange,
    resetToBase
};