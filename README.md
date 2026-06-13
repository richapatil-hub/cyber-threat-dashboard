# Cyber Threat Intelligence Dashboard

An AI-powered cybersecurity dashboard built with HTML, CSS, and JavaScript.

## Project structure

```
cyber-threat-dashboard/
├── index.html        ← Main dashboard
├── style.css         ← All styling
├── app.js            ← Charts and JS logic
├── ai-analyst.html   ← AI chat page
├── ip-checker.html   ← IP / URL checker
├── news.html         ← News feed
└── README.md
```

## Setup steps

### Step 1 — Get your Claude API key
1. Go to https://console.anthropic.com
2. Sign up / log in
3. Click "API Keys" → "Create Key"
4. Copy the key (starts with sk-ant-...)

### Step 2 — Add your API key
Open `ai-analyst.html` and find this line near the bottom:
```
const API_KEY = 'YOUR_API_KEY_HERE';
```
Replace `YOUR_API_KEY_HERE` with your actual key.

### Step 3 — Run the project
Simply open `index.html` in any browser. No installation needed!
Or use VS Code Live Server for best experience.

### Step 4 — Deploy to GitHub Pages (free hosting)
1. Create a GitHub account at github.com
2. Create a new repository called "cyber-threat-dashboard"
3. Upload all your files
4. Go to Settings → Pages → Source → main branch
5. Your site will be live at: https://yourusername.github.io/cyber-threat-dashboard

## Features
- Real-time threat statistics dashboard
- Interactive Chart.js visualizations
- IP / URL reputation checker
- AI Threat Analyst powered by Claude API
- Live cybersecurity news feed
- Filter and search across all pages

## Tech stack
- HTML5, CSS3, Vanilla JavaScript
- Chart.js for data visualization
- Claude API (Anthropic) for AI features
