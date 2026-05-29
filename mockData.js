// mockData.js
// High-quality, realistic pre-generated data for offline mock mode

export const mockTranscripts = {
  support: `[AGENT]: Thank you for calling SaaSFlow Support. This is Sarah, how can I assist you today?
[CUSTOMER]: Hi Sarah, I'm really frustrated. I've been trying to log into my team's workspace for the last 30 minutes, and it keeps saying my account is suspended or the password is incorrect. I have an important client demo in an hour!
[AGENT]: I completely understand the urgency, and I'm very sorry for the stress this is causing. Let's get this sorted out for you right away. May I please have your registered email address and the workspace name?
[CUSTOMER]: Yes, the email is alex.jones@designco.com and the workspace is designco-portal.
[AGENT]: Thank you, Alex. Let me pull up your account records... Hmm, okay, I see the workspace 'designco-portal'. The system shows that the account was flagged for a potential security mismatch because of multiple login attempts from different locations within a short time.
[CUSTOMER]: Oh, wait! Our designer is in London and I'm in New York, and we both tried logging in around the same time. Is that why?
[AGENT]: Exactly, Alex. Our automated security protocols temporarily locked the account to prevent unauthorized access. But don't worry, I can clear this lock for you immediately.
[CUSTOMER]: Oh, thank goodness. How do we unlock it?
[AGENT]: I have just initiated a workspace security release. You should receive a verification link at alex.jones@designco.com in about 30 seconds. Could you please check your inbox and click that link?
[CUSTOMER]: Let me refresh my mail... Yes, I got it! "Action Required: Verify Workspace Access". Clicking the link now... Okay, it says "Verification Successful".
[AGENT]: Perfect. Now, please try logging in again on your end using your regular credentials.
[CUSTOMER]: Okay, putting in my username and password... Wow, it worked! I'm back in. And is the designer in London able to log in too?
[AGENT]: They will be able to log in, but to prevent this from happening again, I highly recommend enabling Multi-Factor Authentication (MFA) or setting up single sign-on (SSO) if your plan supports it. Would you like me to send you the guide for setting that up?
[CUSTOMER]: Yes, please do! That would be incredibly helpful so we don't run into this during a live demo.
[AGENT]: Absolutely, I am sending the MFA setup instructions to your email right now. Is there anything else I can assist you with to make sure your demo goes smoothly?
[CUSTOMER]: No, that's all, Sarah. You've been a lifesaver. Thank you so much!
[AGENT]: You are very welcome, Alex! Best of luck with your client demo, and have a wonderful day. Thank you for choosing SaaSFlow!`,

  sales: `[SALES REP]: Hello, this is Marcus from LeadSphere. Am I speaking with Michael?
[PROSPECT]: Yes, this is Michael. Who is this again?
[SALES REP]: Hi Michael, I'm Marcus from LeadSphere. We help mid-sized B2B marketing teams automate their lead generation pipeline. I noticed your team at Apex Global recently expanded your sales department, and wanted to see how you're currently managing your outreach database.
[PROSPECT]: Ah, sales outreach. To be honest, Marcus, we are already using HubSpot and a couple of other tools. We don't really have the budget or the appetite to add another subscription to our stack right now.
[SALES REP]: That's completely fair, Michael. HubSpot is a fantastic system of record. Many of our customers, like Zenith Corp and Quantix, actually use HubSpot too. What they found, though, was that their reps were spending up to 10 hours a week manually cleaning stale lead data and scraping emails, which HubSpot doesn't automate out of the box. How much manual sourcing is your team currently doing?
[PROSPECT]: Well, quite a bit, actually. Our reps are constantly compiling lists from LinkedIn and manually verifying them. It is definitely a time sink, but we've just accepted it as part of the job.
[SALES REP]: I hear that all the time. Sourcing feels like a necessary evil. But what if you could automate that entire verification and enrichment process directly inside HubSpot, giving your reps 10 hours a week back to actually sell?
[PROSPECT]: That sounds good on paper, but how accurate is your data? We've tried list providers before and ended up with a 30% bounce rate, which damaged our domain reputation.
[SALES REP]: That is a critical concern, Michael. A high bounce rate is a silent killer for email deliverability. That's why LeadSphere uses real-time SMTP verification right before exporting. We guarantee a bounce rate of under 5%, or we refund the credits.
[PROSPECT]: Okay, under 5% is impressive. But what about the setup? Is it going to take months to integrate with our existing HubSpot pipelines?
[SALES REP]: Not at all. We have a native, one-click HubSpot integration. Setup takes less than 15 minutes, and your team can start enriching profiles immediately.
[PROSPECT]: Hmm. And what does the pricing look like? As I mentioned, budget is tight this quarter.
[SALES REP]: We offer scalable tier plans based on search credits. Since you're looking to optimize rep hours, the savings in labor cost alone usually covers the subscription in the first month. I'd love to show you a quick 10-minute demo using some real leads from your industry to let you judge the quality yourself. How does next Tuesday morning at 10 AM sound?
[PROSPECT]: Let me check my calendar... Tuesday at 10 AM works. Let's do a quick demo and see if it's as seamless as you say.
[SALES REP]: Perfect! I'll send over a calendar invite with a Zoom link, along with a quick questionnaire to customize the demo for Apex Global. Looking forward to speaking on Tuesday, Michael!
[PROSPECT]: Sounds good, Marcus. Thanks for calling.
[SALES REP]: Thank you, Michael. Have a great day!`
};

export const mockSummaries = {
  support: `## 📋 CALL SUMMARY

**🎯 Call Overview:**
- Call Type: Support
- Duration: ~4 minutes (Estimated)
- Outcome: Resolved

**👤 Customer Details:**
- Customer Sentiment: Initially Frustrated, finally Satisfied
- Issue Category: Account/Security Lockout
- Urgency Level: High (Client demo in 1 hour)

**🔧 Issue Description:**
- Primary Issue: Customer was locked out of the team workspace due to simultaneous login attempts from different geographical locations (London and New York).
- Secondary Issues: High urgency due to an upcoming client demo.

**✅ Resolution Steps Taken:**
- Verified customer identity and retrieved workspace details (\`designco-portal\`).
- Identified that automated security protocols flagged the account due to concurrent location mismatch.
- Executed a workspace security release.
- Sent a secure verification link to the customer's email.
- Guided the customer through the successful verification and login process.
- Recommended enabling MFA/SSO to prevent future automated lockouts.
- Dispatched setup documentation for MFA via email.

**📊 Key Outcomes:**
- Was issue resolved? Yes
- Follow-up required? No - MFA setup guide sent.
- Customer satisfaction: Extremely Satisfied

**💡 Agent Performance Notes:**
- Strengths demonstrated: High empathy, active listening, rapid diagnosis, clear and professional communication.
- Areas for improvement: None, handled efficiently under pressure.

**🔔 Action Items:**
- Customer to configure MFA using the email instructions to ensure secure multi-user workspace access.`,

  sales: `## 📋 SALES CALL SUMMARY

**🎯 Call Overview:**
- Call Type: Outbound Sales
- Duration: ~5 minutes (Estimated)
- Outcome: Follow-up Scheduled (Demo booked)

**👤 Prospect Profile:**
- Prospect Sentiment: Initially cold/resistant, progressed to interested and warm.
- Company Size/Type: Mid-sized B2B Company (Apex Global), recently expanded sales department.
- Decision-maker Level: Yes (Michael, decision-maker/manager).

**🔍 Needs Discovery:**
- Current Pain Points: Sales reps spending up to 10 hours a week manually sourcing, cleaning, and verifying leads from LinkedIn.
- Current Solution: HubSpot CRM + manual LinkedIn scraping.
- Budget Signals: Initially negative/tight budget, but receptive to ROI-based justification.

**💼 Pitch & Engagement:**
- Key Value Props Presented: Automation of lead verification/enrichment, returning 10 hours/week to reps, native 15-minute HubSpot integration.
- Features that resonated: Real-time SMTP verification with <5% bounce rate guarantee, one-click CRM integration.
- Objections raised: Budget/subscription fatigue, data accuracy/deliverability fears, onboarding/integration time.

**🛡️ Objection Handling:**
- Objection 1: Budget constraints → Addressed by demonstrating ROI (reclaiming manual labor hours pays for subscription).
- Objection 2: Data accuracy (feared high bounce rates) → Addressed with LeadSphere's real-time SMTP verification and <5% bounce rate guarantee.
- Objection 3: Complex onboarding → Addressed by highlighting native 15-minute, one-click integration with HubSpot.

**📊 Deal Assessment:**
- Qualification Score: Warm
- Probability to Close: Medium-High
- Estimated Timeline: Next few weeks post-demo.

**🔔 Next Steps & Action Items:**
- Sales rep to send Zoom invitation for demo on Tuesday at 10 AM.
- Sales rep to send a customization questionnaire to gather Apex Global's requirements.
- Sales rep to prepare a demo using real B2B leads tailored to Apex Global's industry.`
};
