// fileOutput.js
// Utility to save transcript and summary to files

import fs from "fs";
import path from "path";

/**
 * Saves transcript and summary to output files
 * @param {string} transcript - Generated transcript
 * @param {string} summary - Generated summary
 * @param {string} callType - "support" or "sales"
 */
export function saveToFiles(transcript, summary, callType = "support") {
  const outputDir = "./output";

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-")
    .slice(0, 19);
  const transcriptFile = path.join(
    outputDir,
    `transcript_${callType}_${timestamp}.txt`
  );
  const summaryFile = path.join(
    outputDir,
    `summary_${callType}_${timestamp}.md`
  );
  const combinedFile = path.join(
    outputDir,
    `full_report_${callType}_${timestamp}.md`
  );

  // Save individual files
  fs.writeFileSync(transcriptFile, transcript, "utf8");
  fs.writeFileSync(summaryFile, summary, "utf8");

  // Save combined report
  const combinedContent = `# Call Transcript & Analysis Report
Generated: ${new Date().toLocaleString()}
Call Type: ${callType.toUpperCase()}

---

# 📞 ORIGINAL TRANSCRIPT

${transcript}

---

# 📊 AI ANALYSIS & SUMMARY

${summary}
`;
  fs.writeFileSync(combinedFile, combinedContent, "utf8");

  console.log(`\n💾 Files saved:`);
  console.log(`   📄 Transcript : ${transcriptFile}`);
  console.log(`   📊 Summary    : ${summaryFile}`);
  console.log(`   📑 Full Report: ${combinedFile}`);

  return { transcriptFile, summaryFile, combinedFile };
}
