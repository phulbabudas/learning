// transcriptGenerator.js
// Step 2: Generate a realistic call transcript using OpenAI API

import OpenAI from "openai";

/**
 * Generates a realistic customer support or sales call transcript
 * @param {OpenAI} client - OpenAI client instance
 * @param {string} callType - "support" or "sales"
 * @returns {Promise<string>} - Generated transcript text
 */
export async function generateTranscript(client, callType = "support") {
  console.log(`\n📞 Generating a realistic ${callType} call transcript...`);

  if (client.isMock) {
    console.log(`✅ Transcript generated successfully! (Mock)`);
    const { mockTranscripts } = await import("./mockData.js");
    return mockTranscripts[callType] || mockTranscripts["support"];
  }

  const prompts = {
    support: `Generate a realistic customer support call transcript between a customer and a support agent for a software product (like a project management SaaS tool). 

The transcript should:
- Be 15-20 exchanges long
- Include a greeting, problem description, troubleshooting steps, and resolution
- Have the customer experiencing a login/billing issue
- Include realistic dialogue with natural pauses like "uh", "hmm", "let me check that"
- Show the agent being helpful, empathetic, and professional
- End with the issue resolved and a satisfaction check

Format each line as:
[AGENT]: dialogue here
[CUSTOMER]: dialogue here`,

    sales: `Generate a realistic outbound sales call transcript between a sales representative and a potential business client for a CRM software solution.

The transcript should:
- Be 15-20 exchanges long  
- Include introduction, need discovery, product pitch, objection handling, and next steps
- Have the prospect initially hesitant but becoming interested
- Include realistic dialogue with natural filler words
- Show the rep using consultative selling techniques
- End with scheduling a demo or follow-up meeting

Format each line as:
[SALES REP]: dialogue here
[PROSPECT]: dialogue here`,
  };

  const systemPrompt =
    "You are an expert at writing realistic business call transcripts. Generate authentic-sounding conversations that reflect real-world scenarios.";

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      {
        role: "user",
        content: prompts[callType] || prompts["support"],
      },
    ],
    temperature: 0.8, // Slightly creative for realistic variation
    max_tokens: 1500,
  });

  const transcript = response.choices[0].message.content;

  console.log(`✅ Transcript generated successfully!`);
  console.log(
    `   Model used: ${response.model} | Tokens used: ${response.usage.total_tokens}`
  );

  return transcript;
}
