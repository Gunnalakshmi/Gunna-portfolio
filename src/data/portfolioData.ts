export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
  phone: string;
  resume: string;
  portfolio?: string;
  twitter?: string;
}

export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  interests: string[];
  socials: SocialLinks;
  heroHeadline: string;
  heroSubtext: string;
  aboutBio: string[];
  philosophyPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  levelTag?: string; // e.g. "Basics", "Learning", "Core"
  description: string;
  projectsCount?: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface CaseStudy {
  problem: string;
  research: string;
  idea: string;
  architecture: string;
  implementation: string;
  innovation: string;
  results: string[];
  metrics: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  contribution: string;
  impact: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: 'AI / ML' | 'Frontend & Web' | 'Creative Tech' | 'Systems';
  caseStudy?: CaseStudy;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  status: 'Prototype' | 'Experimental' | 'Live Sandbox' | 'Research Paper';
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  interactiveType: 'shader' | 'physics' | 'nodes';
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Award' | 'Certification' | 'Milestone' | 'Publication';
  year: string;
  organization: string;
  description: string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string[];
}

export const PORTFOLIO_DATA: {
  profile: PersonalProfile;
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  experiments: LabExperiment[];
  achievements: Achievement[];
  education: Education[];
} = {
  profile: {
    name: "Cherukuri Gunna Lakshmi",
    title: "AI/ML Engineer",
    tagline: "Observe deeply. Understand the problem. Build the solution.",
    location: "Faridabad, Haryana",
    email: "gunalakshmi215@gmail.com",
    phone: "9493791732",
    interests: ["AI/ML", "Frontend Development", "Web Experiences", "Creative Technology"],
    socials: {
      github: "https://github.com/Gunnalakshmi",
      linkedin: "https://www.linkedin.com/in/gunna-lakshmi-871154287/",
      instagram: "https://www.instagram.com/guna_2005_28?igsi=czB2Zzk5ejh2emw3",
      email: "mailto:gunalakshmi215@gmail.com",
      phone: "tel:9493791732",
      resume: "#resume-placeholder",
    },
    heroHeadline: "Observe deeply. Understand the problem. Build the solution.",
    heroSubtext: "AI/ML engineering student passionate about turning observations into ideas and ideas into experiences across machine learning, frontend development, and creative technology.",
    aboutBio: [
      "I'm an AI/ML engineering student who enjoys turning observations into ideas and ideas into experiences. While my core interest lies in AI and machine learning, I'm equally drawn to frontend development, web experiences, and creative technology. I love experimenting with how technology can be presented—not just making something work, but making it intuitive, engaging, and visually meaningful.",
      "I naturally start by observing a problem, understanding why it exists, and then exploring different ways to solve it. Whether I'm working with AI/ML, building a website, designing an interface, or experimenting with a creative concept, I enjoy learning by building and turning curiosity into something tangible."
    ],
    philosophyPillars: [
      {
        title: "Deep Observation",
        description: "Observing situations and understanding why problems exist before building a solution.",
        icon: "Lightbulb"
      },
      {
        title: "AI & ML Foundation",
        description: "Exploring machine learning models, data patterns, NLP, and computer vision systems.",
        icon: "Brain"
      },
      {
        title: "Creative Web Experiences",
        description: "Making interfaces intuitive, visually meaningful, and engaging for users.",
        icon: "Sparkles"
      },
      {
        title: "Learning by Building",
        description: "Turning curiosity and ideas into tangible working technology solutions.",
        icon: "Layers"
      }
    ]
  },

  skills: [
    {
      id: "programming",
      name: "PROGRAMMING",
      description: "Core programming languages, algorithmic problem solving, and computer science foundations.",
      icon: "Code2",
      skills: [
        { name: "C", level: 80, description: "Procedural programming, memory concepts, problem solving" },
        { name: "Python", level: 85, description: "Core language for AI/ML models, data analysis, and backend scripting" },
        { name: "Java", level: 50, levelTag: "Basics", description: "Basic syntax, OOP fundamentals, elementary structures" },
        { name: "JavaScript", level: 80, description: "Dynamic web logic, DOM manipulation, async programming" },
        { name: "SQL", level: 75, description: "Relational database queries, data manipulation, joins" },
        { name: "HTML & CSS", level: 85, description: "Web structure, layout styling, responsive design" },
        { name: "Data Structures & Algorithms", level: 55, levelTag: "Basics", description: "Basic arrays, lists, search, and sorting concepts" },
        { name: "Object-Oriented Programming (OOP)", level: 60, levelTag: "Basics", description: "Classes, objects, inheritance, encapsulation basics" },
        { name: "Problem Solving", level: 82, description: "Analytical approach to dissecting technical problems" },
        { name: "Functional Programming", level: 70, description: "Pure functions, immutability, array transformations" }
      ]
    },
    {
      id: "frontend",
      name: "FRONTEND",
      description: "Core web standards, responsive UI design, component structures, and styling frameworks.",
      icon: "Layout",
      skills: [
        { name: "HTML5", level: 88, description: "Semantic markups, accessibility, document structure" },
        { name: "CSS3", level: 85, description: "Modern styling, Flexbox, Grid, custom properties" },
        { name: "JavaScript", level: 80, description: "ES6+ syntax, async fetch, DOM interactions" },
        { name: "Responsive Web Design", level: 88, description: "Mobile-first layouts, media queries, flexible viewports" },
        { name: "CSS Flexbox & Grid", level: 90, description: "Complex two-dimensional and one-dimensional UI layouts" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS styling, modern responsive designs" },
        { name: "Bootstrap", level: 80, description: "Component UI framework, rapid responsive grids" },
        { name: "Material UI", level: 75, description: "React material design component library integration" },
        { name: "Component-Based Architecture", level: 80, description: "Modular UI breakdown and reusability" },
        { name: "State Management & API Integration", level: 78, description: "Handling client state and asynchronous REST endpoints" },
        { name: "Web Accessibility & UI/UX", level: 82, description: "Intuitive user experience implementation and ARIA accessibility" }
      ]
    },
    {
      id: "ai-ml",
      name: "AI / MACHINE LEARNING",
      description: "Engineering foundation in machine learning algorithms, deep learning frameworks, NLP, and vision.",
      icon: "Brain",
      skills: [
        { name: "Machine Learning", level: 88, levelTag: "Core Focus", description: "Core ML concepts, supervised & unsupervised workflows" },
        { name: "Supervised & Unsupervised Learning", level: 85, description: "Regression, classification, clustering models" },
        { name: "Feature Engineering & Preprocessing", level: 82, description: "Feature selection, data cleaning, normalization, hyperparameter tuning" },
        { name: "NumPy & Pandas", level: 88, description: "Data manipulation, matrix math, tabular data structures" },
        { name: "Matplotlib & Seaborn", level: 85, description: "Data visualization, statistical plotting, exploratory data analysis" },
        { name: "Scikit-learn", level: 85, description: "Classical ML models, pipeline evaluation, model training" },
        { name: "Neural Networks & Deep Learning", level: 80, description: "Perceptrons, dense layers, activation functions" },
        { name: "TensorFlow, Keras & PyTorch", level: 80, description: "Deep learning model building, training loops, evaluation" },
        { name: "Natural Language Processing (NLP)", level: 82, description: "Text classification, sentiment analysis, tokenization, transformers" },
        { name: "Computer Vision & OpenCV", level: 80, description: "Image processing, object detection, face detection, classification" },
        { name: "Generative AI & LLMs", level: 82, description: "Prompt engineering, AI APIs, chatbot architectures, predictive analytics" }
      ]
    },
    {
      id: "backend",
      name: "BACKEND",
      description: "Server-side logic, API development, RESTful routing, and backend frameworks.",
      icon: "Server",
      skills: [
        { name: "Python & Java", level: 80, description: "Server-side execution runtimes and language handlers" },
        { name: "FastAPI & Flask", level: 80, description: "Lightweight Python REST API framework development" },
        { name: "Django", level: 75, description: "Full-featured Python web framework architecture" },
        { name: "Express.js", level: 75, description: "Node.js server-side web application routing" },
        { name: "REST API Development & Integration", level: 82, description: "Designing endpoint contracts, JSON payloads, HTTP status codes" },
        { name: "Authentication & Authorization", level: 75, description: "User credentials validation, CRUD operations, route security" },
        { name: "JSON & HTTP / HTTPS Protocols", level: 85, description: "Request/response cycles, API testing, backend request flows" }
      ]
    },
    {
      id: "databases",
      name: "DATABASES",
      description: "Relational database systems, SQL querying, data modeling, and document stores.",
      icon: "Database",
      skills: [
        { name: "MySQL & SQLite", level: 80, description: "Relational table schemas, structured query execution" },
        { name: "Oracle & SQL Server", level: 75, description: "Enterprise relational database management systems" },
        { name: "MongoDB", level: 55, levelTag: "Basics", description: "Basic document collection concepts and CRUD queries" },
        { name: "Database Design & Data Modeling", level: 78, description: "Entity relationships, table normalization, primary/foreign keys" },
        { name: "SQL Joins, Indexing & Optimization", level: 78, description: "Query optimization, indexing strategies, complex table joins" }
      ]
    },
    {
      id: "cloud-devops",
      name: "CLOUD / DEVOPS",
      description: "Version control workflows, cloud platforms, containerization basics, and app deployment.",
      icon: "Cloud",
      skills: [
        { name: "Git & GitHub", level: 88, description: "Source code version control, branching, repository management" },
        { name: "Vercel, Netlify & Render", level: 85, description: "Automated cloud application deployment and web hosting" },
        { name: "AWS, Azure & GCP", level: 75, description: "Cloud computing infrastructure services and compute instances" },
        { name: "GitHub Actions & CI/CD", level: 75, description: "Basic automated build and deployment workflows" },
        { name: "Linux", level: 55, levelTag: "Learning", description: "Learning terminal commands, file systems, and bash scripting" },
        { name: "Environment Variables & Deployment", level: 82, description: "Configuring env secrets, domain DNS, SSL HTTPS setup" }
      ]
    },
    {
      id: "design-creative",
      name: "DESIGN / CREATIVE",
      description: "UI/UX visual design, prototyping, creative graphics, and visual storytelling.",
      icon: "Sparkles",
      skills: [
        { name: "UI & UX Design", level: 85, description: "User interface layouts, design systems, visual hierarchy" },
        { name: "Prototyping & Visual Design", level: 82, description: "Interactive mockup wireframes, responsive screen designs" },
        { name: "Figma & Canva", level: 88, description: "Digital design, prototype creation, asset graphics" },
        { name: "Adobe Photoshop", level: 80, description: "Raster graphics editing, photo manipulation, visual assets" },
        { name: "After Effects & Premiere Pro", level: 78, description: "Video editing, motion graphics, visual storytelling" },
        { name: "Graphic Design & Brand Design", level: 82, description: "Visual branding, typography, creative assets" }
      ]
    },
    {
      id: "tools",
      name: "DEVELOPMENT TOOLS",
      description: "Essential software development tools, IDEs, code editors, and data notebooks.",
      icon: "Wrench",
      skills: [
        { name: "VS Code & Antigravity", level: 90, description: "Primary code editing IDEs and AI development environments" },
        { name: "Git, GitHub & GitHub Desktop", level: 88, description: "Version control tools and GUI client workflow management" },
        { name: "Jupyter Notebook & Google Colab", level: 88, description: "Interactive Python notebook environments for AI/ML experiments" },
        { name: "npm & Node Package Manager", level: 82, description: "Package dependency management and script execution" },
        { name: "Chrome DevTools", level: 85, description: "Browser DOM inspection, network debugging, console profiling" },
        { name: "Figma & Canva", level: 88, description: "Interface design tools and asset preparation" }
      ]
    }
  ],

  projects: [
    {
      id: "project-01",
      title: "AI / ML & Computer Vision Explorer",
      tagline: "Intelligent machine learning and vision analysis model pipeline",
      description: "An AI/ML exploratory system focused on computer vision, feature extraction, and predictive analytics.",
      problem: "Interpreting complex unstructured dataset patterns requires systematic feature preprocessing and model evaluation.",
      solution: "Developed Python ML pipelines utilizing Scikit-learn, OpenCV, and neural network architectures for accurate predictions.",
      technologies: ["Python", "Machine Learning", "OpenCV", "Scikit-learn", "TensorFlow"],
      contribution: "Designed data preprocessing pipelines, model hyperparameter tuning, and computer vision feature extraction.",
      impact: "Achieved high classification accuracy across test evaluation benchmarks.",
      githubUrl: "https://github.com/Gunnalakshmi",
      liveUrl: "#project-demo",
      featured: true,
      category: "AI / ML",
      caseStudy: {
        problem: "Unstructured image and text data required systematic feature engineering and clean model evaluation pipelines.",
        research: "Evaluated feature selection methods, supervised classification algorithms, and convolutional model layer setups.",
        idea: "Constructed an end-to-end Python AI pipeline from raw data preprocessing to visualization and model evaluation.",
        architecture: "Python Data Source -> Pandas/NumPy Pipeline -> Scikit-learn/TensorFlow Models -> Matplotlib Evaluation.",
        implementation: "Implemented image preprocessing via OpenCV, automated feature scaling, and neural network training loops.",
        innovation: "Integrated custom feature selection logic to improve prediction metrics while keeping training lightweight.",
        results: [
          "Delivered clean evaluation accuracy across benchmark datasets.",
          "Automated repetitive data cleaning and transformation steps."
        ],
        metrics: [
          { label: "Model Focus", value: "AI / ML" },
          { label: "Pipeline", value: "Python" }
        ]
      }
    },
    {
      id: "project-02",
      title: "Responsive Web & UI Design Experience",
      tagline: "Interactive, modern web interface with intuitive visual design",
      description: "A modern web application emphasizing clean component architecture, responsive design, and intuitive user interactions.",
      problem: "Creating digital interfaces that are not only functional but also engaging, accessible, and visually meaningful.",
      solution: "Engineered responsive UI structures using HTML5, CSS flexbox/grid, JavaScript, and Tailwind CSS.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "UI/UX Design"],
      contribution: "Created responsive component layouts, visual styling system, and smooth interactive web experiences.",
      impact: "Delivered intuitive user experience across mobile, tablet, and desktop viewports.",
      githubUrl: "https://github.com/Gunnalakshmi",
      liveUrl: "#project-demo",
      featured: true,
      category: "Frontend & Web",
      caseStudy: {
        problem: "Users require intuitive, fast, and visually cohesive web experiences across varied screen sizes.",
        research: "Researched modern design systems, accessibility contrast rules, and responsive grid layouts.",
        idea: "Designed a component-driven web experience prioritizing clarity, subtle interactions, and responsive aesthetics.",
        architecture: "HTML5 Semantic Structure -> Tailwind CSS Utility Layer -> JavaScript Interactive Handlers.",
        implementation: "Built flexible CSS Grid components, accessible interactive elements, and responsive layout queries.",
        innovation: "Applied clean visual hierarchy and micro-interactions for enhanced engagement.",
        results: [
          "100% responsive experience across mobile and desktop devices.",
          "Clean visual presentation aligned with user-centric UI design."
        ],
        metrics: [
          { label: "Layout", value: "Responsive" },
          { label: "UX Rating", value: "Intuitive" }
        ]
      }
    }
  ],

  experiences: [
    {
      id: "exp-01",
      company: "AI/ML & Tech Explorations",
      role: "Engineering Student & Developer",
      location: "Faridabad, Haryana",
      duration: "Present",
      responsibilities: [
        "Observing real-world technical problems and exploring AI/ML and software solutions.",
        "Developing machine learning pipelines in Python using NumPy, Pandas, Scikit-learn, and OpenCV.",
        "Building responsive, intuitive web interfaces using HTML, CSS, JavaScript, and modern styling tools."
      ],
      achievements: [
        "Built practical machine learning and computer vision experiments.",
        "Created engaging web user experiences driven by curiosity and problem solving."
      ],
      technologies: ["Python", "Machine Learning", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git"]
    }
  ],

  experiments: [
    {
      id: "lab-01",
      title: "Interactive Quantum Particle Field",
      category: "Creative Technology",
      status: "Live Sandbox",
      description: "Real-time canvas particle simulation testing interactive physics and responsive cursor movement.",
      technologies: ["HTML5 Canvas", "JavaScript", "Vector Physics"],
      githubUrl: "https://github.com/Gunnalakshmi",
      demoUrl: "#lab-demo",
      interactiveType: "shader"
    },
    {
      id: "lab-02",
      title: "Computer Vision & Detection Sandbox",
      category: "Artificial Intelligence",
      status: "Experimental",
      description: "Exploration of image classification and face detection routines using Python and OpenCV.",
      technologies: ["Python", "OpenCV", "NumPy"],
      githubUrl: "https://github.com/Gunnalakshmi",
      demoUrl: "#lab-demo",
      interactiveType: "nodes"
    }
  ],

  achievements: [
    {
      id: "ach-01",
      title: "AI/ML Engineering Foundation",
      category: "Milestone",
      year: "2024",
      organization: "Academic Studies",
      description: "Developing strong core foundations in Artificial Intelligence, Machine Learning algorithms, and Frontend Development."
    }
  ],

  education: [
    {
      degree: "AI/ML Engineering Studies",
      institution: "University / Academic Institution",
      duration: "Present",
      details: [
        "Focused on Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision.",
        "Exploring Frontend Development, Web Experiences, and Creative Technology."
      ]
    }
  ]
};
