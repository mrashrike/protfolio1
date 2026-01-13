// Centralized content and placeholder config for the portfolio

export const siteConfig = {
  name: 'Ashish',
  title: 'a.k.a. Ashish Kumar ',
  about: {
    headline: 'Software geek and a Power Rangers nerd. Working full time as a Machine Learning Engineer at Greet Labs.',
    socials: {
      github: 'https://github.com/mrashrike',
      
      
      email: '<a href=mrashrike@gmail.com>Email</a>',
      
    },
    resumeUrl: 'https://raw.githubusercontent.com/mrashrike/resume/master/Ashish_resume.pdf',
  },
  experience: [
    
    {
      company: 'Greet Labs, Bangalore',
      title: 'ML Engineer',
      link: 'https://www.greetlabs.com/',
      period: 'Dec. 2023 - Present',
      logo: '/greetlogo.png',
      highlights: [
        'Developed a Behavioral Anomaly Detection pipeline utilizing Isolation Forests and RNNs to identify orphaned accounts by analyzing "Ghosting" patterns; integrated Department-App Affinity scoringto distinguish between human departures and critical service accounts, reducing manual IT audit overhead by 40.',
        'Develop and consistently manage Python‑based software (Flask and Angular) designed specifically for compression tasks within the swap’s do‑ main. This entails crafting efficient algorithms and processes to optimize data while adhering to industry standards. Additionally, the role involves the ongoing maintenance, debugging, and enhancement of the software to align with the dynamic requirements of the swaps market.',
        'Developed python scripts that identify potential compression opportunities for cross‑currency and inflation trades. Aiding the bank in reducing the notional value or risk exposure of financial transactions, typically derivatives or other complex instruments, by combining or netting offsetting positions',
        'Contributed to the development of incremental features within the Angular framework for the compression’s platform. My role involved breaking down larger functionalities into smaller, manageable components that could be implemented iteratively. By doing so, I ensured a smooth inte‑ gration of new capabilities into the existing system.'
      ],
      skills: ['PyTorch', 'Pandas', 'CI/CD','Airflow', 'Kafka'],
    },
     {
      company: 'Greet Labs, Bangalore',
      title: 'Python Developer',
      link: 'https://www.greetlabs.com/',
      period: 'Jun. 2021 - Aug 2023',
      logo: '/greetlogo.png',
      highlights: [
        'Proficiently harnessed the power of the Pandas library to extract, clean, and manipulate pharmaceutical data. This process involved several crucial steps to ensure the accuracy and reliability of the information we worked with.',
        'Undertook the challenge of building sophisticated machine learning models to predict the risk compliance of patients. This involved a compre‑ hensive and systematic approach that incorporated various stages of model development and validation.',
        'Translating legacy code from SAS to Python involves converting existing code written in the SAS programming language into Python code. This process requires a thorough understanding of both programming languages, data processing concepts, and the specific logic embedded in the legacy SAS code',
        'Collaborated with Product Managers, Design, and Customer Support teams to proactively deliver features and address customer pain points.',
      ],
      skills: ['Python', 'MySQL', 'Flask'],
    },
   
    
  ],
  projects: [
    {
      name: 'Maven Pizza Sales Insight',
      description: 'Analyzing Maven Pizza sales performance and business insights by exploring key metrics, product trends, customer behavior, and peak sales periods, utilizing SQL for querying and Excel for dashboard visualizations',
      githubUrl: 'https://github.com/mrashrike/Mavens-Pizza-Sales-Insight',
      liveUrl: '',
      colors: ['#3b82f6', '#8b5cf6', '#22c55e'],
      badges: ['Python', 'SQL', 'ETL', 'Analysis', 'Data Visualization', 'Data-Pipeline'],
    },
    {
      name: 'Abstroy Hotel Management System',
      description: 'A web-based hotel management system built with Django, Python, SQL Server, HTML, CSS, and JavaScript. Users can book for events like conferences, dining, weddings, etc., with PayPal integration. Admins can manage bookings, services, and user data via a secure dashboard using master pages.',
      githubUrl: 'https://github.com/mrashrike/Abstroy-Hotel-Management-System',
      liveUrl: '',
      colors: ['#2563eb', '#22c55e', '#f97316'],
      badges: ['Python', 'Django', 'SQL', 'Javascript', 'OpenCV'],
      isWinner: true,
    },
    {
      name: 'Predicting Food Delivery Time',
      description: 'A unique ID that represents a restaurant.The location of the restaurant.The cuisines offered by the restaurant.The average cost for one person/order.The minimum order amount.Customer rating for the restaurant.The total number of customer votes for the restaurant.The number of customer reviews for the restaurant.The order delivery time of the restaurant. (Target Classes)',
      githubUrl: 'https://github.com//mrashrike/Predicting-Food-Delivery-Time-Hackathon-by-IMS-Proschool',
      liveUrl: '',
      colors: ['#2563eb', '#22c55e', '#f97316'],
      badges: ['Python', 'Pandas', 'Numpy'],
    },
    {
      name: 'Distributed File System (GFS)',
      description: 'Designed and developed a Distributed File System as part of a group project, where I led the implementation of key components including the master server, chunkserver logic, and client interactions. I implemented robust file-handling strategies at the chunkserver level and was responsible for designing and coding multi-level failure recovery mechanisms to ensure system resilience.',
      githubUrl: 'https://github.com/',
      liveUrl: '',
      colors: ['#ef4444', '#f59e42', '#ec4899'],
      badges: ['Python', 'Django', 'Distributed Systems'],
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
  
  

