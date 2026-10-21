export const personalInfo = {
  name: "Parul Nakhate",
  title: "AI & Machine Learning Engineer | Salesforce Developer",
  subTitle: "B.Tech in Computer Science & Engineering (AIML) • Salesforce Developer • AI/ML Engineer",
  location: "Nagpur, Maharashtra, India",
  phone: "+91-8010103217",
  email: "parulnakhate01@gmail.com",
  linkedin: "https://www.linkedin.com/in/parul-nakhate-a70213323/",
  github: "https://github.com/parulnakhate",
  bio: "Passionate AI & Machine Learning Engineer and Salesforce Developer with hands-on expertise spanning Computer Vision, Natural Language Processing, Speech Processing, and Enterprise Salesforce Development (Apex, LWC, Aura, Flows). Proven experience delivering scalable Apex solutions at Andolgy Infotech, autonomous AI damage-detection platforms for state government bodies (MRSAC), conversational voice biometrics banking systems, and dynamic traffic optimization algorithms.",
  stats: [
    { label: "CGPA (B.Tech AIML)", value: "8.36 / 10" },
    { label: "Design Patent Issued", value: "1 Patent" },
    { label: "AI Verification Accuracy", value: "89% - 91%" },
    { label: "Internships", value: "Salesforce & AI/Govt" }
  ]
};

export const skillsData = {
  languages: [
    { name: "Java (DSA)", level: 90 },
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 88 },
    { name: "Apex", level: 86 },
    { name: "SQL", level: 85 }
  ],
  salesforce: [
    { name: "Apex Triggers", desc: "Automated event handling, bulkification techniques & helper classes" },
    { name: "Lightning Web Components (LWC)", desc: "Interactive modern UI using @wire, @api, and imperative Apex calls" },
    { name: "SOQL & SOSL", desc: "Optimized database querying and text indexing across custom objects" },
    { name: "Flow Builder", desc: "Record-triggered automations, validation rules & approval processes" },
    { name: "Security Model", desc: "Profiles, organization-wide defaults (OWD), and record-level security" },
    { name: "Data Modeling", desc: "Custom objects, relationships, fields, and architectural schema design" },
    { name: "Aura Components", desc: "Interactive modular components and legacy framework maintenance" },
    { name: "Salesforce DX (SFDX) & REST APIs", desc: "External system integrations, HTTP callouts, and Git-based CI/CD" }
  ],
  webTech: [
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "JWT", level: 85 }
  ],
  librariesAndFrameworks: [
    { name: "FastAPI", category: "API Framework" },
    { name: "Flask", category: "Backend Web" },
    { name: "PyTorch", category: "Deep Learning" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "OpenCV (YOLO)", category: "Computer Vision" },
    { name: "PyQt5", category: "Desktop GUI" },
    { name: "Librosa", category: "Audio & Speech" },
    { name: "NumPy", category: "Scientific Computing" },
    { name: "SQLite", category: "Embedded DB" }
  ],
  domains: [
    { title: "Machine Learning", desc: "Predictive modeling, classification, regression, feature extraction" },
    { title: "Computer Vision", desc: "Object detection (YOLO), spatial mapping, live video feed analytics" },
    { title: "Speech Processing", desc: "200-dimensional MFCC vectors, GMM-UBM models, voice biometrics" },
    { title: "Natural Language Processing (NLP)", desc: "Intent recognition, OpenAI GPT model integration, conversational AI" },
    { title: "Enterprise Cloud & Salesforce", desc: "Apex architecture, LWC components, Flow automations, SFDX CI/CD" }
  ],
  tools: [
    "Salesforce Developer Console", "SFDX", "Postman", "VS Code", "Vercel", "Twilio API", "OpenAI API", "Git", "GitHub"
  ]
};

export const experienceData = [
  {
    id: "andolgy-salesforce",
    role: "Salesforce Developer Intern",
    company: "Andolgy Infotech Private Limited",
    location: "India",
    period: "August 2026 – October 2026",
    type: "Enterprise Cloud & CRM Internship",
    department: "Salesforce Development & Cloud Engineering",
    bullets: [
      "Gained hands-on experience with Salesforce administration, including data modeling, profiles, organization-wide defaults (OWD), and record-level security.",
      "Automated business processes using Salesforce Flows, record-triggered automation, validation rules, and approval processes.",
      "Developed scalable Apex solutions using triggers, helper classes, bulkification techniques, and comprehensive test classes.",
      "Built interactive Lightning Web Components (LWC) and Aura components using @wire, @api, custom objects, and imperative Apex calls.",
      "Integrated external systems through REST APIs and HTTP callouts, and managed deployments using Salesforce DX (SFDX) and Git."
    ],
    tags: ["Salesforce", "Apex Triggers", "LWC", "Aura", "Salesforce Flows", "SOQL/SOSL", "REST APIs", "SFDX", "Data Modeling"]
  },
  {
    id: "mrsac-intern",
    role: "AI & Machine Learning Intern",
    company: "Maharashtra Remote Sensing Application Centre (MRSAC)",
    location: "Nagpur, MH",
    period: "June 2025 – Aug. 2025",
    type: "Government Autonomous Body Internship",
    department: "Department of Planning, Government of Maharashtra",
    bullets: [
      "Selected for an exclusive internship at an autonomous body under the Department of Planning, Government of Maharashtra.",
      "Developed Smart Roadwatch, an AI-based road damage detection and geo-reporting platform.",
      "Integrated spatial data mapping and computer vision models to accurately identify and report infrastructure anomalies."
    ],
    tags: ["Computer Vision", "Spatial Mapping", "AI Road Damage Detection", "Geo-Reporting", "Python", "Infrastructure AI"]
  }
];

export const projectsData = [
  {
    id: "voxabank",
    title: "VoxaBank: AI Voice Banking",
    period: "2025",
    category: "AI, Speech Processing & Telebanking",
    techStack: ["FastAPI", "Flask", "Twilio", "PyTorch", "Scikit-learn", "OpenAI GPT", "SQLite"],
    shortDesc: "End-to-end conversational telebanking system processing real-time audio with Voice Biometrics & GPT Intent Recognition.",
    bullets: [
      "Architected an end-to-end conversational telebanking system processing real-time audio and executing banking operations.",
      "Implemented a hybrid security layer combining SMS OTPs and voice biometrics utilizing GMM-UBM models.",
      "Achieved 89% speaker verification accuracy across demographic groups by extracting 200-dimensional MFCC feature vectors.",
      "Integrated OpenAI GPT models for NLP intent recognition, achieving 91% accuracy in classifying banking operations.",
      "Built a Flask-based admin panel with SQLite to manage customer records, voice samples, and system diagnostics."
    ],
    highlights: [
      { metric: "89%", label: "Speaker Verification Accuracy" },
      { metric: "91%", label: "NLP Intent Recognition" },
      { metric: "200-D", label: "MFCC Feature Vector Extraction" }
    ]
  },
  {
    id: "traffic-detection",
    title: "Real-Time Traffic Congestion Detection",
    period: "2024",
    category: "Computer Vision & Deep Learning",
    techStack: ["Python", "YOLO", "PyQt5", "OpenCV", "Deep Learning"],
    shortDesc: "Computer vision system optimizing traffic signal timings dynamically based on real-time vehicle density.",
    bullets: [
      "Developed a computer vision system to optimize traffic signal timings dynamically based on real-time vehicle density.",
      "Utilized deep learning (YOLO) for vehicle detection and counting across live camera feeds and recorded footage.",
      "Reduced average simulated travel time from 30 seconds to 23 seconds, achieving a 23.33% efficiency improvement.",
      "Designed a user-friendly GUI using PyQt5 to simulate 3, 4, 6, and 8-way junction configurations."
    ],
    highlights: [
      { metric: "23.33%", label: "Travel Time Efficiency Boost" },
      { metric: "3-8 Way", label: "Dynamic Junction Configurations" },
      { metric: "YOLO", label: "Real-Time Vehicle Counting" }
    ]
  }
];

export const patentData = {
  title: "Design Patent: Vehicle Detection Device for No Parking Area",
  issuedDate: "Issued: December 2024",
  authority: "Intellectual Property Office, Government of India",
  designNo: "Design No: 441014-001",
  classCode: "Class 10-06",
  description: "Co-invented an innovative hardware design aimed at automating vehicle detection in restricted zones.",
  bullets: [
    "Registered under the Intellectual Property Office, Government of India (Design No: 441014-001, Class 10-06).",
    "Co-invented an innovative hardware design aimed at automating vehicle detection in restricted zones."
  ]
};

export const educationData = {
  institution: "Shri Ramdeobaba College of Engineering and Management",
  location: "Nagpur, MH",
  degree: "Bachelor of Technology in CSE (AIML)",
  cgpa: "8.36 / 10",
  gradYear: "2026",
  details: "Specialized in Artificial Intelligence and Machine Learning (AIML) with coursework in Java (DSA), Deep Learning, Speech Processing, Computer Vision, and Enterprise Cloud Application Development."
};
