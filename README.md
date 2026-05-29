# 📞 AI Call Transcript Generator & Summarizer

OpenAI API ka use karke realistic call transcripts generate karo aur unhe structured format mein summarize karo.

## 🛠️ Tech Stack

- **Runtime:** Node.js (v18+)
- **Language:** JavaScript (ES Modules)
- **SDK:** `openai` v4+ (official)
- **Model:** `gpt-4o-mini`
- **Env Management:** `dotenv`

---

## 📁 Project Structure

```
call-transcript-ai/
├── index.js                # Main entry point
├── transcriptGenerator.js  # Step 1: Transcript generation
├── transcriptSummarizer.js # Step 2: AI summarization
├── fileOutput.js           # Step 3: Save results to files
├── .env.example            # Environment variable template
├── .gitignore
├── package.json
└── output/                 # Auto-created — saved results
    ├── transcript_*.txt
    ├── summary_*.md
    └── full_report_*.md
```

---

## ⚙️ Setup & Installation

### 1. Clone / Download the project

```bash
cd call-transcript-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
# .env.example ko copy karo
cp .env.example .env
```

Phir `.env` file mein apni real API key daalo:

```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxx
CALL_TYPE=support   # "support" ya "sales"
```

> 🔑 API key yahan se milegi: https://platform.openai.com/api-keys

---

## 🚀 Running the Project

### Customer Support Call (default):
```bash
npm start
```

### Sales Call:
```bash
# .env mein CALL_TYPE=sales karo, phir:
npm start
```

---

## 📊 What It Does

| Step | Action | Model Used |
|------|--------|------------|
| 1 | Realistic call transcript generate karta hai | `gpt-4o-mini` |
| 2 | Transcript ko structured bullets mein summarize karta hai | `gpt-4o-mini` |
| 3 | Dono ko `/output` folder mein save karta hai | — |

---

## 📄 Sample Output

### Generated Transcript (Support Call):
```
[AGENT]: Thank you for calling TechSupport, this is Riya. How can I help you today?
[CUSTOMER]: Hi Riya, I've been trying to log in for the past 30 minutes and it keeps saying my password is incorrect...
...
```

### Structured Summary:
```markdown
## 📋 CALL SUMMARY

**🎯 Call Overview:**
- Call Type: Support
- Outcome: Resolved

**🔧 Issue Description:**
- Primary Issue: Login failure due to expired session token

**✅ Resolution Steps Taken:**
- Agent verified customer identity
- Reset session token from backend
- Guided customer through re-login process
...
```

---

## 🔐 Security

- API keys kabhi bhi code mein hardcode mat karo
- `.env` file `.gitignore` mein already add hai
- `.env.example` ko safely commit kar sakte ho (no real keys)

---

## 📦 Dependencies

```json
{
  "openai": "^4.x",    // Official OpenAI SDK v4+
  "dotenv": "^16.x"    // Environment variable loader
}
```

---

## ❗ Troubleshooting

| Error | Fix |
|-------|-----|
| `OPENAI_API_KEY is missing` | `.env` file mein key daalo |
| `401 Unauthorized` | API key check karo — invalid hai |
| `429 Rate Limit` | Thodi der ruko aur dobara try karo |
| `500 Server Error` | OpenAI server down — baad mein try karo |
