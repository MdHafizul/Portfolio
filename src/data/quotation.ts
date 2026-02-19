// Quotation and Pricing Data
export const quotationInfo = {
  introduction: {
    title: 'Project Quotation & Pricing',
    subtitle: 'Transparent pricing for quality software solutions',
    description: 'Professional web development services with clear pricing and delivery timelines. Choose the package that fits your needs.'
  },
  servicePackages: [
    {
      id: 'landing-page',
      name: 'Package A — Landing Page Development',
      price: 'RM 800',
      basePrice: 800,
      urgentFee: 500,
      description: 'Modern responsive landing page with conversion-focused layout',
      includes: [
        'Modern responsive landing page',
        'Conversion-focused layout',
        'Basic SEO structure',
        'Contact/lead form integration',
        'Deployment to live server'
      ],
      timeline: '3-7 days',
      urgentTimeline: '24 hours (+ RM 500)',
      supportFee: 'RM 100/month',
      supportIncludes: [
        'Minor content updates',
        'Bug fixes',
        'Basic monitoring'
      ],
      paymentStructure: [
        { stage: 'Deposit', percentage: '50%', when: 'Project start' },
        { stage: 'Final Payment', percentage: '50%', when: 'Before deployment' }
      ],
      note: 'Monthly support fee may increase for high-traffic sites or heavy storage usage.',
      popular: true
    },
    {
      id: 'web-app',
      name: 'Package B — Custom Web App System',
      price: 'From RM 2,000',
      startingPrice: 2000,
      description: 'Full-featured custom web applications built to your specific needs',
      suitableFor: 'CRM, Booking Platforms, Internal Tools, Dashboards, Accounting Systems, Automation Tools',
      includes: [
        'System architecture planning',
        'Database design',
        'Frontend + backend development',
        'Admin dashboard',
        'Deployment & testing'
      ],
      timeline: '2-8 weeks',
      timelineNote: 'Depends on scope and complexity',
      supportFee: 'RM 200/month',
      supportIncludes: [
        'Minor content updates',
        'Bug fixes',
        'Basic monitoring'
      ],
      pricingFactors: [
        'Feature complexity',
        'Integrations (payment, WhatsApp, APIs, etc.)',
        'User roles & permissions',
        'Timeline requirements'
      ],
      paymentStructure: [
        { stage: 'Deposit', percentage: '30%', when: 'Project start' },
        { stage: 'Mid-development', percentage: '40%', when: 'Core features completed' },
        { stage: 'Final Payment', percentage: '30%', when: 'Before launch' }
      ],
      note: 'Monthly support fee may increase for high-traffic sites or heavy storage usage.',
      examples: ['CRM systems', 'Booking platforms', 'Management dashboards', 'Accounting systems', 'Internal tools']
    }
  ],
  hostingAndDomain: {
    title: 'Hosting & Domain',
    description: 'Charged separately based on provider cost',
    options: [
      'Client may use own hosting/domain',
      'Setup can be arranged upon request',
      'Cost depends on chosen provider'
    ]
  },
  timeline: {
    title: 'Project Timeline',
    packages: [
      {
        name: 'Landing Page',
        duration: '3–7 days',
        urgentOption: '24 hours available (+ RM 500)'
      },
      {
        name: 'Web App System',
        duration: '2–8 weeks',
        note: 'Depends on scope and complexity'
      }
    ],
    startCondition: 'Timeline begins after deposit and confirmation of requirements.'
  },
  paymentTerms: {
    landingPage: {
      name: 'Landing Page',
      structure: [
        { stage: 'Deposit', percentage: '50%', when: 'Project start' },
        { stage: 'Final Payment', percentage: '50%', when: 'Before deployment' }
      ]
    },
    webApp: {
      name: 'Web App System',
      structure: [
        { stage: 'Deposit', percentage: '30%', when: 'Project start' },
        { stage: 'Mid-development', percentage: '40%', when: 'Core features completed' },
        { stage: 'Final Payment', percentage: '30%', when: 'Before launch' }
      ]
    },
    methods: ['Bank Transfer', 'Online Banking', 'PayPal (for international clients)']
  },
  importantNotes: [
    {
      title: 'Revisions',
      description: 'Revisions limited to agreed scope'
    },
    {
      title: 'Additional Features',
      description: 'Additional features will be quoted separately'
    },
    {
      title: 'Timeline',
      description: 'Delays in content or feedback may affect timeline'
    },
    {
      title: 'Source Code',
      description: 'All source code delivered upon full payment'
    }
  ],
  whatIncluded: [
    'Complete source code ownership',
    'Deployment to live server',
    'Basic training and handover',
    'Bug fixes during initial period',
    'Documentation',
    'Technical support'
  ],
  process: [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, business goals, and technical needs',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Design & Architecture',
      description: 'Creating wireframes, database design, and technical architecture',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building the application with regular progress updates',
      duration: 'Varies by project'
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Comprehensive testing and quality assurance',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Handover',
      description: 'Deploying to production and training your team',
      duration: '1 week'
    }
  ]
};

export default quotationInfo;
