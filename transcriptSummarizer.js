// transcriptSummarizer.js
// Step 3: Analyze and summarize transcript into structured bulleted format

import OpenAI from "openai";

/**
 * Analyzes and summarizes a call transcript into structured bullet points
 * @param {OpenAI} client - OpenAI client instance
 * @param {string} transcript - The call transcript to summarize
 * @param {string} callType - "support" or "sales"
 * @returns {Promise<string>} - Structured summary
 */
export async function summarizeTranscript(
  client,
  transcript,
  callType = "support"
) {
  console.log(`\n🔍 Analyzing and summarizing the transcript...`);

  if (client.isMock) {
    console.log(`✅ Summary generated successfully! (Mock)`);
    const { mockSummaries } = await import("./mockData.js");
    return mockSummaries[callType] || mockSummaries["support"];
  }

  const summaryPrompts = {
    support: `Analyze the following customer support call transcript and provide a structured summary.

TRANSCRIPT:
${transcript}

Please provide a detailed analysis in the following structured format:

## 📋 CALL SUMMARY

**🎯 Call Overview:**
- Call Type: [Support/Sales]
- Duration: [Estimated]
- Outcome: [Resolved/Unresolved/Escalated]

**👤 Customer Details:**
- Customer Sentiment: [Frustrated/Neutral/Satisfied]
- Issue Category: [Billing/Technical/Account/Other]
- Urgency Level: [High/Medium/Low]

**🔧 Issue Description:**
- Primary Issue: [Brief description]
- Secondary Issues: [If any]

**✅ Resolution Steps Taken:**
- [Step 1]
- [Step 2]
- [Step 3 if applicable]

**📊 Key Outcomes:**
- Was issue resolved? [Yes/No]
- Follow-up required? [Yes/No - details]
- Customer satisfaction: [Satisfied/Unsatisfied]

**💡 Agent Performance Notes:**
- Strengths demonstrated: [List]
- Areas for improvement: [If any]

**🔔 Action Items:**
- [Any pending tasks or follow-ups]`,

    sales: `Analyze the following sales call transcript and provide a structured summary.

TRANSCRIPT:
${transcript}

Please provide a detailed analysis in the following structured format:

## 📋 SALES CALL SUMMARY

**🎯 Call Overview:**
- Call Type: Outbound Sales
- Duration: [Estimated]
- Outcome: [Deal Progressed/No Interest/Follow-up Scheduled]

**👤 Prospect Profile:**
- Prospect Sentiment: [Cold/Warm/Interested/Hot]
- Company Size/Type: [If mentioned]
- Decision-maker Level: [Yes/No/Unknown]

**🔍 Needs Discovery:**
- Current Pain Points: [List]
- Current Solution: [What they use now]
- Budget Signals: [Positive/Negative/Unclear]

**💼 Pitch & Engagement:**
- Key Value Props Presented: [List]
- Features that resonated: [List]
- Objections raised: [List]

**🛡️ Objection Handling:**
- Objection 1: [Objection → Response]
- Objection 2: [If any]

**📊 Deal Assessment:**
- Qualification Score: [Hot/Warm/Cold]
- Probability to Close: [High/Medium/Low]
- Estimated Timeline: [If mentioned]

**🔔 Next Steps & Action Items:**
- [Scheduled demo date if any]
- [Follow-up tasks for rep]
- [Materials to send]`,
  };

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // As specified in assignment
    messages: [
      {
        role: "system",
        content:
          "You are an expert call analyst. Analyze call transcripts and provide clear, actionable, structured summaries in bullet-point format. Be concise but comprehensive.",
      },
      {
        role: "user",
        content: summaryPrompts[callType] || summaryPrompts["support"],
      },
    ],
    temperature: 0.3, // Lower temperature for consistent, factual analysis
    max_tokens: 1000,
  });

  const summary = response.choices[0].message.content;

  console.log(`✅ Summary generated successfully!`);
  console.log(
    `   Model used: ${response.model} | Tokens used: ${response.usage.total_tokens}`
  );

  return summary;
}
