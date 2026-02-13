// Centralized content and placeholder config for the portfolio

export const siteConfig = {
  name: 'Ashish',
  title: 'a.k.a. Ashish Kumar ',
  about: {
    headline: 'I Build, Speak & Write About Real AI Systems',
    socials: {
      github: 'https://github.com/mrashrike',
      
      
      email: '<a href=mrashrike@gmail.com>Email</a>',
      
    },
    resumeUrl: 'https://raw.githubusercontent.com/mrashrike/resume/master/Ashish_resume.pdf',
  },
  experience: [
    
    {
      company: '',
      title: '',
      link: '',
      period: 'May 2022 - Present',
      logo: '/zluri.svg',
      highlights: [
        'Developed and maintained AI Agent web apps with AI web architecture & CI/CD',
        'Developed production-ready ML + GenAI/LLM systems that teams actually use — the kind that ship fast, stay reliable, and move business metrics.',
        'Developed the full AI lifecycle: discovery, architecture, governance, production.'
      ],
      skills: ['Python', 'MySQL', 'AWS', 'Vertex AI Pipelines', 'PowerBI'],
    },
     
   
    
  ],
  projects: [
    {
      name: 'Multi Agent Generator Pro',
      description: 'Low-code/no-code python library that transforms plain English instructions into fully configured multi-agent AI teams',
      githubUrl: 'https://github.com/meashish194/multi-agent-generator-pro',
      liveUrl: 'https://meashish194.github.io/multi-agent-generator-pro/',
      colors: ['#3b82f6', '#8b5cf6', '#22c55e'],
      badges: ['Python', 'OpenAI', 'Streamlit'],
    },
    {
      name: 'Online Banking',
      description: 'Uses Python and MySQL - Transaction Management, Loans, Cheque, Fund Transfers.',
      githubUrl: 'https://github.com/mrashrike/',
      liveUrl: '',
      colors: ['#3b82f6', '#8b5cf6', '#22c55e'],
      badges: ['Python', 'MySQL'],
    },
    {
      name: 'Chess Game',
      description: 'A GUI based Chess game in Python for two players that implements all major OOP Concepts. Techniques like backtracking and Greedy Approach was used to determine possibles moves. Files were used for storing statistics',
      githubUrl: 'https://github.com/mrashrike/',
      liveUrl: '',
      colors: ['#2563eb', '#22c55e', '#f97316'],
      badges: ['Python', 'OOP', 'Backtracking', 'Greedy Approach'],
      isWinner: true,
    },
    {
      name: 'Digital Passbook',
      description: 'An Android App to keep track of all transactions across multiple bank accounts.',
      githubUrl: 'https://github.com//mrashrike/',
      liveUrl: '',
      colors: ['#2563eb', '#22c55e', '#f97316'],
      badges: ['Java', 'Android Studio', 'SQLite'],
    },
    
  ],
     github: {
    username: 'my-protfolio',
    // GitHub accounts used for the contributions heatmap:
    // - beforeCutoffUsername: used for all days before cutoffDate
    // - afterCutoffUsername: used for all days on/after cutoffDate
    beforeCutoffUsername: 'my-protfolio',
    afterCutoffUsername: 'ashrike',
    cutoffDate: '2025-06-01',
    contribution_url: 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile',
  },

  
}
  
  

