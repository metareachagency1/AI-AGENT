# Ahmer AI Agent 🤖

A simple agent-style AI web application with a browser chat interface and a secure Node.js backend.

## Important
Do **not** put your AI API key in `script.js`, `index.html`, or any GitHub public file.

## Run locally

1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run:
   ```bash
   npm install
   ```
4. Set your API key as an environment variable.

### Windows PowerShell
```powershell
$env:OPENAI_API_KEY="YOUR_API_KEY"
npm start
```

### macOS/Linux
```bash
export OPENAI_API_KEY="YOUR_API_KEY"
npm start
```

5. Open `http://localhost:3000`

## GitHub / deployment
This project needs a server because the API key must remain private. GitHub Pages alone cannot safely run the backend. Deploy the whole project to a Node-compatible host such as Render, Railway, or Vercel, and add `OPENAI_API_KEY` as a server-side environment variable.

## Next upgrades
- Web search tool
- File/document analysis
- Memory
- Task planner
- Tool calling
- Authentication
- Voice input/output
