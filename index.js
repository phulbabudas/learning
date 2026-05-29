<<<<<<< HEAD
// index.js — Main Entry Point
// Call Transcript Generation & Summarization using OpenAI API
// Assignment: Developer Task — Node.js + OpenAI SDK v4+

import "dotenv/config";
import OpenAI from "openai";
import { generateTranscript } from "./transcriptGenerator.js";
import { summarizeTranscript } from "./transcriptSummarizer.js";
import { saveToFiles } from "./fileOutput.js";

// ─── Step 1: Validate Environment & Mock Mode Check ────────────────────────
function checkMockMode() {
  const apiKey = (process.env.OPENAI_API_KEY || "").trim();
  const useMockEnv = process.env.USE_MOCK === "true";
  
  if (
    useMockEnv ||
    !apiKey ||
    apiKey === "your_openai_api_key_here" ||
    apiKey === "your_api_key_here" ||
    !apiKey.startsWith("sk-")
  ) {
    return true;
  }
  return false;
}


function validateEnv(isMockMode) {
  if (isMockMode) return; // Skip validation requirements in mock mode

  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ ERROR: OPENAI_API_KEY is missing!");
    console.error(
      "   Please create a .env file with your API key."
    );
    process.exit(1);
  }
  if (process.env.OPENAI_API_KEY === "your_openai_api_key_here") {
    console.error("❌ ERROR: Please replace the placeholder API key in .env");
    process.exit(1);
  }
}

// ─── Step 2: Initialize OpenAI Client ──────────────────────────────────────
function createOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "mock-key",
  });
}

// ─── Main Orchestration Function ───────────────────────────────────────────
async function main() {
  console.log("═══════════════════════════════════════════════════════");
  console.log("   📞 AI Call Transcript Generator & Summarizer");
  console.log("   Powered by OpenAI API (gpt-4o-mini)");
  console.log("═══════════════════════════════════════════════════════");

  // Determine if we should run in Offline Mock Mode
  const isMockMode = checkMockMode();
  
  // Validate environment variables (if not running in mock mode)
  validateEnv(isMockMode);

  // Initialize OpenAI client
  const client = createOpenAIClient();
  client.isMock = isMockMode;

  if (isMockMode) {
    console.log("⚠️  Running in OFFLINE MOCK MODE");
    console.log("   (No valid OpenAI API key detected or USE_MOCK is true)");
  } else {
    console.log("✅ OpenAI API key validated successfully");
  }

  // Get call type from env or default to "support"
  const callType =
    process.env.CALL_TYPE === "sales" ? "sales" : "support";
  console.log(`\n🎯 Call Type: ${callType.toUpperCase()}`);

  try {
    // ── STEP 1: Generate Transcript ──────────────────────────────────────
    const transcript = await generateTranscript(client, callType);

    // Display transcript
    console.log("\n" + "─".repeat(55));
    console.log("📄 GENERATED TRANSCRIPT:");
    console.log("─".repeat(55));
    console.log(transcript);

    // ── STEP 2: Summarize Transcript ─────────────────────────────────────
    const summary = await summarizeTranscript(client, transcript, callType);

    // Display summary
    console.log("\n" + "─".repeat(55));
    console.log("📊 STRUCTURED SUMMARY:");
    console.log("─".repeat(55));
    console.log(summary);

    // ── STEP 3: Save to Files ─────────────────────────────────────────────
    saveToFiles(transcript, summary, callType);

    console.log("\n" + "═".repeat(55));
    console.log(`✅ Process completed successfully${isMockMode ? " (Mock Mode)" : ""}!`);
    console.log("═".repeat(55));
  } catch (error) {
    // Elegant dynamic fallback in case the API call throws a 401 directly
    if (error instanceof OpenAI.APIError && error.status === 401 && !client.isMock) {
      console.warn("\n⚠️  OpenAI API key validation failed (401 Unauthorized).");
      console.warn("   Automatically falling back to OFFLINE MOCK MODE to complete the run...");
      client.isMock = true;
      try {
        const transcript = await generateTranscript(client, callType);
        console.log("\n" + "─".repeat(55));
        console.log("📄 GENERATED TRANSCRIPT (MOCK):");
        console.log("─".repeat(55));
        console.log(transcript);

        const summary = await summarizeTranscript(client, transcript, callType);
        console.log("\n" + "─".repeat(55));
        console.log("📊 STRUCTURED SUMMARY (MOCK):");
        console.log("─".repeat(55));
        console.log(summary);

        saveToFiles(transcript, summary, callType);

        console.log("\n" + "═".repeat(55));
        console.log("✅ Process completed successfully via Mock Mode fallback!");
        console.log("═".repeat(55));
        return;
      } catch (fallbackError) {
        handleError(fallbackError);
      }
    }
    handleError(error);
  }
}

// ─── Error Handler ──────────────────────────────────────────────────────────
function handleError(error) {
  console.error("\n❌ An error occurred:\n");

  if (error instanceof OpenAI.APIError) {
    // OpenAI SDK specific errors
    console.error(`   Status  : ${error.status}`);
    console.error(`   Message : ${error.message}`);

    if (error.status === 401) {
      console.error(
        "\n   💡 Fix: Your API key is invalid. Check your .env file."
      );
    } else if (error.status === 429) {
      console.error(
        "\n   💡 Fix: Rate limit hit. Wait a moment and try again."
      );
    } else if (error.status === 500) {
      console.error(
        "\n   💡 Fix: OpenAI server error. Try again in a few minutes."
      );
    }
  } else {
    console.error(`   ${error.message}`);
  }

  process.exit(1);
}

// ─── Run ────────────────────────────────────────────────────────────────────
main();

=======
const express = require('express')
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 2000;

//Routes
app.get("/api/users",(req, res)=>{
return res.json(users);
});

app.get("/usres",(req,res) =>{
  const html =`
  <ul>
  ${users.map(user =>`<li>${user.first_name}</li>`).join("") 

  }
    
    </ul>

  `
res.send(html);

})

app.listen(PORT,() => console.log(`server Started at PORT:${PORT}`))
>>>>>>> 2ce6ce6cd30b7a3d832f429917246091c035910b
