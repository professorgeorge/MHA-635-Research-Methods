window.COURSE_DATA = {
  meta: {
    title: "MHA 635: Research Methods",
    subtitle: "Applied Research Project",
    university: "University of Nevada, Las Vegas",
    program: "Master of Hospitality Administration",
    instructor: { name: "Babu George, PhD", title: "Visiting Professor", linkedin: "https://www.linkedin.com/in/beingbabu/" }
  },
  weights: { 1:5, 2:5, 3:15, 4:5, 5:15, 6:5, 7:25, 8:25 },
  gradingMode: { 1:"Complete / Revise", 2:"Complete / Revise", 3:"Scored (Milestone)", 4:"Complete / Revise", 5:"Scored (Milestone)", 6:"Complete / Revise", 7:"Scored (Milestone)", 8:"Scored (Final)" },
  feedbackCodes: [
    { code:"P1", cat:"Problem", meaning:"Problem too broad", tip:"Narrow your problem to a specific segment, operation, or setting. Avoid sweeping industry-level claims." },
    { code:"P2", cat:"Problem", meaning:"Problem is descriptive rather than managerial", tip:"Reframe around a decision someone needs to make — a cost, a gap, a choice." },
    { code:"R1", cat:"Research Focus", meaning:"Research question unclear", tip:"A good RQ is specific, focused, and answerable through a real data collection effort." },
    { code:"R2", cat:"Research Focus", meaning:"Question and purpose not aligned", tip:"Your purpose statement and main research question should mirror each other exactly." },
    { code:"L1", cat:"Literature", meaning:"Sources not scholarly enough", tip:"Use peer-reviewed journal articles from EBSCOhost, Google Scholar, or Scopus." },
    { code:"L2", cat:"Literature", meaning:"Review describes studies but does not synthesize", tip:"Group by theme and compare findings across studies — don't just summarize each one." },
    { code:"D1", cat:"Design", meaning:"Design does not fit the question", tip:"Exploratory questions call for qualitative; hypothesis testing calls for quantitative." },
    { code:"D2", cat:"Design", meaning:"Feasibility not addressed", tip:"Explain where you'd get participants/data and whether access is realistic." },
    { code:"S1", cat:"Data Plan", meaning:"Sample or unit of analysis undefined", tip:"Specify who or what you'd study: hotel guests, managers, properties, transactions." },
    { code:"M1", cat:"Data Plan", meaning:"Measures or question areas too vague", tip:"Define each variable by how it would be observed, asked, or measured." },
    { code:"A1", cat:"Analysis", meaning:"Analysis plan too generic", tip:"Name specific techniques: regression, thematic analysis, chi-square, ANOVA, etc." },
    { code:"W1", cat:"Writing", meaning:"Writing needs clearer structure", tip:"Use clear topic sentences and smooth transitions between every paragraph." }
  ],
  rubric: [
    { criterion:"Problem clarity & business relevance", scores:{ 4:"Problem is specific, important, and clearly tied to a real business decision.", 3:"Problem is clear but may need tighter focus or stronger significance.", 2:"Problem is somewhat broad, vague, or weakly connected to a decision.", 1:"Problem is unclear, trivial, or not meaningfully researchable." } },
    { criterion:"Research focus & feasibility", scores:{ 4:"Purpose, questions, and scope are well aligned and feasible.", 3:"Research focus is mostly clear with minor issues in alignment or scope.", 2:"Questions or scope need substantial revision for feasibility.", 1:"Research focus is poorly defined or not feasible." } },
    { criterion:"Use of literature & synthesis", scores:{ 4:"Sources are relevant and scholarly; synthesis identifies patterns and gaps.", 3:"Sources are acceptable; synthesis is present but limited.", 2:"Sources or synthesis are uneven, incomplete, or too descriptive.", 1:"Little evidence of relevant scholarly engagement." } },
    { criterion:"Design & data-plan fit", scores:{ 4:"Design, sample, and data strategy strongly fit the question.", 3:"General fit is sound with some weak spots.", 2:"Fit is partial or under-explained.", 1:"Design does not fit the question or context." } },
    { criterion:"Analysis logic & managerial usefulness", scores:{ 4:"Analysis plan is clear and findings would clearly inform practice.", 3:"Analysis plan is reasonable though somewhat generic.", 2:"Analysis plan is thin or weakly linked to the question.", 1:"Analysis plan is missing, unclear, or impractical." } },
    { criterion:"Organization & professionalism", scores:{ 4:"Writing is clear, organized, and professionally presented with correct citation.", 3:"Writing is generally clear with minor organization or citation issues.", 2:"Writing or citation needs notable improvement.", 1:"Presentation is confusing, careless, or missing key elements." } }
  ],
  glossary: [
    { term:"Research Question", def:"A specific, answerable question that guides the direction and scope of a study." },
    { term:"Hypothesis", def:"A testable prediction about the relationship between two or more variables." },
    { term:"Unit of Analysis", def:"The main entity being studied — individuals, organizations, events, or artifacts." },
    { term:"Construct", def:"An abstract concept that cannot be directly observed (e.g., service quality, loyalty)." },
    { term:"Operationalization", def:"Defining how a construct will be measured or observed in a study." },
    { term:"Literature Review", def:"A critical summary and synthesis of existing research on a topic." },
    { term:"Literature Matrix", def:"A structured table organizing sources by author, year, method, findings, and relevance." },
    { term:"Synthesis", def:"Combining findings from multiple sources to identify patterns or gaps — not just summarizing." },
    { term:"Qualitative Research", def:"Explores meaning and experiences through words, observations, or documents." },
    { term:"Quantitative Research", def:"Tests relationships between measurable variables using numerical data and statistics." },
    { term:"Mixed Methods", def:"Combines both qualitative and quantitative data collection and analysis." },
    { term:"Purposive Sampling", def:"Selecting participants based on specific relevant characteristics rather than randomly." },
    { term:"Convenience Sampling", def:"Selecting participants who are easiest to access; useful but limits generalizability." },
    { term:"Sample Size", def:"The number of participants or data points in a study; larger samples increase statistical power." },
    { term:"Validity", def:"The extent to which a study measures what it intends to measure." },
    { term:"Reliability", def:"The consistency of a measurement instrument across time, contexts, or raters." },
    { term:"Bias", def:"Systematic error in data collection or analysis that skews results in a particular direction." },
    { term:"Informed Consent", def:"Process by which participants are told about the study and voluntarily agree to participate." },
    { term:"IRB", def:"Institutional Review Board — a committee ensuring ethical standards in research involving humans." },
    { term:"Descriptive Statistics", def:"Statistics that summarize data: mean, median, standard deviation, frequency distributions." },
    { term:"Inferential Statistics", def:"Statistics used to draw conclusions about a population from a sample (t-test, regression, ANOVA)." },
    { term:"Regression Analysis", def:"A statistical method that models the relationship between a dependent variable and one or more predictors." },
    { term:"Thematic Analysis", def:"A qualitative method for identifying and interpreting patterns (themes) across a dataset." },
    { term:"Case Study", def:"An in-depth investigation of a single instance or a small number of instances." },
    { term:"Survey", def:"A structured set of questions used to collect data from a defined group of respondents." },
    { term:"Interview Guide", def:"A prepared set of open-ended questions for a qualitative interview, allowing for flexible depth." },
    { term:"Managerial Implications", def:"Practical recommendations that research findings could inform for business decision-makers." },
    { term:"Research Proposal", def:"A formal document describing a planned study: problem, questions, design, and data plan." },
    { term:"APA Style", def:"Citation and formatting standard published by the American Psychological Association." },
    { term:"Peer-Reviewed", def:"Publication process where other experts evaluate an article before it is published in a journal." },
    { term:"Revision Memo", def:"A 75–100 word summary at the start of each submission explaining what changed and how feedback was addressed." },
    { term:"Gap Statement", def:"A clear explanation of what prior research has not answered, and why your study is needed." },
    { term:"Likert Scale", def:"A rating scale (e.g., 1–5 or 1–7) used to measure attitudes, perceptions, or agreement." },
    { term:"Moderation", def:"When a third variable changes the strength or direction of the relationship between two others." },
    { term:"Common Method Bias", def:"Distortion in results that occurs when all variables are measured using the same instrument." }
  ],
  weeks: [
    {
      number:1, title:"Business Problem", lengthTarget:"300–400 words",
      deliverable:"Identify a practical business problem linked to hospitality. Explain the setting, why it matters, who is affected, and what business decision research could improve.",
      required:["Business context","Problem statement","Why the problem matters","Decision or action the research could support"],
      lms:"This module you will identify one practical business problem linked directly or indirectly to hospitality. Submit one updated document with highlighted changes and a short revision memo. Your goal is to define a problem that is real, specific, and researchable rather than broad or purely descriptive.",
      lesson: {
        overview:"Every research project starts with a problem worth solving. Your job this module is to find one — something real, specific, and tied to a decision a manager actually faces. Not an industry trend, not a general complaint. A problem.",
        sections:[
          { heading:"What Makes a Problem Research-Worthy?",
            html:`<p>Not every frustration is a research problem. A research-worthy problem has three qualities:</p>
<ul>
<li><strong>Specific:</strong> "Hotels have poor service" is an observation. "Repeat guest NPS at mid-scale extended-stay hotels dropped 13 points over 18 months — and management doesn't know why" is a problem.</li>
<li><strong>Consequential:</strong> Someone must care about solving it. Revenue, guest retention, employee turnover, operational costs — these are the stakes of hospitality management.</li>
<li><strong>Researchable:</strong> You can imagine what data might shed light on it — even if you're not collecting data yet.</li>
</ul>` },
          { heading:"The Problem–Decision Framework",
            html:`<p>The most important test: <strong>What decision would better information change?</strong> Use this chain:</p>
<div style="background:#fdf3f3;border-left:3px solid #B0202A;padding:12px 16px;border-radius:4px;margin:8px 0;font-style:italic;">Problem → Why It Matters → Who Is Affected → What Decision It Could Inform</div>
<p><strong>Example:</strong> A mid-scale hotel chain sees online review scores falling despite no changes in facilities or staffing. This matters because lower review scores correlate with lower occupancy. It affects revenue managers and operations leadership. The decision it could inform: whether to invest in staff retraining, loyalty program redesign, or service standard revision.</p>` },
          { heading:"Hospitality Is Broader Than Hotels",
            html:`<p>Your topic can connect directly <em>or indirectly</em> to hospitality. This includes:</p>
<ul>
<li>Hotels, resorts, vacation rentals, cruise lines</li>
<li>Restaurants, food &amp; beverage, catering, event venues</li>
<li>Tourism boards, destination marketing organizations</li>
<li>Airlines, transportation, travel technology platforms</li>
<li>Theme parks, recreation, wellness, healthcare hospitality</li>
</ul>
<p>Choose an industry you know or can access. Proximity to the problem makes your proposal more credible and more convincing.</p>` },
          { heading:"Common Mistakes — Module 1",
            html:`<ul>
<li><strong>Too broad:</strong> "The hospitality industry faces employee retention challenges." This applies everywhere, always. Narrow to a specific segment or setting.</li>
<li><strong>Too descriptive:</strong> "Staff turnover in Las Vegas hotels is high." That's a fact, not a problem. Where is the decision, the cost, the consequence?</li>
<li><strong>Not decision-linked:</strong> "Guests prefer personalized service." Interesting — but so what? Connect it to a decision a manager needs to make.</li>
<li><strong>Too personal:</strong> "I had a bad experience at a resort." Your experience is a starting point — not the problem statement itself.</li>
</ul>` },
          { heading:"A Taxonomy of Hospitality Business Problems",
            html:`<p>If you are unsure where to start, this taxonomy maps the main categories of credible hospitality research problems. Choose the category closest to your professional experience — your proposal will always be stronger when it is rooted in an industry you know:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Category</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Common Research Problems</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Service Quality &amp; Guest Experience</strong></td><td style="border:1px solid #ddd;padding:6px">NPS decline, service recovery failures, personalization gaps, wait-time dissatisfaction, complaint-handling consistency</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Revenue &amp; Operations</strong></td><td style="border:1px solid #ddd;padding:6px">RevPAR underperformance, yield management inefficiency, food-cost overruns, labor productivity gaps, demand forecasting errors</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Human Capital</strong></td><td style="border:1px solid #ddd;padding:6px">High turnover, disengagement, supervisor effectiveness, onboarding failure, burnout, training ROI, generational workforce shifts</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Technology Adoption</strong></td><td style="border:1px solid #ddd;padding:6px">Digital check-in resistance, revenue system adoption, OTA over-dependency, AI integration barriers, data security concerns</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Sustainability &amp; CSR</strong></td><td style="border:1px solid #ddd;padding:6px">Energy and water waste, food waste reduction, DEI in leadership pipelines, community impact, greenwashing perceptions</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Market &amp; Brand Strategy</strong></td><td style="border:1px solid #ddd;padding:6px">Loyalty program ROI, brand dilution, segment mismatch, distribution strategy, competitive positioning, post-pandemic demand shifts</td></tr>
</table>
<p style="margin-top:10px;">The most credible problem is one you have personally witnessed or can access. Proximity strengthens the proposal and makes Module 8 more feasible.</p>` },
          { heading:"Mining Industry Intelligence for Your Problem",
            html:`<p>Grounding your problem in real industry data strengthens its credibility. Use these sources before you write Module 1:</p>
<ul>
<li><strong>STR Global (str.com):</strong> The hospitality industry's gold standard for hotel benchmarking data — occupancy, ADR, RevPAR by market, segment, and time period. Trend reports are often accessible free through the UNLV library or STR's student program.</li>
<li><strong>AHLA (ahla.com):</strong> American Hotel &amp; Lodging Association — annual state-of-the-industry reports, workforce studies, and legislative context for the hotel and lodging sector.</li>
<li><strong>National Restaurant Association (restaurant.org):</strong> Annual foodservice industry outlook, workforce studies, technology adoption data, and operating cost benchmarks.</li>
<li><strong>Cornell Center for Hospitality Research (sha.cornell.edu/chr):</strong> Free peer-reviewed applied research reports on hospitality operations, guest behavior, and strategy. Valuable for both Module 1 problem identification and Module 3 literature.</li>
<li><strong>PhocusWright (phocuswire.com):</strong> Travel technology, OTA strategy, distribution channel shifts, and global traveler behavior data — particularly useful for technology-focused problems.</li>
<li><strong>Online review analysis:</strong> Systematic patterns in TripAdvisor, Google Reviews, or Booking.com feedback frequently expose real service gaps that no internal report will openly acknowledge. Reading 50–100 recent reviews for a specific property type can surface a credible, specific problem in 30 minutes.</li>
</ul>
<p>When you use a statistic from any source, cite it: <em>"According to AHLA (2024), hotel industry turnover exceeded 70% annually..."</em> This signals scholarly engagement rather than unsupported assertion — and sets the tone for the entire proposal.</p>` }
        ],
        tips:["Start with a concrete statistic, pattern, or real business event — not an abstract industry trend.","Use third-person professional writing, not first-person storytelling.","Your business context paragraph should name the type of organization, its scale, and why it's relevant.","End your statement with a clear sentence about what decision the research could inform.","At 300–400 words, every sentence must earn its place. Cut anything that doesn't advance the argument."],
        model:{ title:"Model Submission — Module 1 (Abbreviated)",
          html:`<p><strong>Business Context:</strong> Mid-scale extended-stay hotels (150–250 rooms, primarily long-term guests) have grown 18% in the U.S. since 2018, driven by remote workers and traveling healthcare professionals.</p>
<p><strong>Problem Statement:</strong> A regional chain of six extended-stay properties has seen its Net Promoter Score drop from +42 to +29 over 18 months — with no identifiable changes in staffing, pricing, or physical facilities. Management cannot explain the decline and is debating three competing remedies.</p>
<p><strong>Why It Matters:</strong> A 13-point NPS drop at this scale correlates with a 6–9% increase in guest churn. With average stays of 23 nights, losing repeat guests costs significantly more than acquiring new ones.</p>
<p><strong>Decision the Research Could Support:</strong> Whether to direct a $280,000 operations budget toward amenity upgrades, loyalty program redesign, or service training.</p>` }
      },
      checklist:["I described a specific business context (not just 'the hospitality industry')","My problem statement names a clear gap, pattern, or challenge","I explained why the problem matters — consequences or costs are named","I identified who is affected","I connected the problem to a specific business decision","My writing is 300–400 words","I included a revision memo (or noted this is my first submission)"],
      reflection:["What surprised you about narrowing your problem to something specific and manageable?","How did you identify who is most affected — and was that harder or easier than expected?","What feedback code(s) did you receive, if any? What does that tell you about your framing?","How confident are you that your problem is researchable? What would strengthen it?"]
    },
    {
      number:2, title:"Research Focus", lengthTarget:"350–500 words",
      deliverable:"Write a purpose statement, one main research question, 2–3 subquestions or 1–2 hypotheses, unit of analysis, and key constructs.",
      required:["Purpose statement","Main research question","Subquestions or hypotheses","Unit of analysis","Key constructs/variables"],
      lms:"This module you will turn your business problem into a clear research focus. Submit one updated document with highlighted changes and a short revision memo. Your aim is to move from a managerial concern to a study that can realistically be designed and completed.",
      lesson:{
        overview:"Module 2 is the biggest conceptual leap in the course — from business observation to research-ready study. By the end of this module you should have a purpose statement that any researcher could read and immediately understand what you're doing, and why.",
        sections:[
          { heading:"The Purpose Statement",
            html:`<p>A purpose statement tells the reader exactly what the study is trying to do. Use this template:</p>
<div style="background:#fdf3f3;border-left:3px solid #B0202A;padding:12px 16px;border-radius:4px;margin:8px 0;font-style:italic;">"The purpose of this [qualitative / quantitative / mixed-methods] study is to [examine / explore / test / describe] [key construct(s)] among [unit of analysis] in [setting/context]."</div>
<p><strong>Example:</strong> <em>"The purpose of this quantitative study is to examine the relationship between perceived service personalization and guest loyalty intentions among repeat guests at mid-scale extended-stay hotels in the United States."</em></p>
<p>Notice it names the approach, the action, the constructs, the population, and the setting — all in one sentence.</p>` },
          { heading:"Writing the Main Research Question",
            html:`<p>Your main research question (MRQ) mirrors your purpose statement, but as a question. It should be open enough to require a study — and specific enough that you can design one to answer it.</p>
<p>✓ <strong>Good:</strong> "How does perceived service personalization relate to loyalty intentions among repeat guests at mid-scale extended-stay hotels?"</p>
<p>✗ <strong>Too broad:</strong> "Why don't guests feel loyal to hotels?"<br>
✗ <strong>Already answered:</strong> "Does service quality matter to guests?"<br>
✗ <strong>Not researchable:</strong> "What should hotels do to improve?"</p>` },
          { heading:"Subquestions vs. Hypotheses",
            html:`<p><strong>Use subquestions</strong> for qualitative or exploratory studies — they break the MRQ into smaller answerable pieces:</p>
<ul><li>"What service interactions do extended-stay guests describe as most personalized?"</li><li>"How do guests define personalization differently based on length of stay?"</li></ul>
<p><strong>Use hypotheses</strong> for quantitative or confirmatory studies — they make specific, testable predictions:</p>
<ul><li><em>H1: Higher perceived personalization will be positively associated with guest loyalty intentions.</em></li><li><em>H2: Length of stay will moderate the personalization–loyalty relationship.</em></li></ul>
<p><strong>Rule of thumb:</strong> Exploring something new → subquestions. Testing a theory-driven prediction → hypotheses.</p>` },
          { heading:"Unit of Analysis & Key Constructs",
            html:`<p><strong>Unit of analysis</strong> = the entity whose data you'll actually collect. This is not the setting — it's the thing you study:</p>
<ul><li>Individual guests (surveys, interviews)</li><li>Hotels/properties (archival data, case study)</li><li>Service transactions (observations, records)</li></ul>
<p><strong>Key constructs</strong> are the abstract concepts your study is about. For each one, ask: <em>"How would I know it if I saw it?"</em> — that's operationalization.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Construct</th><th style="border:1px solid #ddd;padding:6px;text-align:left">How You Might Measure It</th></tr><tr><td style="border:1px solid #ddd;padding:6px">Service Personalization</td><td style="border:1px solid #ddd;padding:6px">5-item Likert scale from Kwon &amp; Mattila (2015)</td></tr><tr><td style="border:1px solid #ddd;padding:6px">Guest Loyalty Intention</td><td style="border:1px solid #ddd;padding:6px">3-item scale: rebook, recommend, prefer over competitors</td></tr></table>` },
          { heading:"Theoretical Frameworks in Hospitality Research",
            html:`<p>Every well-designed study is anchored in a theoretical framework — the scholarly explanation for <em>why</em> the relationship you are studying should exist. A theory is not just a citation — it is the reasoning that drives your hypotheses and distinguishes research from description. Here are the most commonly used frameworks in MHA-level work:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.82em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:5px;text-align:left">Framework</th><th style="border:1px solid #ddd;padding:5px;text-align:left">Core Argument</th><th style="border:1px solid #ddd;padding:5px;text-align:left">Best Applied To</th></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>SERVQUAL</strong><br><small>Parasuraman et al., 1988</small></td><td style="border:1px solid #ddd;padding:5px">Service quality = gap between expectations and perceptions across 5 dimensions: reliability, assurance, tangibles, empathy, responsiveness</td><td style="border:1px solid #ddd;padding:5px">Guest satisfaction, service failure, quality measurement</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Technology Acceptance Model (TAM)</strong><br><small>Davis, 1989</small></td><td style="border:1px solid #ddd;padding:5px">Perceived usefulness and ease of use jointly predict technology adoption intentions and behavior</td><td style="border:1px solid #ddd;padding:5px">Digital check-in, mobile apps, AI tools, revenue management adoption</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Theory of Planned Behavior (TPB)</strong><br><small>Ajzen, 1991</small></td><td style="border:1px solid #ddd;padding:5px">Behavioral intention is shaped by attitude toward the behavior, subjective norms, and perceived behavioral control</td><td style="border:1px solid #ddd;padding:5px">Booking decisions, sustainable tourism choices, loyalty behavior</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Social Exchange Theory</strong><br><small>Blau, 1964</small></td><td style="border:1px solid #ddd;padding:5px">Relationships are sustained when perceived benefits outweigh costs; reciprocity and trust drive continued commitment</td><td style="border:1px solid #ddd;padding:5px">Employee engagement, customer loyalty, brand-guest relationships</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Conservation of Resources (COR)</strong><br><small>Hobfoll, 1989</small></td><td style="border:1px solid #ddd;padding:5px">People seek to acquire and protect valued resources; resource loss produces stress and disengagement</td><td style="border:1px solid #ddd;padding:5px">Employee burnout, turnover intention, emotional labor</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Expectation-Confirmation Model</strong><br><small>Oliver, 1980</small></td><td style="border:1px solid #ddd;padding:5px">Satisfaction results from comparing actual performance against prior expectations; confirmation drives repeat behavior</td><td style="border:1px solid #ddd;padding:5px">Post-stay satisfaction, repeat booking, service recovery</td></tr>
</table>
<p style="margin-top:10px;">Choose <strong>one framework</strong>. Cite the original source. Explain in 2-3 sentences why it predicts the relationship in your hypotheses. This becomes the theoretical rationale section of your final proposal.</p>` },
          { heading:"Building Your Conceptual Model",
            html:`<p>A conceptual model is a diagram showing the variables in your study and the proposed relationships between them. Drawing it early forces you to test the logic of your study before investing thousands of words in a proposal.</p>
<p><strong>The four core relationship types:</strong></p>
<ul>
<li><strong>Direct effect:</strong> X predicts Y. The simplest model. <em>Example: Service personalization predicts guest loyalty intention.</em></li>
<li><strong>Moderated effect:</strong> The strength or direction of X to Y changes depending on a third variable Z. <em>Example: The personalization-loyalty relationship is stronger for long-stay guests.</em> Drawn as an arrow from Z to the X-Y path.</li>
<li><strong>Mediated effect:</strong> X affects Y indirectly through a mediator M. <em>Example: Personalization leads to Trust, which leads to Loyalty intention.</em></li>
<li><strong>Control variable:</strong> A variable held constant to isolate the main effect — typically demographics or context variables (age, property tier, length of stay).</li>
</ul>
<p><strong>The critical test for each arrow you draw:</strong> Can you explain in one sentence — based on a named theory — WHY this relationship should exist? If not, you have a guess, not a hypothesis. A well-formed hypothesis always has a theoretical rationale.</p>
<div style="background:#fdf3f3;border-left:3px solid #B0202A;padding:10px 14px;border-radius:4px;margin-top:12px;font-style:italic;font-size:13px;">Keep your model simple. Two or three variables with one moderation or mediation is sophisticated enough for this proposal. Complexity without justification signals unclear thinking, not depth.</div>` }
        ],
        tips:["Write your purpose statement first — it's your compass. Everything else aligns to it.","Your MRQ and purpose statement should be nearly identical, one as declaration and one as question.","Keep constructs to 2–4 main ones. This is a proposal, not a dissertation.","If using hypotheses, predict a direction — not just 'there will be a difference.'","Paste your Module 1 problem statement above this section so the reader sees the logical connection."],
        model:{ title:"Model Submission — Module 2 (Abbreviated)",
          html:`<p><strong>Purpose Statement:</strong> The purpose of this quantitative study is to examine the relationship between perceived service personalization and guest loyalty intentions among repeat guests at mid-scale extended-stay hotels in the United States.</p>
<p><strong>Main Research Question:</strong> How does perceived service personalization relate to loyalty intentions among repeat guests at mid-scale extended-stay hotels?</p>
<p><strong>Hypotheses:</strong><br>
H1: Higher perceived service personalization will be positively associated with guest loyalty intentions.<br>
H2: Length of stay will moderate the personalization–loyalty relationship, with longer stays amplifying the effect.</p>
<p><strong>Unit of Analysis:</strong> Individual guests with 3+ stays at the same property within the past 12 months.</p>
<p><strong>Key Constructs:</strong><br>
<em>Perceived Service Personalization:</em> The guest's subjective assessment of how well staff anticipated and accommodated individual preferences.<br>
<em>Guest Loyalty Intention:</em> Self-reported likelihood to rebook, recommend, and prefer this property over comparable alternatives.</p>` }
      },
      checklist:["I have a purpose statement that follows the standard template","My MRQ mirrors the purpose and is answerable","I have 2–3 subquestions OR 1–2 hypotheses","My unit of analysis is named and clearly defined","I listed and defined 2–4 key constructs or variables","My writing is 350–500 words","My revision memo addresses feedback from Module 1"],
      reflection:["How difficult was it to move from a business problem to a researchable question?","Did writing the purpose statement change how you thought about your topic?","Are you using subquestions or hypotheses — and why does that choice fit your study?","Can you imagine the actual data that would answer your research question?"]
    },
    {
      number:3, title:"Literature Base", lengthTarget:"Matrix + 500 words",
      deliverable:"Locate 6–8 scholarly sources, build a literature matrix, and write a synthesis identifying what is known, what is debated, and what gap your study addresses.",
      required:["6–8 scholarly sources","Literature matrix (author, year, purpose, method, findings, relevance)","Short synthesis paragraph or mini-review"],
      lms:"This module you will build the knowledge base for your study. Submit one updated document with highlighted changes and a short revision memo. Your literature review should not just list articles — it should show what is known, what is not known, and why your study is needed.",
      lesson:{
        overview:"Your literature review does one thing: it proves your study is necessary. Not whether your topic is interesting. Whether your specific question hasn't been fully answered yet, and that answering it would matter. This module, you become a scholar.",
        sections:[
          { heading:"Finding Scholarly Sources",
            html:`<p><strong>Databases to use:</strong></p>
<ul>
<li><strong>Google Scholar</strong> (scholar.google.com) — best starting point</li>
<li><strong>EBSCOhost / Business Source Complete</strong> — via UNLV library</li>
<li><strong>ScienceDirect</strong> — strong for service/hospitality/management</li>
</ul>
<p><strong>Target these hospitality journals:</strong></p>
<ul>
<li><em>International Journal of Hospitality Management</em></li>
<li><em>Cornell Hospitality Quarterly</em></li>
<li><em>Journal of Hospitality &amp; Tourism Research</em></li>
<li><em>Tourism Management</em></li>
</ul>
<p><strong>What counts as scholarly:</strong> peer-reviewed, has abstract + methods + references, published in an academic journal. NOT: industry reports, Wikipedia, news articles, or textbook chapters (unless approved).</p>` },
          { heading:"Building the Literature Matrix",
            html:`<p>The matrix organizes all your sources so you can see them at a glance. Use these six columns:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.82em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:5px">Author &amp; Year</th><th style="border:1px solid #ddd;padding:5px">Purpose/RQ</th><th style="border:1px solid #ddd;padding:5px">Method</th><th style="border:1px solid #ddd;padding:5px">Sample</th><th style="border:1px solid #ddd;padding:5px">Key Findings</th><th style="border:1px solid #ddd;padding:5px">Relevance to Your Study</th></tr><tr><td style="border:1px solid #ddd;padding:5px">Kwon &amp; Mattila (2015)</td><td style="border:1px solid #ddd;padding:5px">How personalization affects satisfaction</td><td style="border:1px solid #ddd;padding:5px">Survey</td><td style="border:1px solid #ddd;padding:5px">312 hotel guests</td><td style="border:1px solid #ddd;padding:5px">Personalization → satisfaction; moderated by loyalty status</td><td style="border:1px solid #ddd;padding:5px">Provides validated scale for H1</td></tr></table>` },
          { heading:"Summary vs. Synthesis — The Critical Difference",
            html:`<p>This is the skill most students miss. Here's the contrast:</p>
<p>❌ <strong>Summarizing</strong> (what NOT to do):<br><em>"Smith (2020) studied service quality. Jones (2019) also studied service quality. Lee (2021) found service quality affects satisfaction."</em></p>
<p>✅ <strong>Synthesizing</strong> (what TO do):<br><em>"Research consistently shows service quality predicts guest satisfaction (Jones, 2019; Lee, 2021; Smith, 2020), but these studies share a limitation: they treat service quality as a single construct. Extended-stay guests — who interact with staff far more than transient guests — may weight interpersonal quality differently. No study has examined this in the extended-stay context."</em></p>
<p>Synthesis groups by theme, notes agreements and disagreements, and builds toward a gap your study will fill.</p>` },
          { heading:"Writing the Gap Statement",
            html:`<p>Your synthesis ends with 1–3 sentences explaining what prior research has NOT answered. Common gap types:</p>
<ul>
<li><strong>Population gap:</strong> "No study has examined this in mid-scale extended-stay properties."</li>
<li><strong>Variable gap:</strong> "Research has studied personalization broadly but not how length of stay moderates it."</li>
<li><strong>Context gap:</strong> "Most studies were conducted pre-pandemic; post-2020 expectations may have shifted."</li>
<li><strong>Methodological gap:</strong> "Existing studies rely on self-report scales; none use behavioral loyalty program data."</li>
</ul>` },
          { heading:"How to Read a Journal Article in 20 Minutes",
            html:`<p>You do not read a journal article front-to-back like a novel. Researchers read strategically. Here is the sequence that gets you what you need quickly:</p>
<ol>
<li><strong>Abstract (2 min):</strong> What problem did they study, what method did they use, and what did they find? This alone tells you whether the article belongs in your matrix.</li>
<li><strong>Introduction (3 min):</strong> What gap does the study claim to fill? This tells you how the authors position their contribution — and often contains your gap statement material.</li>
<li><strong>Discussion / Conclusion (5 min):</strong> Read these before Methods and Results. What do the authors say their findings mean? What limitations do they admit? These sections frame how to interpret the data.</li>
<li><strong>Methods (5 min):</strong> What design, who were the participants, how were constructs measured? This determines how seriously to take the findings.</li>
<li><strong>Results tables (3 min):</strong> What were the key numbers? Statistically significant or not? Effect sizes if reported?</li>
<li><strong>References (2 min):</strong> Scan for authors and articles you do not recognize — these are leads for additional sources you may need.</li>
</ol>
<p>Most journal articles follow the <strong>IMRAD structure</strong>: Introduction, Methods, Results, And Discussion. Once you recognize this pattern, navigation becomes automatic.</p>
<p><strong>What to record in your matrix for each article:</strong> purpose, key constructs, method, sample description, 1–2 main findings, and — most critically — what the study explicitly did <em>not</em> examine. That last item is the source of your gap statement.</p>` },
          { heading:"Evaluating Source Quality: Not All Journals Are Equal",
            html:`<p>Publishing an article online does not make it scholarly. Predatory journals mimic the look of legitimate peer-reviewed outlets while accepting almost anything for a fee. Here is how to tell them apart:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Quality Signal</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Credible Source</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Suspicious Source</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Peer review</td><td style="border:1px solid #ddd;padding:6px">Double-blind peer review clearly stated on the journal website</td><td style="border:1px solid #ddd;padding:6px">No review process described; accepted within days of submission</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Publisher</td><td style="border:1px solid #ddd;padding:6px">Elsevier, Wiley, Sage, Taylor &amp; Francis, Emerald, Springer</td><td style="border:1px solid #ddd;padding:6px">Unknown publisher; generic or misleading journal name</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Database indexing</td><td style="border:1px solid #ddd;padding:6px">Indexed in Scopus, Web of Science, EBSCOhost, or PsycINFO</td><td style="border:1px solid #ddd;padding:6px">Not retrievable through any major academic database</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Citation count</td><td style="border:1px solid #ddd;padding:6px">Cited by other peer-reviewed articles (check Google Scholar)</td><td style="border:1px solid #ddd;padding:6px">Zero citations despite being published 3+ years ago</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Article fees</td><td style="border:1px solid #ddd;padding:6px">Open-access fees disclosed transparently; or no fee at all</td><td style="border:1px solid #ddd;padding:6px">Unsolicited invitation to submit; immediate fee request</td></tr>
</table>
<p style="margin-top:10px;">If you are unsure about a journal, search its name on Google followed by the word "predatory." You can also check it against the UNLV library's list of approved databases, or ask a librarian.</p>
<p><strong>On recency vs. foundational works:</strong> Aim for sources from the past 10 years for empirical findings. However, foundational theoretical works — SERVQUAL (Parasuraman et al., 1988), TAM (Davis, 1989), expectation-confirmation (Oliver, 1980) — are always citable regardless of age. They established the theories that more recent studies build on, test, and extend.</p>` }
        ],
        tips:["Quality over quantity — two excellent articles beat eight mediocre ones.","Fill the matrix first. Writing the synthesis becomes much easier when you can see all sources at once.","Use grouped thematic paragraphs, not article-by-article summaries.","Every claim needs a citation. Use APA in-text: (Author, Year).","End with a clear gap statement that connects directly to your research question."],
        model:{ title:"Model Synthesis Paragraph (Abbreviated)",
          html:`<p>Research consistently links service personalization to guest satisfaction and loyalty (Kwon &amp; Mattila, 2015; Pine &amp; Gilmore, 2011; Ryu &amp; Han, 2010). However, these studies share a critical limitation: samples consist predominantly of transient guests with stays of 1–3 nights. Guo et al. (2021) and Rivera (2019) suggest that extended-stay guests develop qualitatively different service expectations over time, yet no study has directly examined how personalization operates in this segment. This study addresses that gap by testing the personalization–loyalty relationship specifically among long-stay guests, and examining whether length of stay moderates that relationship.</p>` }
      },
      checklist:["I have 6–8 scholarly, peer-reviewed sources","My matrix includes all six columns","My synthesis groups studies by theme — not one-by-one summaries","I identify at least one clear gap in the existing literature","My gap statement connects to my specific research question","I have a complete APA reference list","My synthesis section is approximately 500 words","My revision memo addresses prior feedback"],
      reflection:["What was the most surprising finding you encountered in the literature?","Did you find a clear gap, or did it feel like 'everything has been studied'? How did you work through that?","What's the difference between summarizing and synthesizing — and which felt more natural?","How does reading others' work change how you see your own research question?"]
    },
    {
      number:4, title:"Design Choice", lengthTarget:"500–600 words",
      deliverable:"Choose qualitative, quantitative, or mixed methods and justify the fit, feasibility, access, and key limitations of your chosen design.",
      required:["Chosen design","Justification of fit","Feasibility/access note","Likely limitations"],
      lms:"This module you will decide how the study should be conducted. Submit one updated document with highlighted changes and a short revision memo. Focus on fit: the design should match the question, the context, and the realistic constraints of applied hospitality research.",
      lesson:{
        overview:"Research design is your study's blueprint. There is no 'best' design — only the most appropriate one for your question, your context, and the constraints you actually face. This module you choose and, more importantly, justify.",
        sections:[
          { heading:"The Three Main Approaches",
            html:`<p><strong>Qualitative Research</strong> — Explores experiences, meanings, and processes not yet well understood. Data: interviews, observations, documents. Best for: 'What is the experience of X?' or 'How does X work?'</p>
<p><strong>Quantitative Research</strong> — Measures relationships, tests hypotheses, generalizes to populations. Data: surveys, operational records, loyalty data. Best for: 'How does X relate to Y?' or 'Does X cause Y?'</p>
<p><strong>Mixed Methods</strong> — Combines both approaches when one alone can't answer the question. Warning: harder to execute. Only use it if it's truly necessary — don't mix methods just to appear thorough.</p>` },
          { heading:"The Fit Test: 5 Questions",
            html:`<ol>
<li><strong>What is my RQ asking?</strong> "How does X relate to Y?" → quantitative. "What is the experience of X?" → qualitative.</li>
<li><strong>Has this been studied before?</strong> Established topic → quantitative (test the theory). New/understudied → qualitative (explore first).</li>
<li><strong>Can I measure my constructs?</strong> Validated scales exist → quantitative. Constructs are contextual → qualitative.</li>
<li><strong>Who are my participants?</strong> Many willing survey respondents → quantitative. A few willing in-depth interviewees → qualitative.</li>
<li><strong>What do I want to do with findings?</strong> Generalize to a population → quantitative. Understand a specific context deeply → qualitative.</li>
</ol>` },
          { heading:"Feasibility: The Honest Assessment",
            html:`<p>The most common weakness in Module 4 is treating feasibility as an afterthought. A brilliant design you can't execute is worthless. Ask yourself honestly:</p>
<ul>
<li><strong>Access:</strong> Do I have realistic access to participants or data? Would a hotel partner cooperate?</li>
<li><strong>Sample size:</strong> Quantitative = usually 100+ responses. Qualitative = 8–15 interviews can be sufficient.</li>
<li><strong>Data availability:</strong> If using secondary data, is it publicly available or would it require a commercial license?</li>
<li><strong>Ethics:</strong> Does your topic involve sensitive areas requiring IRB approval?</li>
</ul>
<p>Be honest about limitations. A proposal that acknowledges its constraints is stronger than one that pretends they don't exist.</p>` },
          { heading:"Common Design Types in Hospitality Research",
            html:`<table style="width:100%;border-collapse:collapse;font-size:0.85em"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Design</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Type</th><th style="border:1px solid #ddd;padding:6px;text-align:left">When to Use</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Cross-sectional survey</td><td style="border:1px solid #ddd;padding:6px">Quantitative</td><td style="border:1px solid #ddd;padding:6px">Measuring relationships at one point in time</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Semi-structured interviews</td><td style="border:1px solid #ddd;padding:6px">Qualitative</td><td style="border:1px solid #ddd;padding:6px">Exploring meaning and experience in depth</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Case study</td><td style="border:1px solid #ddd;padding:6px">Qualitative</td><td style="border:1px solid #ddd;padding:6px">Deep understanding of one org or situation</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Content analysis</td><td style="border:1px solid #ddd;padding:6px">Qual or Mixed</td><td style="border:1px solid #ddd;padding:6px">Analyzing reviews, documents, social media</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Secondary data analysis</td><td style="border:1px solid #ddd;padding:6px">Quantitative</td><td style="border:1px solid #ddd;padding:6px">Using existing datasets (STR, OTA, loyalty records)</td></tr></table>` },
          { heading:"Qualitative Research Designs: Choosing Your Specific Approach",
            html:`<p>Saying "I will use qualitative research" is insufficient — it is like saying "I will drive a vehicle." Qualitative research encompasses several distinct designs, each suited to a different kind of question. Choose the one that fits your research question:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.82em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:5px;text-align:left">Design</th><th style="border:1px solid #ddd;padding:5px;text-align:left">Core Purpose</th><th style="border:1px solid #ddd;padding:5px;text-align:left">Typical Data</th><th style="border:1px solid #ddd;padding:5px;text-align:left">Hospitality Example</th></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Case Study</strong><br><small>Yin, 2014</small></td><td style="border:1px solid #ddd;padding:5px">Deep understanding of one unit — an org, event, program, or decision</td><td style="border:1px solid #ddd;padding:5px">Interviews, documents, observation (multiple sources)</td><td style="border:1px solid #ddd;padding:5px">How one luxury resort designed and implemented a service-recovery program</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Phenomenology</strong></td><td style="border:1px solid #ddd;padding:5px">The lived, subjective experience of a specific phenomenon</td><td style="border:1px solid #ddd;padding:5px">In-depth interviews (8–12 participants)</td><td style="border:1px solid #ddd;padding:5px">The lived experience of emotional exhaustion among hotel front-desk staff</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Grounded Theory</strong></td><td style="border:1px solid #ddd;padding:5px">Develop a new theory from data where no prior framework fits</td><td style="border:1px solid #ddd;padding:5px">Iterative interviews with constant comparison and theoretical sampling</td><td style="border:1px solid #ddd;padding:5px">How guests form attachment to vacation rental properties — a novel context with no established theory</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Ethnography</strong></td><td style="border:1px solid #ddd;padding:5px">Cultural practices and behavior in natural, real-world settings</td><td style="border:1px solid #ddd;padding:5px">Observation, field notes, informal conversation</td><td style="border:1px solid #ddd;padding:5px">Tipping culture and service dynamics in upscale restaurant settings</td></tr>
<tr><td style="border:1px solid #ddd;padding:5px"><strong>Content Analysis</strong></td><td style="border:1px solid #ddd;padding:5px">Patterns in existing text, images, or media at scale</td><td style="border:1px solid #ddd;padding:5px">Online reviews, social media posts, policy documents, transcripts</td><td style="border:1px solid #ddd;padding:5px">Recurring themes in negative TripAdvisor reviews of limited-service hotels</td></tr>
</table>
<p style="margin-top:10px;">For MHA 635, <strong>semi-structured interviews (phenomenological approach), case study, or content analysis</strong> are the most realistic qualitative choices given typical participant access, time constraints, and Module 8 feasibility requirements.</p>` },
          { heading:"Research Rigor: Validity, Reliability, and Trustworthiness",
            html:`<p>Rigor means your study actually measures what it claims to measure, and produces findings that can be trusted. The standards differ by research paradigm — but ignoring rigor in either is a fatal flaw that reviewers and instructors will identify immediately.</p>
<p><strong>Quantitative Rigor:</strong></p>
<ul>
<li><strong>Internal validity:</strong> Are you measuring the right constructs? Using validated scales from prior research — rather than inventing your own — strengthens this.</li>
<li><strong>External validity / Generalizability:</strong> Can findings apply beyond your specific sample? Random or representative sampling improves this; convenience sampling limits it.</li>
<li><strong>Construct validity:</strong> Do your measures actually capture the theoretical construct as defined? Cite the validation study for any scale you use.</li>
<li><strong>Reliability:</strong> Would repeating the measurement produce similar results? Assessed via Cronbach's alpha for multi-item scales (target α ≥ .70). You will report this in your Module 6 analysis plan.</li>
</ul>
<p><strong>Qualitative Rigor</strong> (Lincoln &amp; Guba, 1985):</p>
<ul>
<li><strong>Credibility:</strong> Are findings authentic representations of participants' experiences? Strengthened by member-checking (sharing findings with participants for verification) and peer debriefing.</li>
<li><strong>Transferability:</strong> Can findings apply in other contexts? Achieved through thick, detailed description of the research setting and participants — not statistical generalization.</li>
<li><strong>Dependability:</strong> Is the research process documented consistently and transparently? Maintained through an audit trail of methodological decisions.</li>
<li><strong>Confirmability:</strong> Are findings shaped by the data, not the researcher's preconceptions? Addressed through a reflexivity statement acknowledging your position and potential biases.</li>
</ul>
<p>Address rigor proactively in your Module 4 submission. A proposal that acknowledges its rigor constraints honestly is more persuasive than one that pretends they do not exist.</p>` }
        ],
        tips:["The key word in your design section is 'because.' Never just name a design — always justify it.","Name a specific design type, not just 'qualitative.' Use: cross-sectional survey, case study, semi-structured interviews, etc.","Address feasibility in its own paragraph. Where exactly would participants or data come from?","Name 2–3 real limitations of your chosen design. This shows intellectual honesty.","Check that your design aligns with your Module 2 research question — a mismatch (D1) is the most common error here."],
        model:{ title:"Model Submission — Module 4 (Abbreviated)",
          html:`<p><strong>Chosen Design:</strong> Cross-sectional quantitative survey study.</p>
<p><strong>Justification:</strong> This study tests a theorized relationship (H1 and H2), which calls for a confirmatory quantitative approach. Validated survey scales exist for both constructs, making a self-report survey efficient and methodologically grounded. A cross-sectional design is appropriate because the personalization–loyalty relationship is expected to be stable across time rather than developmental.</p>
<p><strong>Feasibility:</strong> Survey participants would be recruited via a partnership with a regional extended-stay chain (3–6 properties). Guests with 3+ stays in the past year would receive email invitations through the property management system. A sample of 150–200 complete responses is realistic given typical hospitality survey response rates of 15–25%.</p>
<p><strong>Limitations:</strong> Cross-sectional data cannot establish causality — it shows association, not direction. Self-report measures introduce common method bias. A regional sample limits generalizability to national or international chains.</p>` }
      },
      checklist:["I named a specific design type (not just 'qualitative' or 'quantitative')","I justified the design based on my research question","I addressed feasibility — where participants or data would come from","I named 2–3 genuine limitations of my chosen design","My design is consistent with my Module 2 research question","My writing is 500–600 words","My revision memo addresses prior feedback"],
      reflection:["How did you decide between qualitative and quantitative? What tipped the balance?","Where would you actually get your participants or data — and is that more realistic than you first thought?","What is the most significant limitation of your chosen design?","Did your research question need to shift at all to fit your design?"]
    },
    {
      number:5, title:"Data Plan", lengthTarget:"Data tool + 400–500 words",
      deliverable:"Draft a survey, interview guide, or secondary-data plan. Explain your sample, measures, possible sources of bias, and ethical considerations.",
      required:["Data tool or source plan","Sampling approach","Measures or question areas","Bias and ethics note"],
      lms:"This module you will show exactly how evidence would be collected. Submit one updated document with highlighted changes and a short revision memo. The goal is not to collect data now, but to design a clear, credible, and feasible data plan.",
      lesson:{
        overview:"If design choice is your blueprint, the data plan is your construction drawing. This module you get specific: what you'd ask, who you'd ask, and how you'd protect the integrity of the process. Vagueness is the enemy here.",
        sections:[
          { heading:"Choosing Your Data Collection Tool",
            html:`<p><strong>Survey (quantitative):</strong> Use validated Likert scales (1–5 or 1–7). Keep it to 15–25 items for applied hospitality studies. Include demographics as control variables. Always cite the source of validated scales.</p>
<p><strong>Interview Guide (qualitative):</strong> Write 5–8 open-ended main questions. Start with an opener that builds rapport. Include follow-up probes: <em>"Can you tell me more about that?"</em> Estimate 45–60 min per interview. End with: <em>"Is there anything else you'd like to add?"</em></p>
<p><strong>Secondary Data Plan:</strong> Identify the dataset (STR, TripAdvisor, BLS, loyalty records). Note how it's accessed (public, purchased, partner-provided). List which variables in the dataset map to your constructs.</p>` },
          { heading:"Sampling: Who, How Many, and Why",
            html:`<p><strong>Quantitative:</strong> Define your target population precisely. Not "hotel guests" — but "adults 18+ who stayed at a U.S. mid-scale extended-stay hotel for 7+ consecutive nights within the past 12 months." For regression with 3 predictors, aim for 100–150 complete responses (Green, 1991). Name your sampling method: convenience, purposive, or random.</p>
<p><strong>Qualitative:</strong> Use purposive sampling — select participants based on relevant experience, not random selection. Aim for 8–15 participants for semi-structured interviews. Saturation typically occurs in this range. Identify a specific recruitment strategy: hotel partner, LinkedIn, snowball sampling.</p>` },
          { heading:"Measures and Constructs",
            html:`<p>For each construct, explain three things:</p>
<ol><li><strong>What it is</strong> (conceptual definition)</li><li><strong>How you'd measure it</strong> (operational definition)</li><li><strong>Where the measure comes from</strong> (new or adapted from prior research)</li></ol>
<p><strong>Example:</strong> <em>Perceived Service Personalization</em> measured with a 5-item scale adapted from Kwon &amp; Mattila (2015). Items include: "Staff remembered my preferences from previous stays" and "Service felt tailored to my personal needs." Response scale: 1 (Strongly Disagree) to 5 (Strongly Agree). Original Cronbach's α = .87.</p>
<p>Validated scales from published research are always stronger than questions you invent from scratch.</p>` },
          { heading:"Bias and Ethics: Non-Negotiables",
            html:`<p><strong>Common sources of bias to address:</strong></p>
<ul>
<li><em>Social desirability bias:</em> Respondents answer "correctly" rather than honestly. Mitigate: ensure anonymity, use indirect framing.</li>
<li><em>Recall bias:</em> Guests may not accurately remember older stays. Mitigate: recruit recent guests (within 3–6 months).</li>
<li><em>Common method bias:</em> All variables in one survey inflates correlations. Consider Harman's single-factor test.</li>
</ul>
<p><strong>Ethical considerations to address:</strong> Voluntary participation, anonymity, informed consent process, data storage plan, and whether IRB approval is needed (required for sensitive topics or vulnerable populations).</p>` },
          { heading:"Designing Effective Survey Questions",
            html:`<p>Bad survey questions produce bad data — no statistical technique can rescue a poorly worded instrument. Before using or adapting any survey measure, test every item against these principles:</p>
<p><strong>Common question design errors to avoid:</strong></p>
<ul>
<li><strong>Double-barreled:</strong> "Staff was friendly and efficient." These are two separate constructs. Split into two items: one for friendliness, one for efficiency.</li>
<li><strong>Leading:</strong> "How much did the excellent service improve your stay?" Assumes a conclusion. Use: "How would you rate the service quality during your stay?"</li>
<li><strong>Double negative:</strong> "Staff was not unhelpful." Confusing to respondents. Always write items in positive direction unless the item is intentionally reverse-scored.</li>
<li><strong>Jargon or technical language:</strong> "How satisfied were you with the CRM-integrated service delivery?" Guests do not know what CRM means. Translate into plain, guest-facing language.</li>
<li><strong>Vague time frames:</strong> "How often do you stay at hotels?" Add specificity: "In the past 12 months, approximately how many nights have you stayed at mid-scale hotels?"</li>
</ul>
<p><strong>Likert scale best practices:</strong></p>
<ul>
<li>Use 5-point or 7-point scales. 5-point is more familiar to general respondents; 7-point provides more variance for regression analysis.</li>
<li>Label all anchor points — not just endpoints. "1 = Strongly Disagree, 2 = Disagree, 3 = Neither, 4 = Agree, 5 = Strongly Agree."</li>
<li>Keep scale direction consistent across all items. Mixing "agree/disagree" with "satisfied/dissatisfied" introduces measurement noise.</li>
<li>Include 2–3 reverse-scored items per scale to detect acquiescence bias (respondents who agree with everything regardless of content).</li>
<li>Pilot-test your full instrument with 3–5 people from your target population before finalizing. Ask: "Was any question confusing or unclear?"</li>
</ul>` },
          { heading:"Qualitative Interviewing: From Good Questions to Rich Data",
            html:`<p>A qualitative interview is a guided conversation — not an interrogation, not a survey read aloud. Its depth and richness depend almost entirely on question design and interviewer technique.</p>
<p><strong>Question design principles:</strong></p>
<ul>
<li><strong>Open-ended, not yes/no:</strong> "Tell me about a time when service at a hotel felt personalized to you" rather than "Have you ever experienced personalized service?"</li>
<li><strong>Specific, not abstract:</strong> "What does a personalized check-in experience look and feel like to you?" rather than "What is personalization in your view?"</li>
<li><strong>Non-leading:</strong> "What stood out about your most recent extended stay?" rather than "What impressed you most about the staff?"</li>
<li><strong>Sequenced logically:</strong> Start with rapport-building questions (background, role, general hospitality experience), move to your main topic questions, and always end with: "Is there anything I have not asked about that you think is important for me to understand?"</li>
</ul>
<p><strong>Essential probing techniques:</strong></p>
<ul>
<li><strong>Elaboration probe:</strong> "Can you tell me more about that?"</li>
<li><strong>Clarification probe:</strong> "When you say 'personalized,' what specifically does that mean to you?"</li>
<li><strong>Example probe:</strong> "Can you give me a specific example from your most recent stay?"</li>
<li><strong>Contrast probe:</strong> "How does that compare to your experience at other types of properties?"</li>
<li><strong>Silence:</strong> Resist the urge to fill pauses. A 3–5 second pause often prompts the most revealing responses.</li>
</ul>
<p><strong>Practical logistics:</strong> Always record with explicit verbal consent at the start. Transcribe promptly — memory for nuance degrades within 48 hours. Aim for 45–90 minutes per interview. Eight to twelve interviews with purposively selected participants typically produce thematic saturation for a focused research question.</p>` }
        ],
        tips:["Draft your actual data collection tool — 5–10 survey items or 5–7 interview questions — and include it in your document.","For survey items, write out the complete response scale (1=Strongly Disagree … 5=Strongly Agree) with each question.","'I will use convenience sampling of hotel guests' is not enough. Where, when, and how?","Validated scales are always stronger. Search '[your construct] scale hospitality' in Google Scholar.","Don't just list ethical considerations — explain specifically how each one is addressed in your design."],
        model:{ title:"Model Survey Items (Abbreviated)",
          html:`<p><strong>Section A: Service Personalization (adapted from Kwon &amp; Mattila, 2015)</strong><br>
1. Staff remembered my name and preferences from previous stays. [1–5]<br>
2. Service during my most recent stay felt tailored to my personal needs. [1–5]<br>
3. Staff anticipated what I needed before I had to ask. [1–5]</p>
<p><strong>Section B: Loyalty Intentions (adapted from Zeithaml et al., 1996)</strong><br>
4. I intend to stay at this property again on my next trip. [1–5]<br>
5. I would recommend this property to a friend or colleague. [1–5]<br>
6. I prefer this property over other comparable options. [1–5]</p>
<p><strong>Sampling:</strong> Guests with 3+ stays in the past 12 months, recruited via email from the property management system (estimated N = 800). Target: 150 complete responses.</p>
<p><strong>Ethics:</strong> Participation voluntary, data anonymous, results aggregate only. Informed consent via survey introduction page. Data stored in password-protected Qualtrics account for 3 years.</p>` }
      },
      checklist:["I drafted the actual data collection tool (survey items, interview guide, or data source description)","I defined my target population specifically (not just 'hotel guests')","I named and justified my sampling method","I specified a target sample size with a rationale","I described how each key construct will be measured","I addressed at least two sources of potential bias","I included a basic ethics statement covering consent, anonymity, and data storage","My writing is approximately 400–500 words plus the data tool","My revision memo addresses prior feedback"],
      reflection:["When you drafted your actual survey questions or interview guide, what was harder than you expected?","How did you decide what to measure vs. what to leave out?","What ethical concern feels most significant for your specific study — and how did you address it?","How realistic is your sampling plan? What would you need that you don't currently have?"]
    },
    {
      number:6, title:"Analysis Plan", lengthTarget:"400–500 words",
      deliverable:"Explain how the data would be analyzed, which techniques address which questions, and what the findings would mean for managers.",
      required:["Analysis approach","Link between data and research question","Expected form of findings","Managerial usefulness"],
      lms:"This module you will explain how the study would make sense of the evidence it generates. Submit one updated document with highlighted changes and a short revision memo. Keep the plan simple, logical, and clearly linked to the purpose of the study.",
      lesson:{
        overview:"Data doesn't speak for itself. Analysis is the bridge between raw evidence and meaningful insight. This module you describe exactly how you'd cross that bridge — turning numbers or words into findings that answer your research question and inform a real decision.",
        sections:[
          { heading:"Quantitative Analysis: A Menu",
            html:`<p><strong>Start always with descriptive statistics:</strong> means, standard deviations, frequencies. These establish the baseline profile of your sample before any inferential work.</p>
<p><strong>Testing relationships (2 variables):</strong><br>
Pearson correlation — two continuous variables<br>
Independent t-test — comparing means of two groups<br>
Chi-square — two categorical variables</p>
<p><strong>Testing hypotheses (multiple variables):</strong><br>
Multiple regression — predicting one outcome from several predictors<br>
Moderation analysis — testing whether a third variable changes the X→Y relationship<br>
ANOVA — comparing means across 3+ groups</p>
<p>For an MHA 635 proposal, <strong>regression + moderation analysis</strong> is typically the appropriate depth.</p>` },
          { heading:"Qualitative Analysis: Making Sense of Words",
            html:`<p><strong>Thematic Analysis (Braun &amp; Clarke, 2006):</strong></p>
<ol>
<li>Familiarize yourself with the data (read transcripts multiple times)</li>
<li>Generate initial codes (label meaningful segments)</li>
<li>Search for themes (cluster related codes into patterns)</li>
<li>Review and define themes</li>
<li>Write the analysis using themes as structure, supported by direct quotes</li>
</ol>
<p>For a proposal, describe: what coding process you'd use, who would code the data (mention inter-rater reliability), and how you'd organize and present the themes.</p>` },
          { heading:"Mapping Analysis to Research Questions",
            html:`<p>The most important test for your analysis plan: <strong>for each technique, state which specific question or hypothesis it answers.</strong></p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px">Question / Hypothesis</th><th style="border:1px solid #ddd;padding:6px">Analysis Technique</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px">H1: Personalization → Loyalty</td><td style="border:1px solid #ddd;padding:6px">Pearson correlation + simple regression</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">H2: Length of stay moderates the relationship</td><td style="border:1px solid #ddd;padding:6px">Moderation analysis (interaction term in hierarchical regression)</td></tr></table>
<p>This mapping proves that every technique is there for a reason — not just to look sophisticated.</p>` },
          { heading:"Managerial Implications: The 'So What'",
            html:`<p>Research in hospitality is a tool for better decisions. Conclude your analysis plan with a paragraph answering: <em>If I find what I expect, what would a manager do differently?</em></p>
<p>✅ <strong>Strong:</strong> "If H1 is supported, regional managers should allocate service training resources specifically toward personalization behaviors. If H2 is also supported, this investment should be prioritized at extended-stay properties (7+ night average stay), where the loyalty impact is strongest."</p>
<p>❌ <strong>Weak:</strong> "Hotels should improve their service quality." (Too generic — this adds nothing a manager doesn't already know.)</p>` },
          { heading:"Preparing Your Data Before Analysis",
            html:`<p>Raw data is never analysis-ready. A rigorous analysis plan describes not only which techniques you will run, but how you will prepare the data first. Skipping preparation is one of the most common causes of flawed results in applied hospitality research.</p>
<p><strong>For survey (quantitative) data — work through these steps in sequence:</strong></p>
<ol>
<li><strong>Screen for completion:</strong> Remove responses with more than 10-15% of items unanswered.</li>
<li><strong>Check for straight-lining:</strong> Remove respondents who selected the same answer for every item — this signals disengaged responding.</li>
<li><strong>Handle missing data:</strong> For less than 5% missingness, mean substitution or listwise deletion is acceptable. For larger gaps, report the method used.</li>
<li><strong>Reverse-score items:</strong> Items worded in the opposite direction must be recoded before computing composites (1 becomes 5, 2 becomes 4, 3 stays 3, etc.). Failing to do this inflates error and deflates reliability.</li>
<li><strong>Check internal consistency:</strong> Compute Cronbach's alpha for each multi-item scale before creating composites. Target alpha of .70 or higher.</li>
<li><strong>Compute composite scores:</strong> Average the items in each construct scale to create one score per construct per respondent for use in regression and correlation.</li>
<li><strong>Detect outliers:</strong> Values more than 3 standard deviations from the mean warrant investigation. Decide in advance whether to remove, winsorize, or retain them.</li>
</ol>
<p><strong>For interview (qualitative) data:</strong></p>
<ul>
<li>Transcribe verbatim — including pauses and emphasis where relevant to meaning.</li>
<li>Anonymize all transcripts before coding: replace names with participant codes (P1, P2, P3...).</li>
<li>Read all transcripts in full at least twice before generating any codes. First read is familiarization; coding begins on the second read.</li>
</ul>` },
          { heading:"Beyond p-Values: Effect Size and Practical Significance",
            html:`<p>Statistical significance (p &lt; .05) tells you only that a result is unlikely due to chance. It does NOT tell you whether the result is large enough to matter in practice. With a large enough sample, even trivially small effects reach statistical significance. <strong>Effect size</strong> answers the question a manager actually cares about: how big is this effect in real terms?</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Statistic</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Used With</th><th style="border:1px solid #ddd;padding:6px;text-align:center">Small</th><th style="border:1px solid #ddd;padding:6px;text-align:center">Medium</th><th style="border:1px solid #ddd;padding:6px;text-align:center">Large</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Cohen's d</td><td style="border:1px solid #ddd;padding:6px">Comparing two group means (t-test)</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.2</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.5</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.8</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Pearson r</td><td style="border:1px solid #ddd;padding:6px">Correlation between two continuous variables</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.10</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.30</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.50</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">f-squared</td><td style="border:1px solid #ddd;padding:6px">Regression — variance explained by predictors</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.02</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.15</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.35</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">eta-squared</td><td style="border:1px solid #ddd;padding:6px">ANOVA — proportion of variance across groups</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.01</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.06</td><td style="border:1px solid #ddd;padding:6px;text-align:center">0.14</td></tr>
</table>
<p style="margin-top:10px;"><strong>Why this matters in practice:</strong> A statistically significant but tiny effect (r = .08) might mean: a 1-point improvement in personalization associates with a 0.08-point increase in loyalty on a 5-point scale — imperceptible, and not worth a major retraining investment. Reporting effect size alongside p-values gives a manager the information they need to decide whether to act.</p>
<p>For your Module 6 submission, state which effect size measure you will report alongside each significance test, and what magnitude would constitute a meaningful finding for your business problem.</p>` }
        ],
        tips:["Name specific tests — not just 'I will analyze the data statistically.'","Map every technique to a specific question or hypothesis. Unexplained techniques suggest padding.","Explain what 'support' for a hypothesis looks like: a significant correlation, a p-value < .05, etc.","Your managerial implications paragraph should be specific enough that a real VP could act on it.","If unsure which test to use, describe your data (e.g., 'one continuous and one categorical variable with three levels') — the right test follows logically."],
        model:{ title:"Model Analysis Plan (Abbreviated)",
          html:`<p><strong>Step 1 — Descriptive statistics:</strong> Means, SDs, and frequencies for all scale items and demographics. Establishes the baseline sample profile.</p>
<p><strong>Step 2 — Correlation (H1):</strong> Pearson correlation between the personalization composite and loyalty composite. A significant positive correlation (r > .30, p &lt; .05) provides preliminary support for H1.</p>
<p><strong>Step 3 — Moderation (H2):</strong> Hierarchical regression with loyalty as outcome, personalization as predictor, length of stay as moderator, and their interaction term in the final block. A significant interaction term (β ≠ 0, p &lt; .05) supports H2.</p>
<p><strong>Managerial Usefulness:</strong> If H1 is supported, managers should invest in personalization training for all guest-facing staff. If H2 holds, that investment should be prioritized at extended-stay properties where the loyalty impact is strongest.</p>` }
      },
      checklist:["I named specific analysis techniques (not just 'I will analyze the data')","I mapped each technique to a specific hypothesis or research question","I described what 'support' for each hypothesis would look like","My analysis plan follows logically from my data plan (Module 5)","I wrote a specific managerial implications paragraph","My writing is 400–500 words","My revision memo addresses prior feedback"],
      reflection:["Before this module, did you know which statistical test or qualitative method you'd use? What did you learn?","How does your analysis plan connect back to the business problem from Module 1?","What would it mean if you don't find the results you expected — would that still be useful?","How specific are your managerial implications? Could a real operations VP act on them?"]
    },
    {
      number:7, title:"Final Integrated Proposal", lengthTarget:"2,000–2,500 words",
      deliverable:"Submit one polished, integrated proposal with all seven sections revised and aligned into a single coherent study.",
      required:["Title","Introduction/background","Problem statement","Purpose","Research question(s)/hypotheses","Literature review","Research design","Sample/data plan","Analysis plan","Ethics/limitations","Managerial implications","References"],
      lms:"This module you will submit your final integrated proposal. Revise earlier sections so the entire project reads as one coherent study. Important: Module 7 is not the final deliverable — Module 8 asks you to execute a small version of your study and write an executive report for a real decision-maker. A clear, well-aligned proposal here makes Module 8 significantly easier.",
      lesson:{
        overview:"Module 7 is about integration, not addition. You are not writing a new document. You are transforming seven progressive drafts into one coherent, professional research proposal. Every section should belong to the same study.",
        sections:[
          { heading:"What 'Integrated' Actually Means",
            html:`<p>An integrated proposal is not seven sections glued together. It is one document where each section earns its place by building on the last:</p>
<ul>
<li>The <strong>problem</strong> (W1) sets up the <strong>purpose</strong> (W2)</li>
<li>The <strong>purpose</strong> motivates the <strong>literature review</strong> (W3)</li>
<li>The <strong>literature review</strong> justifies the <strong>design</strong> (W4)</li>
<li>The <strong>design</strong> determines the <strong>data plan</strong> (W5)</li>
<li>The <strong>data plan</strong> enables the <strong>analysis plan</strong> (W6)</li>
<li>Everything points toward <strong>managerial implications</strong> that solve the original problem</li>
</ul>
<p>Test: if you removed any one section, would the reader notice a logical gap? They should.</p>` },
          { heading:"The Revision Mindset",
            html:`<p>Your Modules 1–6 drafts were checkpoints, not finished writing. Module 7 is the first time your proposal is read as a whole. This means:</p>
<p><strong>Revise for coherence:</strong> Read out loud from beginning to end. Does it tell one logical story? Are constructs named consistently throughout?</p>
<p><strong>Revise for alignment:</strong> Does your W2 research question still match the constructs in W5 and the tests in W6? If anything shifted across modules, reconcile it now.</p>
<p><strong>Revise for professionalism:</strong> Remove all "Module X:" labels and revision memos. Add an introduction written for a reader who has never seen your project. Use section headings that match the required elements list. Apply APA 7th edition throughout.</p>` },
          { heading:"Section-by-Section Guidance",
            html:`<p><strong>Title:</strong> Name key constructs + population + context. <em>"Perceived Service Personalization and Guest Loyalty Among Repeat Guests at Mid-Scale Extended-Stay Hotels"</em></p>
<p><strong>Introduction (200–300 words):</strong> Set the scene for a new reader. Why does this sector matter? What's at stake? End with your problem.</p>
<p><strong>Problem → Purpose → RQ:</strong> Refined from W1–W2. Your purpose statement should be your clearest, most polished sentence in the document.</p>
<p><strong>Literature Review (400–500 words):</strong> A mini-essay with an argument — not a list. Synthesizes patterns, notes gaps, ends with your gap statement.</p>
<p><strong>Design + Data Plan (400–500 words combined):</strong> Named design type, justification, sampling strategy, actual data collection tool.</p>
<p><strong>Analysis + Ethics/Limitations (250–300 words):</strong> Mapped techniques with managerial implications. Ethical considerations and study limitations.</p>
<p><strong>References:</strong> All cited sources in APA 7th. Minimum 6–8 peer-reviewed journal articles.</p>` },
          { heading:"APA 7th Edition Quick Reference",
            html:`<p><strong>In-text citation:</strong> (Author, Year) for paraphrase. (Author, Year, p. XX) for direct quote. Three or more authors: (Smith et al., 2020).</p>
<p><strong>Journal article:</strong><br>
Author, A. A., &amp; Author, B. B. (Year). Title of article. <em>Journal Name, Volume</em>(Issue), page–page. https://doi.org/xxx</p>
<p><strong>Example:</strong><br>
Kwon, J. H., &amp; Mattila, A. S. (2015). The effect of inter-customer interaction on customer loyalty via perceived coolness. <em>Cornell Hospitality Quarterly, 56</em>(2), 184–193.</p>
<p><strong>No author:</strong> Use the first few words of the title in italics in place of the author.</p>` },
          { heading:"Writing the Abstract: Last Written, First Read",
            html:`<p>The abstract is the most-read part of any research document. Instructors read it. Committee members read it. Managers read it — and then decide whether to read anything else. Write it last, but write it excellently.</p>
<p><strong>A strong 200–250 word abstract covers five elements in sequence:</strong></p>
<ol>
<li><strong>Background (1–2 sentences):</strong> Why does this topic matter? What is the business context and the specific problem?</li>
<li><strong>Purpose (1 sentence):</strong> What does this study do? This is your purpose statement, condensed.</li>
<li><strong>Method (2–3 sentences):</strong> What approach? Who are the participants? How is data collected and analyzed?</li>
<li><strong>Expected findings / Propositions (2–3 sentences):</strong> What do you predict finding, and why? (For a proposal, this replaces actual findings.)</li>
<li><strong>Implications (1–2 sentences):</strong> What would the findings mean for managers or for the research field?</li>
</ol>
<p><strong>Model abstract (abbreviated):</strong></p>
<div style="background:#fafafa;border:1px solid #e0e0e0;border-radius:6px;padding:14px 16px;font-style:italic;font-size:13px;line-height:1.8;margin-top:8px;">Extended-stay hotel chains represent a fast-growing segment facing rising guest churn despite stable product offerings and pricing. This study proposes to examine the relationship between perceived service personalization and guest loyalty intentions, with length of stay as a moderating variable, among repeat guests at mid-scale extended-stay properties. Using a cross-sectional survey of 150 guests across six properties, two hypotheses derived from expectation-confirmation theory will be tested via hierarchical regression. Results are expected to show a positive personalization–loyalty relationship that strengthens for longer-stay guests. If supported, findings would direct service training resources toward personalization behaviors specifically at extended-stay properties — offering a cost-efficient loyalty lever for regional operators without capital investment.</div>
<p style="margin-top:10px;"><strong>Three rules:</strong> No citations in the abstract. No raw data. No limitations section. Save all of these for the body.</p>` },
          { heading:"The Internal Consistency Test: Does Your Proposal Hold Together?",
            html:`<p>Before submitting Module 7, run this seven-point diagnostic. Each line should pass cleanly. If it does not, revise before you submit:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Test</th><th style="border:1px solid #ddd;padding:6px;text-align:left">What to Check</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Problem → Purpose</strong></td><td style="border:1px solid #ddd;padding:6px">Does your purpose statement directly address the problem you named in Module 1? They should mirror each other — the problem is the fire, the purpose is the hose.</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Purpose → Research Question</strong></td><td style="border:1px solid #ddd;padding:6px">Is your main research question the question-form of your purpose statement? If your purpose evolved across modules, your RQ must reflect that evolution.</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>RQ → Literature Gap</strong></td><td style="border:1px solid #ddd;padding:6px">Does your gap statement say explicitly that your RQ has not been answered? The literature review exists to justify the study — not merely to demonstrate reading.</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>RQ → Design</strong></td><td style="border:1px solid #ddd;padding:6px">Does your design type (qualitative / quantitative) match the nature of your research question? An exploratory question with a confirmatory quantitative design signals a misalignment.</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Construct consistency</strong></td><td style="border:1px solid #ddd;padding:6px">Are your key constructs named identically in Modules 2, 3, 5, and 6? Inconsistent naming is one of the most common signs of a patchwork rather than an integrated proposal.</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Analysis → Questions</strong></td><td style="border:1px solid #ddd;padding:6px">Is every analysis technique mapped to a specific hypothesis or subquestion? Any technique that floats unmapped signals padding or confusion.</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Implications → Problem</strong></td><td style="border:1px solid #ddd;padding:6px">Do your managerial implications speak directly to the business decision named in Module 1? The proposal should end where it began — with a real manager facing a real choice.</td></tr>
</table>
<p style="margin-top:10px;">A proposal that passes all seven tests demonstrates internal validity — the standard by which Module 7 is scored.</p>` }
        ],
        tips:["Read your entire proposal out loud before submitting — you will catch alignment problems that silent reading misses.","Delete all revision memos and 'Module X:' labels before submitting the final document.","Your introduction should be written for a reader who has never seen your project before.","A strong conclusion restates why this specific research design is the right approach to the stated problem.","Check that every source cited in the text appears in the reference list, and vice versa.","Module 7 is not the finish line — Module 8 takes your proposal into practice. A well-designed proposal here is your roadmap for the mini-study and executive report ahead."],
        model:{ title:"Final Proposal Structure Checklist",
          html:`<ul>
<li>✓ Title reflects key constructs + population + context</li>
<li>✓ Introduction orients a new reader (no prior knowledge assumed)</li>
<li>✓ Problem statement is specific, consequential, and decision-linked</li>
<li>✓ Purpose statement matches research questions</li>
<li>✓ Literature review synthesizes (not summarizes) 6–8 scholarly sources with a gap statement</li>
<li>✓ Research design is named, justified, and honest about limitations</li>
<li>✓ Data plan includes actual survey/interview items or secondary data description</li>
<li>✓ Analysis plan maps specific techniques to specific hypotheses/questions</li>
<li>✓ Ethics and limitations are addressed</li>
<li>✓ Managerial implications are specific and actionable</li>
<li>✓ References formatted in APA 7th edition</li>
<li>✓ Total length: 2,000–2,500 words (excluding references and appendices)</li>
<li>✓ All Module labels and revision memos removed</li>
</ul>` }
      },
      checklist:["I removed all 'Module X:' labels and replaced with professional section headings","I removed all revision memos from the final document","The introduction is written for a new reader with no prior context","The purpose statement is consistent with the data plan and analysis plan","The literature review reads as a synthesized mini-essay, not a list","The design section names a specific type with justification","The data plan includes actual data collection items","The analysis plan maps specific techniques to specific questions","Ethics and limitations are addressed","Managerial implications are specific and actionable","All sources are in APA 7th edition","Total length is 2,000–2,500 words","I read the entire proposal out loud for coherence"],
      reflection:["Comparing your final proposal to your Module 1 draft — what changed most, and why?","What was the most valuable piece of feedback you received across all seven modules?","If you were going to actually conduct this study, what would your first real-world step be?","What did this project teach you about how you approach complex problems — inside and outside of hospitality?"]
    },
    {
      number:8, title:"Mini-Study & Executive Report", lengthTarget:"1,000\u20131,500 words",
      deliverable:"Conduct a brief, IRB-exempt data collection effort aligned with your research proposal. Analyze what you find and write a 1,000\u20131,500-word executive report with actionable recommendations for a named decision-maker.",
      required:["IRB-exempt data source or collection method","Mini-analysis (2\u20133 key findings)","Executive report (all six sections)","Specific recommendations for a named decision-maker"],
      lms:"This module you move from proposal to practice. Conduct a small IRB-exempt study \u2014 public data, a brief survey of 3\u20135 willing professional contacts, or structured observation \u2014 aligned with your Module 7 research question. Analyze what you find and write an executive report suitable for a real manager. Submit the report with a short reflection memo.",
      lesson:{
        overview:"A research proposal is a plan. This module you execute a scaled-down version of it. You are not writing a journal article \u2014 you are generating real evidence and turning it into a business recommendation. The standard is not perfection; it is honesty, clarity, and usefulness to a real decision-maker.",
        sections:[
          { heading:"What Makes a Study IRB-Exempt?",
            html:`<p>Institutional Review Boards (IRBs) protect research participants from harm. Many small studies fall under federal exemption categories and do not require formal IRB approval. The three safest approaches for this course are:</p>
<ul>
<li><strong>Secondary / public data:</strong> Analyzing existing publicly available data \u2014 online reviews, government datasets (BLS, STR, U.S. Census), published industry reports, or company disclosures. No human subjects involved.</li>
<li><strong>Brief professional survey:</strong> Collecting responses from 3\u20135 adult colleagues or professional contacts who voluntarily agree, where no sensitive information is collected and results are reported in aggregate only.</li>
<li><strong>Structured observation:</strong> Systematically observing a public hospitality setting (lobby, restaurant, check-in area) using a structured guide developed from your Module 5 data plan.</li>
</ul>
<p><strong>What to avoid:</strong> Do not study minors, patients, or employees under your direct supervision. Do not collect sensitive personal, financial, or health data. When in doubt, use secondary/public data \u2014 it is the safest and often the richest option.</p>` },
          { heading:"Three Approaches \u2014 Pick One",
            html:`<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Approach</th><th style="border:1px solid #ddd;padding:6px;text-align:left">What You Do</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Best For</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>A \u2014 Public / Secondary Data</strong></td><td style="border:1px solid #ddd;padding:6px">Download or access a public dataset; analyze in Excel or Google Sheets</td><td style="border:1px solid #ddd;padding:6px">Quantitative proposals; wide range of hospitality topics</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>B \u2014 Brief Professional Survey</strong></td><td style="border:1px solid #ddd;padding:6px">Send 8\u201312 survey items from your Module 5 tool to 3\u20135 willing professional contacts; tabulate responses</td><td style="border:1px solid #ddd;padding:6px">Quantitative or mixed proposals; perception or attitude data</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>C \u2014 Structured Observation</strong></td><td style="border:1px solid #ddd;padding:6px">Visit a public hospitality setting 2\u20133 times; record observations using a structured guide</td><td style="border:1px solid #ddd;padding:6px">Qualitative proposals; service process or environment studies</td></tr>
</table>
<p style="margin-top:10px;"><strong>Match your approach to your Module 4\u20135 design.</strong> If you designed a survey study, use Approach B. If you designed a secondary-data study, use Approach A. Consistency between your proposal and your execution is itself a learning outcome.</p>` },
          { heading:"Analyzing Your Mini-Data",
            html:`<p>Your analysis does not need statistical software. The goal is to identify 2\u20133 honest findings that speak to your research question.</p>
<p><strong>For quantitative data (surveys or secondary data):</strong></p>
<ul>
<li>Calculate averages and frequencies for key variables</li>
<li>Note the highest and lowest scores and any surprising patterns</li>
<li>Ask: does this support or challenge what the literature suggested in Module 3?</li>
</ul>
<p><strong>For qualitative data (observation notes or open-ended responses):</strong></p>
<ul>
<li>Read all notes and highlight recurring words, events, or patterns</li>
<li>Group highlights into 2\u20133 themes</li>
<li>Find one direct quote or specific example to illustrate each theme</li>
</ul>
<p><strong>The key question:</strong> <em>What do these findings say about the business problem you identified in Module 1?</em> That answer is your executive report.</p>` },
          { heading:"The Executive Report Format",
            html:`<p>An executive report is not an academic paper. Its audience is a manager who needs to make a decision. Keep it tight, clear, and action-oriented.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">Section</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Contents</th><th style="border:1px solid #ddd;padding:6px;width:100px;">Length</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Executive Summary</strong></td><td style="border:1px solid #ddd;padding:6px">What you did, what you found, what you recommend \u2014 in plain language</td><td style="border:1px solid #ddd;padding:6px">75\u2013100 words</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Background &amp; Problem</strong></td><td style="border:1px solid #ddd;padding:6px">The business problem; why it needed investigation; the decision at stake</td><td style="border:1px solid #ddd;padding:6px">150\u2013200 words</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Method</strong></td><td style="border:1px solid #ddd;padding:6px">What you did, who or what you studied, and how \u2014 briefly</td><td style="border:1px solid #ddd;padding:6px">100\u2013150 words</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Findings</strong></td><td style="border:1px solid #ddd;padding:6px">2\u20133 specific findings, each named and briefly supported by evidence</td><td style="border:1px solid #ddd;padding:6px">300\u2013400 words</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Recommendations</strong></td><td style="border:1px solid #ddd;padding:6px">2\u20133 specific, feasible actions addressed to a named decision-maker</td><td style="border:1px solid #ddd;padding:6px">200\u2013300 words</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px"><strong>Limitations</strong></td><td style="border:1px solid #ddd;padding:6px">Honest acknowledgment of what the small scale means for confidence</td><td style="border:1px solid #ddd;padding:6px">75\u2013100 words</td></tr>
</table>` },
          { heading:"Visualizing and Presenting Your Mini-Data",
            html:`<p>A well-presented table or chart makes a modest finding persuasive. A cluttered or unnecessary one undermines credibility. Use this decision guide for Module 8:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin-top:8px"><tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:6px;text-align:left">If Your Data Is...</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Best Visual</th><th style="border:1px solid #ddd;padding:6px;text-align:left">Example</th></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Survey item means</td><td style="border:1px solid #ddd;padding:6px">Simple table with item, mean, and range</td><td style="border:1px solid #ddd;padding:6px">5 personalization items ranked by mean score (scale 1-5)</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Frequency counts</td><td style="border:1px solid #ddd;padding:6px">Bar chart or frequency table</td><td style="border:1px solid #ddd;padding:6px">"4 of 5 respondents rated name recognition as most important"</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Themes from qualitative data</td><td style="border:1px solid #ddd;padding:6px">Theme summary table with one direct quote per theme</td><td style="border:1px solid #ddd;padding:6px">Three themes, each illustrated by a participant excerpt</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Ratings or metrics over time</td><td style="border:1px solid #ddd;padding:6px">Line chart</td><td style="border:1px solid #ddd;padding:6px">Average TripAdvisor score by quarter over 8 quarters</td></tr>
<tr><td style="border:1px solid #ddd;padding:6px">Comparison across two groups</td><td style="border:1px solid #ddd;padding:6px">Grouped bar chart or side-by-side table</td><td style="border:1px solid #ddd;padding:6px">Response patterns for short-stay vs. long-stay guests</td></tr>
</table>
<p style="margin-top:10px;"><strong>The one-sentence rule:</strong> Every visual must have a title and a one-sentence interpretation beneath it that tells the reader exactly what to see — do not make them guess. Example: "Figure 1 shows that staff name recognition received the highest importance rating (M = 4.6 out of 5.0) among all personalization behaviors studied."</p>
<p><strong>Build charts in Excel or Google Sheets</strong> and paste into your Word document. Use clean, minimal formatting — no 3D effects, no gradient fills, no unnecessary gridlines. Include only 1-2 visuals that directly support your findings. More than that dilutes the impact of each one.</p>
<p><strong>For qualitative findings,</strong> a well-formatted theme table is more persuasive than a paragraph list. Structure it as: Theme Name | Brief Description | Illustrative Quote. This format is immediately legible to a busy executive reader.</p>` }
        ],
        tips:["Your mini-study doesn't need to be statistically significant \u2014 it needs to be honest and clearly described.","Use the same construct definitions and measures you designed in Modules 4 and 5 \u2014 consistency between proposal and execution is a strength.","Name your decision-maker specifically: not 'hotel managers' but 'the VP of Operations at a mid-scale extended-stay chain.'","Recommendations should pass the Monday-morning test: could a manager act on this by Monday? If not, make it more specific.","Acknowledge limitations briefly and honestly \u2014 a small study with candid caveats is more credible than one that overclaims.","Write in plain business English. No jargon, no passive voice, no hedging beyond what is genuinely warranted."],
        model:{ title:"Model Executive Summary & Finding (Abbreviated)",
          html:`<p><strong>Executive Summary:</strong> This study examined how extended-stay hotel guests perceive service personalization, using a brief survey of four hospitality professionals and analysis of 120 TripAdvisor reviews. Findings suggest that staff recognition of repeat guests is the highest-valued personalization behavior, while proactive preference anticipation is rare and strongly differentiates top-rated properties. We recommend that regional managers implement a structured guest-recognition protocol at check-in as a low-cost, high-impact first step.</p>
<p><strong>Finding 1 \u2014 Recognition Drives Loyalty Ratings:</strong> Three of four survey respondents rated \u201cstaff remembered my name\u201d as the single most loyalty-driving service behavior (mean importance: 4.6/5.0). Review analysis confirmed this: of 34 reviews explicitly mentioning staff behavior, 71% that mentioned name recognition awarded a 5-star rating.</p>
<p><strong>Recommendation 1 \u2014 Guest-Recognition Protocol:</strong> Implement a daily pre-shift briefing where the front desk team reviews arriving repeat guests\u2019 names, preferences, and stay history. Estimated time: 10 minutes per shift. Begin with the two highest-volume properties in Q3 and measure NPS before and after a 90-day pilot.</p>` }
      },
      checklist:["I selected an IRB-exempt approach (public data, brief professional survey, or structured observation)","I described my data source and collection method clearly in the Method section","I collected or accessed data aligned with my Module 2 research question","I identified 2\u20133 specific findings with supporting evidence","My executive report includes all six required sections","Each recommendation is specific and addressed to a named decision-maker","My findings connect back to the business problem from Module 1","My writing is 1,000\u20131,500 words in executive (not academic) format","I acknowledged the limitations of my small-scale study honestly","I included a revision memo explaining how this module connects to my overall proposal"],
      reflection:["What was the most surprising finding from your mini-study \u2014 and why did it surprise you?","How did actually collecting or analyzing data change your perspective on what you proposed in Modules 1\u20137?","How confident are you in your recommendations \u2014 and what would strengthen that confidence?","What would a full-scale version of this study require that you didn't have access to?","Looking back across all eight modules: what is the one thing you would do differently starting from Module 1?"]
    }
  ]
};
