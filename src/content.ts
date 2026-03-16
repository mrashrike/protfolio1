// Centralized content and placeholder config for the portfolio

export const siteConfig = {
  name: 'Ashish Kumar',
  title: 'Artificial Intelligence Engineer ',
  about: {
    headline: 'Building & deploying AI systems',
    socials: {
      github: 'https://github.com/mrashrike',
      
      
      email: '<a href=mrashrike@gmail.com>Email</a>',
      Chatgpt: '<a href=https://chatgpt.com/g/g-6989cf1637f08191a960d5881c7a3047-architecture-ai'
      
    },
    resumeUrl: 'https://raw.githubusercontent.com/mrashrike/resume/master/Ashish_resume.pdf',
  },
  experience: [
    
    {
      company: '',
      title: '',
      link: '',
      period: 'May 2022 - Present',
      logo: '/greet.png',
      highlights: [
        'Architected cutting-edge AI solutions for BFSI clients, specializing in financial document processing and regulatory-compliant automation solutions',
        'Engineered high-performance RAG architectures including Form Filling Assistant,achieving 80% faster document processing across workflows',
        'Published Branched RAG architecture for investment advisory on Developer Portal',
        'Delivered successful POCs for content standardization using parallel LLM processing, achieving 97% reduction in processing time,reducing compliance violations'
      ],
      skills: ['RAG', 'Milvus Vector Store', 'React.js'],
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
  
  

