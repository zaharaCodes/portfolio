export const info = {
  name: "Fathima Zahara",
  role: "Full Stack Developer",
  tagline: "I build things that live on the internet",
  email: "fathima@gmail.com",
  github: "https://github.com/zaharaCodes",
  linkedin: "https://linkedin.com/in/fathima",
  location: "India",

  about: `I'm a passionate Full Stack Developer who loves turning 
  ideas into real, scalable web applications. I specialize in building 
  end-to-end solutions from beautiful frontends to robust backends. 
  I love clean code, good design, and solving complex problems.`,

  projects: [
    {
      id: 1,
      title: "Automate AI — AI SaaS Platform",
      story: "I wanted to build something that actually uses AI to solve real problems. Started with just a simple chat tool, then I kept thinking — why stop there? Added a summarizer, content generator, email writer, and image generation one by one. The hardest part was integrating LLaMA models via Groq API and making responses feel real-time and fast. Built the entire auth system from scratch with JWT, added usage limits so users don't abuse it, and created a dashboard to track activity. Voice input was a fun add-on. Deployed the whole thing on Render. Super proud of this one!",
      description: "Full-stack AI SaaS platform with multiple tools — chat, summarizer, content generator, email writer & image generation. Powered by LLaMA via Groq API with JWT auth and usage tracking.",
      tags: ["React.js", "Node.js", "MongoDB", "Groq API", "LLaMA", "JWT"],
      category: "fullstack",
      video: "https://res.cloudinary.com/dech7uxhb/video/upload/v1775052203/Automate_AI_msdnax.mp4",
      github: "https://github.com/zaharaCodes",
      live: "https://automate-ai-1-lgps.onrender.com/",
      color: "#6366f1",
      featured: true,
      deployment: {
        frontend: null,
        backend: "Render",
      },
      highlights: [
        "LLaMA models via Groq for real-time AI",
        "JWT authentication & usage limits",
        "Dashboard with activity tracking",
        "Voice input & keyboard shortcuts",
      ],
    },
    {
      id: 2,
      title: "Community Hub — Resource Platform",
      story: "I saw a real problem — people in need couldn't easily find local resources like food banks, shelters, healthcare, or legal aid. Everything was scattered. So I built Community Hub to fix that. Built the entire REST API backend with Node.js and Express, added JWT auth with role-based access so admins can manage resources. Added search with filtering so people can find exactly what they need fast. Set up email notifications to keep users updated. The deployment was split — backend lives on Railway, frontend on Vercel. Seeing this actually help real people means everything to me.",
      description: "Platform connecting people with free local resources — food banks, shelters, healthcare & legal aid. Features role-based access, search filtering, and email notifications.",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API", "Vercel", "Railway"],
      category: "fullstack",
      video: "https://res.cloudinary.com/dech7uxhb/video/upload/v1775052388/Community_Hub_wndp2w.mp4",
      github: "https://github.com/zaharaCodes",
      live: "https://community-hub-liart-three.vercel.app/",
      color: "#10b981",
      featured: true,
      deployment: {
        frontend: "Vercel",
        backend: "Railway",
      },
      highlights: [
        "Connects people with free local resources",
        "Role-based access & JWT auth",
        "Search with advanced filtering",
        "Email notifications system",
      ],
    },
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TailwindCSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 78 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 70 },
    ],
    database: [
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 72 },
      { name: "Firebase", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Linux", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
};