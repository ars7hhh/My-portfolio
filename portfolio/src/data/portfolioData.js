export const profile = {
  name: "Saheed Arshad",
  title: "Data Science & AI/ML Engineer",
  tagline: "Computer Vision · Generative AI · Deep Learning",
  email: "saheedarshad99@gmail.com",
  phone: "+91 9900704299",
  whatsapp: "+91 9900704299",
  linkedin: "https://www.linkedin.com/in/ars7hhh",
  github: "https://github.com/ars7hhh",
  summary:
    "Data Science and AI/ML engineer with a strong foundation in statistical analysis, machine learning, and computer vision, with hands-on experience building and deploying machine learning models for real-world applications. Experienced in the full data science lifecycle, including exploratory data analysis, feature engineering, model development, and evaluation, as well as building end-to-end AI applications that integrate deep learning models, local LLMs, and interactive web interfaces into practical, deployable solutions. Eager to bring analytical rigor and a problem-solving mindset to a professional Data Science or AI/ML role.",
  punchline: "I build AI systems that see, understand, and act — from catching solar panel defects with computer vision to uncovering spending patterns through statistical analysis."
  };

export const stats = [
  { label: "CGPA", value: "8.92", suffix: "/10" },
  { label: "Best model accuracy", value: "93", suffix: "%" },
  { label: "Projects", value: "5", suffix: "" },
  { label: "Certifications", value: "4", suffix: "" },
];

export const education = [
  {
    school: "Shree Devi Institute of Technology (VTU)",
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    detail: "CGPA: 8.92 / 10",
    start: "Jul 2022",
    end: "Jan 2026",
  },
  {
    school: "Prestige International School, India",
    degree: "PCMC",
    detail: "Grade: 91%",
    start: "Jul 2020",
    end: "May 2022",
  },
  {
    school: "GEM Public School, India",
    degree: "Secondary Schooling",
    detail: "Grade: 95%",
    start: "",
    end: "",
  },
];

export const experience = [
  {
    role: "Data Science & AI/ML Intern",
    company: "Comedkares Innovation Hub, ERA Foundation",
    location: "Mangaluru, Karnataka · On-site",
    start: "Feb 2026",
    end: "Jun 2026",
    points: [
      "Developed and implemented machine learning models for predictive analytics and data-driven decision-making using Python libraries such as Pandas, NumPy, and Scikit-learn.",
      "Collaborated with team members to design, test, and deploy machine learning solutions, gaining hands-on experience in problem-solving, experimentation, and project documentation.",
      "Applied statistical analysis and visualization techniques to extract actionable insights from diverse datasets, supporting data-driven decision-making across different project domains.",
    ],
  },
];

export const skillGroups = [
  { group: "Languages", items: ["Python", "SQL"] },
  { group: "Data Science & Statistics", items: ["Data Cleaning", "Model Evaluation", "Exploratory Data Analysis","Feature Engineering", "Statistical Analysis","Data Visualization"] },
  {
    group: "AI / ML",
    items: ["Deep Learning", "Computer Vision", "Transfer Learning", "Retrieval-Augmented Generation (RAG)"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  { group: "Computer Vision", items: ["OpenCV", "ResNet18", "YOLOv8", "CNN", "Grad-CAM++"] },
  { group: "Frontend / Backend", items: ["React", "Flask", "Node.js", "HTML", "CSS", "REST APIs"] },
  { group: "Databases", items: ["MySQL", "MongoDB"] },
  { group: "Tools & AI", items: ["Git", "GitHub", "Google Colab", "VS Code", "Render", "Ollama (TinyLlama)"] },
  
];

export const creativeTools = [
  { name: "CapCut", icon: "capcut" },
  { name: "Snapseed", icon: "snapseed" },
  { name: "PicsArt", icon: "picsart" },
  { name: "VN Video Editor", icon: "vn" },
];

export const projects = [
  {
    id: "Solar-Scan",
    title: "Solar Scan",
    subtitle: "Solar Panel Defect Detection",
    tag: "Computer Vision",
    accuracy: "93% classification accuracy",
    description:
      "Developed a computer vision web app that detects solar panel defects in real time, achieving 93% classification accuracy across six defect categories with Grad-CAM++ heatmap visualizations for model interpretability, featuring Drone Mode simulation, zone-wise defect summaries, and batch processing via a Flask web interface. Conducted exploratory data analysis to diagnose class imbalance in the dataset and applied data augmentation techniques to improve model performance and generalization.",
    stack: ["PyTorch", "ResNet18", "Transfer Learning", "Grad-CAM++", "OpenCV", "Flask", "Python"],
    repo: null
  },
  {
    id: "finance-tracker",
    title: "Smart Personal Finance Tracker",
    subtitle: "AI-Powered Expense Analysis System",
    tag: "Generative AI · Full-Stack",
    accuracy: "Runs fully locally",
    description:
      "Built a full-stack AI-powered personal finance app that auto-categorizes expenses, performs statistical anomaly detection on spending patterns, and answers financial queries in natural language. Delivered UPI SMS parsing, savings goals, bill reminders, split expense tracking, and a real-time budgeting dashboard, all running locally with zero data privacy concerns.",
    stack: ["Flask", "React", "JavaScript", "Ollama (TinyLlama)", "MySQL", "Python"],
    repo:"https://github.com/ars7hhh/finance-tracker"
  },
  {
  id: "Royal-Stall-Ledger",
  title: "Royal Stall Customer Due Ledger",
  subtitle: "Digital Customer Due & Payment Management System",
  tag: "Full-Stack · Web App",
  accuracy: "Real-time sync across devices",
  description:
    "Developed a digital customer due ledger for my father's retail shop to replace paper-based record keeping. Customer dues and payment details were previously maintained manually, and paper records could be misplaced or lost, making it difficult to reliably track outstanding balances. The system provides a centralized digital record for customers, dues, and payments, with real-time synchronization across devices. It also supports English/Kannada customer names, payment tracking, WhatsApp payment receipts, and secure shop-based access.",
  stack: [
    "Supabase",
    "PostgreSQL",
    "JavaScript",
    "Real-time Database",
    "Authentication",
    "Row-Level Security",
  ],
  repo: "https://github.com/ars7hhh/Royal-Stall-Ledger",
},
  {
    id: "Deepfake-detection",
    title: "Deepfake & AI-Generated Image and Video Detection",
    subtitle: "Temporal Inconsistency Analysis",
    tag: "Deep Learning",
    accuracy: "Frame-level temporal analysis",
    description:
      "A deep learning model that detects deepfake and AI-generated images and videos by analyzing temporal inconsistencies across video frames.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "Scikit-learn"],
    repo:"https://github.com/ars7hhh/Final-Year-Project"
  },
  {
    id: "Disease-prediction",
    title: "Disease Prediction using ML",
    subtitle: "Symptom-Based Diagnosis Assistant",
    tag: "Machine Learning · Healthcare",
    accuracy: "Multi-class classification",
    description:
      "A machine learning system that predicts the likely disease from a patient's reported symptoms, trained on a labeled clinical dataset. Covers data cleaning and feature encoding, comparison across multiple classification algorithms, and a simple interface for entering symptoms and viewing the predicted condition along with confidence scores.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
    repo: null
  },
  {
    id: "Remote-user-auth",
    title: "Remote User Authenticating System",
    subtitle: "Secure Multi-Factor Access Control",
    tag: "Security · Backend",
    accuracy: "Session-based auth",
    description:
      "A secure authentication system for verifying remote users before granting access to protected resources, built around encrypted credential storage, session/token-based login, and safeguards against common attack patterns such as brute-force and replay attempts. Designed to be a drop-in access-control layer for web applications.",
    stack: ["Python", "Flask", "MySQL", "REST APIs"],
    repo: null
  },
];

import prepindiaCertImg from "../assets/certs/prepindia_cert.png";
import oopJavaCertImg from "../assets/certs/oop_java_cert.png";
import introMlCertImg from "../assets/certs/intro_ml_cert.png";
import eraCertImg from "../assets/certs/era_cert.png";
export const certifications = [
  { name: "PrepIndia Program", authority: "ERA Foundation & NWORX", date: "2026", image: prepindiaCertImg },
  { name: "Object-Oriented Programming in Java", authority: "Great Learning", date: "2023", image: oopJavaCertImg },
  { name: "Introduction to Machine Learning", authority: "Great Learning", date: "2023", image: introMlCertImg },
  { name: "Data Science & AI/ML Internship", authority: "ERA Foundation", date: "2026", image: eraCertImg },
];

export const achievements = [
  "Core team member of SAMBRAHM — a national-level technical fest; received a Certificate of Appreciation for planning and coordination.",
  "Actively involved in AICTE awareness programs and NSS initiatives focused on social awareness and community engagement.",
  "Represented Karnataka at the State Volleyball Championship, captained school teams, and received multiple awards for athletic performance.",
  "Managed billing, accounting, and operational records at a family retail business — strengthening data handling and problem-solving skills.",
];

export const languages = ["English", "Arabic (Read & Write)", "Hindi", "Malayalam", "Kannada"];
