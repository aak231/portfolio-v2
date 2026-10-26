export const HERO = {
  intro:
    "I’m a product manager who builds the systems behind marketplaces: how supply is captured, qualified, priced and bought. Most recently, I helped launch a seller marketplace across Bayut and dubizzle that reached 8K+ owner leads in its first four months.",
  note: "Bayut and dubizzle are two of the UAE’s largest property and classifieds platforms.",
};

export const IMPACT = [
  {
    metric: "8K+",
    label: "Seller Leads in 4 Months",
    text: "A new source of supply for agencies, validated with one small experiment before anything was built.",
    role: "My role: roadmap, analytics and marketplace growth",
    to: "/systems-in-practice/seller-leads",
    srLabel: "Designing the Seller Leads Marketplace",
  },
  {
    metric: "2,000+",
    label: "Recruiting Agencies",
    text: "Applicants ranked by how well their CV fits the job, with the reasons shown next to each score.",
    role: "My role: product owner for dubizzle Jobs",
    to: "/systems-in-practice/ranking-candidates",
    srLabel: "Ranking Candidates by Meaning",
  },
  {
    metric: "Live",
    label: "Value-Based Pricing",
    text: "Moved the marketplace off flat prices after replaying the new model on months of past leads.",
    role: "My role: shaped the model with BI, ran the pre-launch replay, planned the rollout",
    to: "/systems-in-practice/seller-leads-pricing",
    srLabel: "Pricing the Seller Leads Marketplace",
  },
];

export const ALSO = [
  { metric: "550K+", label: "TruEstimate reports generated" },
  { metric: "600+", label: "off-plan leads unlocked in 72 hours" },
];

export const FEATURED = {
  eyebrow: "Featured System",
  title: "Designing the Seller Leads Marketplace",
  subtitle: "How owner intent becomes supply that agencies can buy.",
  steps: [
    {
      title: "Intent Capture",
      caption: "Owners tell us they want to sell or rent.",
    },
    {
      title: "Qualification",
      caption: "Checks and verification remove noise.",
    },
    {
      title: "Marketplace",
      caption: "Agencies browse leads with contact details hidden.",
    },
    {
      title: "Unlock",
      caption: "Agencies spend credits to reveal the owner.",
    },
    {
      title: "Inventory Growth",
      caption: "Unlocked leads help agencies win listings.",
    },
  ],
  cards: [
    {
      title: "Capture Layer",
      desc: "Entry points sit where owners are already thinking about selling, such as after a TruEstimate valuation or mid-search.",
    },
    {
      title: "Qualification System",
      desc: "People and automation work together, so noise is filtered early without slowing capture down.",
    },
    {
      title: "Marketplace Engine",
      desc: "Agencies unlock leads with credits, and timed access decides who sees each lead first.",
    },
    {
      title: "Monetization Logic",
      desc: "Flat prices first to learn what agencies would pay, then prices that follow each lead’s value.",
    },
  ],
  cta: "Read the Seller Leads Case Study",
};

export const PRINCIPLES = {
  title: "Operating Principles",
  subtitle: "The systems mindset I apply to product strategy, execution, and iteration.",
  cards: [
    {
      title: "Instrument Before Opinion",
      text: "Decide what success looks like before shipping, then get the data in place before the debate starts.",
      seen: { label: "Seller Leads", to: "/systems-in-practice/seller-leads" },
    },
    {
      title: "Optimize Systems, Not Screens",
      text: "The biggest gains come from how the parts connect: supply, access, pricing and feedback.",
      seen: { label: "Pricing", to: "/systems-in-practice/seller-leads-pricing" },
    },
    {
      title: "Evidence Driven Iteration",
      text: "Test against real behavior first, then change one thing at a time.",
      seen: { label: "Pricing", to: "/systems-in-practice/seller-leads-pricing" },
    },
  ],
};

export const LOOP = {
  title: "A Loop in Practice",
  subtitle: "How one question became a product.",
  steps: [
    {
      title: "Behavior",
      caption:
        "Owners messaged agents every day, but every message looked the same in our data.",
    },
    {
      title: "Tracking",
      caption:
        "We added one question to each WhatsApp lead: why are you getting in touch?",
    },
    {
      title: "Insight",
      caption: "Most people chose sell or lease.",
      tag: "The Signal",
    },
    { title: "Decision", caption: "We built Seller Leads." },
    {
      title: "Optimization",
      caption: "Entry points, qualification and pricing tuned on live data.",
    },
  ],
  cta: "Read the Full Story",
};

export const ABOUT = {
  title: "About",
  paragraphs: [
    "I’m a product manager at dubizzle Group, working across Bayut and dubizzle on marketplace products, monetization and analytics.",
    "I’m hands-on with data and code. I write SQL every day, and I build with React, Next.js, Django and AWS when a prototype says more than a spec. I’ve also built AI agents and LLM-powered workflows, with an eye on cost, reliability and how they fit into real work.",
    "Based in Dubai.",
  ],
};

export const CONTACT_COPY = {
  heading: "Let’s Build Systems That Compound",
  subline:
    "If you’re building thoughtful, high impact products and care about systems that scale, I’m always open to meaningful conversations.",
};
