export const skills = {
  'Backend & APIs': [
    'Node.js',
    'Express.js',
    'Java Spring Boot',
    'RESTful APIs',
    'Authentication & Authorization',
    'Business Logic Design',
    'Query Optimization'
  ],
  'Frontend': [
    'React',
    'TypeScript',
    'Modern JavaScript (ES6+)',
    'TailwindCSS',
    'Responsive Design',
    'Data Visualization'
  ],
  'Data Engineering': [
    'Database Design',
    'ETL Pipelines',
    'Data Aggregation',
    'Large Dataset Processing',
    'Performance Optimization'
  ],
  'Mobile': [
    'Flutter',
    'Dart',
    'API Integration',
    'Cross-Platform Development'
  ],
  'System Design': [
    'Workflow Modeling',
    'Scalable Architecture',
    'Microservices',
    'Queue-Based Systems',
    'Enterprise Planning'
  ],
  'DevOps': [
    'Git & GitHub',
    'Docker',
    'CI/CD Pipelines',
    'Deployment Automation'
  ]
};

export const projects = [
  {
    id: 'cmez-crpm',
    title: 'CmEZ + CRPM Aging System',
    subtitle: 'Enterprise Financial Analytics Platform',
    description: 'High-performance internal analytics system for TNB managing Multi-million-row datasets with sub-second query performance.',
    category: 'Enterprise System',
    status: 'Production',
    metrics: [
      { label: 'Accounts Processed', value: '1.5M+' },
      { label: 'Time Saved', value: '2-3 Days→ 5min' },
      { label: 'Dataset Size', value: '1M+ rows' },
      { label: 'Query Performance', value: '<1 second' }
    ],
    features: [
      'Automated data ingestion & validation',
      'Real-time aging bucket classification',
      'Low-latency reporting dashboards',
      'Excel automation & report generation',
      'Multi-user access control'
    ],
    tech: ['Node.js', 'Express', 'SQL', 'React', 'Excel Automation']
  }
];

export const inDevelopment = [
  {
    id: 'northace-adventure-video',
    title: 'North Ace Adventure',
    subtitle: 'Video Demo',
    description: 'Showcase walkthrough video for the North Ace Adventure website experience and overall interaction flow.',
    status: 'Demo Video',
    video: '/NorthAceAdventure.mp4',
    tech: ['Web Design', 'Frontend UX', 'Responsive Layout']
  },
  {
    id: 'zulbikechamp-video',
    title: 'Zulbikechamp',
    subtitle: 'Video Demo',
    description: 'Presentation video covering the Zulbikechamp demo build and page structure across sections.',
    status: 'Demo Video',
    video: '/Zulbikechamp full.mp4',
    tech: ['Landing Page', 'Conversion UI', 'Mobile Responsive']
  }
];

export const demoProjects = [
  {
    id: 'react-landing',
    title: 'React Landing Page Demo',
    subtitle: 'Professional Component Library',
    description: 'Reusable landing page components showcasing modern React patterns and animation techniques.',
    image: '/dashlydemo.jpeg',
    sites: [
      { name: 'React Landing Demo', url: 'https://reactdemolandingpage.netlify.app/', image: '/dashlydemo.jpeg' }
    ],
    tech: ['React', 'TailwindCSS', 'CSS3']
  },
  {
    id: 'barber-shop',
    title: 'Barbershop',
    subtitle: 'Premium Barbershop Demo',
    description: 'Elegant barbershop website demo featuring premium positioning, service showcase, and modern design targeting luxury grooming market.',
    image: '/barber.png',
    sites: [
      { name: 'Noble & Blade', url: 'https://barberdemoo.netlify.app/', image: '/barber.png' }
    ],
    tech: ['HTML', 'CSS', 'Responsive Design']
  },
  {
    id: 'towing-company',
    title: 'Towing Company',
    subtitle: 'Roadside Service and Dispatch Demos',
    description: 'Two towing-focused website demos that showcase emergency call flow, conversion-focused layout, and responsive booking-first UX.',
    image: '/TowPro.png',
    sites: [
      { name: 'TowPro', url: 'https://towpro.netlify.app/', image: '/TowPro.png' },
      { name: 'Road Rescue Demo', url: 'https://roadrescuedemo.netlify.app/', image: '/RoadRescue.png' }
    ],
    tech: ['React', 'TypeScript', 'TailwindCSS']
  },
  {
    id: 'printing',
    title: 'Printing',
    subtitle: 'Printing Service Landing Demo',
    description: 'A service-focused printing demo optimized for inquiry generation, showcasing clear offers and conversion-oriented section flow.',
    image: '/Printing.png',
    sites: [
      { name: 'Demo Printing', url: 'https://demoprinting.netlify.app/', image: '/Printing.png' }
    ],
    tech: ['HTML', 'CSS', 'Responsive UI']
  },
  {
    id: 'contractor',
    title: 'Contractor',
    subtitle: 'Construction and Engineering Demos',
    description: 'Two contractor website variants built to present services, trust factors, and lead capture flow for project-based businesses.',
    image: '/nfsbersatu.png',
    sites: [
      { name: 'NFS Bersatu', url: 'https://nfsbersatu.netlify.app/', image: '/nfsbersatu.png' },
      { name: 'Demo Kontraktor', url: 'https://demokontraktor.netlify.app/', image: '/KontratorPro.png' }
    ],
    tech: ['React', 'Vite', 'TailwindCSS']
  },
  {
    id: 'mobile-spa',
    title: 'Mobile Spa',
    subtitle: 'Women Wellness & Massage Service Demo',
    description: 'Premium mobile spa website showcasing massage and wellness services with booking flow, service highlights, and luxury positioning.',
    image: '/MobileSpa.png',
    sites: [
      { name: 'Inaz Mobile Spa', url: 'https://inmobilespa.netlify.app/', image: '/MobileSpa.png' }
    ],
    tech: ['React', 'TailwindCSS', 'Responsive Design']
  }
];

export const services = [
  {
    icon: 'api',
    title: 'Backend & API Development',
    description: 'Build the backbone of your application with robust, secure, and scalable server-side solutions.',
    features: [
      'REST API design & implementation',
      'Authentication & authorization',
      'Database integration & optimization',
      'Performance tuning & caching',
      'Scalable microservice architecture'
    ]
  },
  {
    icon: 'fullstack',
    title: 'Full-Stack Web Applications',
    description: 'Complete web platforms including dashboards, admin panels, and data-driven applications with intuitive interfaces.',
    features: [
      'Responsive UI/UX design',
      'Real-time data dashboards',
      'Complex business logic',
      'Admin & user portals',
      'Integration with external services'
    ]
  },
  {
    icon: 'mobile',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using Flutter that work seamlessly on iOS and Android.',
    features: [
      'Native performance',
      'API-driven architecture',
      'Offline capabilities',
      'Push notifications',
      'App store deployment'
    ]
  },
  {
    icon: 'automation',
    title: 'Automation & Internal Tools',
    description: 'Streamline operations with custom automation solutions and internal systems that eliminate manual workflows.',
    features: [
      'Process automation',
      'Data pipeline integration',
      'Report generation',
      'Scheduled tasks',
      'System integrations'
    ]
  }
];

export const benefits = [
  {
    title: 'Enterprise Experience',
    description: 'Proven track record building production systems for established organizations handling complex business requirements.'
  },
  {
    title: 'Performance Engineering',
    description: 'Specialized in optimizing systems for low-latency operations and handling large-scale datasets efficiently.'
  },
  {
    title: 'Business-Focused Design',
    description: 'Translate business requirements into maintainable software architectures that deliver measurable value.'
  },
  {
    title: 'Clean, Maintainable Code',
    description: 'Write code that\'s easy to understand, modify, and extend—reducing technical debt and maintenance costs.'
  },
  {
    title: 'Full-Stack Capability',
    description: 'Handle the entire development lifecycle from database design to user interfaces, providing end-to-end solutions.'
  }
];

export const testimonials = [
  {
    content: 'Hafizul system has significantly improved our operational efficiency and data accessibility.',
    author: 'CRPM Team',
    company: 'Tenaga Nasional Berhad'
  },
  {
    content: 'Professional, reliable, and results-driven. The Landing Page he built became the foundation for our investor pitch deck.',
    author: 'Director',
    company: 'Ceritha'
  },
  {
    content: 'Exceptional problem-solver who delivers scalable solutions. His work ethic and attention to detail set him apart.',
    author: 'Company  Owner',
    company: 'SME Client'
  }
];
