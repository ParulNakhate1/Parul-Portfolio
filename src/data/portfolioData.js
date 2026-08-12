export const personalInfo = {
  name: "Parul Nakhate",
  title: "AI & Machine Learning Engineer",
  subTitle: "Computer Science & Engineering (AI & ML) Student",
  location: "Nagpur, Maharashtra, India",
  email: "parulnakhate22@gmail.com",
  linkedin: "https://www.linkedin.com/in/parul-nakhate-a70213323/",
  bio: "Passionate AI & Machine Learning Engineer with hands-on expertise in Computer Vision, Natural Language Processing, Speech Processing, and Full-Stack AI systems. Proven experience building autonomous AI platforms for state government bodies, conversational voice biometrics banking systems, and smart urban mobility solutions.",
  stats: [
    { label: "CGPA (B.Tech AIML)", value: "8.34 / 10" },
    { label: "Design Patent Issued", value: "1 Patent" },
    { label: "AI Verification Accuracy", value: "89% - 91%" },
    { label: "Govt Internship", value: "MRSAC" }
  ]
};

export const skillsData = {
  languages: [
    { name: "Java (DSA)", level: 90 },
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 82 }
  ],
  webTech: [
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "JWT Auth", level: 85 },
    { name: "FastAPI", level: 90 },
    { name: "Flask", level: 88 }
  ],
  librariesAndFrameworks: [
    { name: "PyTorch", level: 88 },
    { name: "Scikit-Learn", level: 90 },
    { name: "OpenCV (YOLO)", level: 92 },
    { name: "PyQt5", level: 85 },
    { name: "Librosa (Audio)", level: 84 },
    { name: "NumPy", level: 92 },
    { name: "SQLite", level: 86 }
  ],
  domains: [
    { title: "Machine Learning", desc: "Predictive modeling, classification, regression, feature extractions" },
    { title: "Computer Vision", desc: "Object detection (YOLO), spatial mapping, image processing" },
    { title: "Speech Processing", desc: "MFCC feature vectors, GMM-UBM models, voice biometrics" },
    { title: "Natural Language Processing", desc: "Intent recognition, LLM integration, OpenAI GPT models" }
  ],
  tools: [
    "Vercel", "Twilio API", "OpenAI API", "Git", "GitHub", "SQLite", "Linux"
  ]
};

export const experienceData = [
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
      "Integrated spatial data mapping and computer vision models to accurately identify and report infrastructural anomalies."
    ],
    tags: ["Computer Vision", "Spatial Mapping", "AI Road Damage Detection", "Geo-Reporting", "Python"]
  }
];

export const projectsData = [
  {
    id: "voxabank",
    title: "VoxaBank: AI Voice Banking",
    period: "2025",
    category: "AI & Speech Processing",
    techStack: ["FastAPI", "Flask", "Twilio", "PyTorch", "Scikit-learn", "OpenAI GPT", "SQLite"],
    shortDesc: "End-to-end conversational telebanking system processing real-time audio with Voice Biometrics & GPT Intent Recognition.",
    bullets: [
      "Architected an end-to-end conversational telebanking system processing real-time audio and executing banking operations.",
      "Implemented a hybrid security layer combining SMS OTPs and Voice Biometrics utilizing GMM-UBM models.",
      "Achieved 89% speaker verification accuracy across demographic groups by extracting 200-dimensional MFCC feature vectors.",
      "Integrated OpenAI GPT models for NLP intent recognition, achieving 91% accuracy in classifying banking operations.",
      "Built a Flask-based Admin Panel with SQLite to manage customer records, voice samples, and system diagnostics."
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
      "Utilized deep learning (YOLO) for robust vehicle detection and counting across live camera feeds and recorded footage.",
      "Reduced average simulated travel time from 30 seconds to 23 seconds, achieving a 23.33% efficiency improvement.",
      "Designed a user-friendly GUI using PyQt5 to allow users to simulate 3, 4, 6, and 8-way junction configurations."
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
  cgpa: "8.34 / 10",
  gradYear: "2026",
  details: "Specialized in Artificial Intelligence and Machine Learning with active project development in Computer Vision and Speech Systems."
};
