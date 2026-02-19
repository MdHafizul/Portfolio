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
      { label: 'Accounts Processed', value: '300K+' },
      { label: 'Time Saved', value: '5h → 5min' },
      { label: 'Dataset Size', value: '700K-1M rows' },
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
  },
  {
    id: 'ceritha',
    title: 'Ceritha',
    subtitle: 'Modern Landing Page Platform',
    description: 'Premium landing page with smooth animations, responsive design, and live integration capabilities.',
    category: 'Web Application',
    status: 'Live',
    link: 'https://ceritha.netlify.app',
    features: [
      'Smooth scroll animations',
      'Responsive across all devices',
      'Modern component architecture',
      'SEO optimized',
      'Fast load times'
    ],
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite']
  },
  {
    id: 'react-landing',
    title: 'React Landing Page Demo',
    subtitle: 'Professional Component Library',
    description: 'Reusable landing page components showcasing modern React patterns and animation techniques.',
    category: 'Web Application',
    status: 'Demo',
    link: 'https://reactdemolandingpage.netlify.app',
    features: [
      'Modular component system',
      'Smooth UI animations',
      'Modern design patterns',
      'Fully responsive layout',
      'Production-ready code'
    ],
    tech: ['React', 'TailwindCSS', 'CSS3']
  }
];

export const inDevelopment = [
  {
    id: 'unikl-club',
    title: 'University Club Management System',
    description: 'Centralized platform for managing university club operations, events, and member activities.',
    features: [
      'Club registration & profiles',
      'Event scheduling & management',
      'Member tracking & analytics',
      'Role-based admin dashboards',
      'Notification system'
    ],
    value: 'Streamlines club operations and reduces administrative overhead for student organizations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 'thailand-student',
    title: 'Thailand University Student Management System',
    description: 'Comprehensive student information management system for academic records and administration.',
    features: [
      'Student profile management',
      'Academic records tracking',
      'Enrollment system',
      'Administrative dashboards',
      'Secure role-based access'
    ],
    value: 'Improves operational efficiency and data accessibility for university administration.',
    tech: ['React', 'Spring Boot', 'PostgreSQL']
  }
];

export const demoProjects = [
  {
    id: 'zulchamp',
    title: 'Zulchamp Enterprise',
    subtitle: 'Motorcycle Towing Service Management',
    description: 'Complete service management system for motorcycle towing operations including booking, dispatch, and payment tracking.',
    type: 'video',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 'northace',
    title: 'NorthAceAdventure',
    subtitle: 'Hiking Trip CRM System',
    description: 'Customer relationship and booking management system for hiking tour operations with trip scheduling and client management.',
    type: 'video',
    tech: ['React', 'TypeScript', 'Zustand']
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
    content: 'Hafizul delivered a robust system that transformed our account management process. His technical expertise and understanding of our business needs were exceptional.',
    author: 'Operations Manager',
    company: 'Enterprise Client'
  },
  {
    content: 'Professional, reliable, and results-driven. The API backend he built became the foundation for our entire product ecosystem.',
    author: 'Technical Lead',
    company: 'Tech Startup'
  },
  {
    content: 'Exceptional problem-solver who delivers scalable solutions. His work ethic and attention to detail set him apart.',
    author: 'Product Owner',
    company: 'SME Client'
  }
];
