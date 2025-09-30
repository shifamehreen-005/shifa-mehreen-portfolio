import { Experience, Project, Award, Skill } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Graduate Assistant',
    company: 'AAP Math, University of Maryland',
    period: 'Aug 2024 – Present',
    type: 'work',
    description: [
      'Tutored/mentored 100+ undergrads; improved analytical thinking and problem-solving.',
      'Partnered with AAP team on data-driven interventions that boosted outcomes/retention.'
    ]
  },
  {
    id: '2',
    title: 'Machine Learning Engineer',
    company: 'Tata Elxsi',
    period: 'Jun 2023 – Jun 2024',
    type: 'work',
    description: [
      'Built LiDAR point-cloud segmentation pipelines for agricultural machines using ROS, PCL, RViz.',
      'Improved detection with PointNet++, Open3D voxel processing, and RANSAC clustering.'
    ]
  },
  {
    id: '3',
    title: 'Machine Learning Intern',
    company: 'Tata Elxsi',
    period: 'Feb 2023 – Jun 2023',
    type: 'work',
    description: [
      'Automation for Rail Signaling testing; image processing for track segmentation (OpenCV, TensorFlow, Keras).'
    ]
  },
  {
    id: '4',
    title: 'Full-Stack Developer Intern',
    company: 'Aryagami Cloud Services',
    period: 'May 2022 – Jun 2022',
    type: 'work',
    description: [
      'Flutter/Dart front-end for a private-jet charter POC; integrated REST auth/search/payment.'
    ]
  },
  {
    id: '5',
    title: 'M.S. in Data Science',
    company: 'University of Maryland, College Park',
    period: '2024–2026',
    type: 'education',
    description: ['CGPA 4.0']
  },
  {
    id: '6',
    title: 'B.Tech, CSE',
    company: 'GITAM University',
    period: '2019–2023',
    type: 'education',
    description: ['CGPA 9.2']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'The Cloud Orchestrator',
    description: 'Natural Language → Cloud Infra (Multi-Agent)',
    longDescription: 'Multi-agent system using Google ADK + Gemini 2.5 Flash that converts natural language prompts to executable GCP DAGs with budget and quota guardrails.',
    technologies: ['Google ADK', 'Gemini 2.5 Flash', 'GCP', 'Multi-Agent Systems', 'Python'],
    category: 'ML/AI',
    github: 'https://github.com/MNS1007/cloud-orchestrator',
    featured: true
  },
  {
    id: '2',
    title: 'FeedForward',
    description: 'End-to-End AI for Food Security (Multimodal Agent)',
    longDescription: '24/7 call/voice/chat/web assistant for food security; Python, LangChain, OpenAI APIs, Twilio; Flask/Node/MySQL (AWS RDS), Maps/WMATA APIs. Runner-Up in UMD AI & Food Insecurity Case Competition 2025.',
    technologies: ['Python', 'LangChain', 'OpenAI APIs', 'Twilio', 'Flask', 'Node.js', 'MySQL', 'AWS RDS'],
    category: 'ML/AI',
    github: 'https://github.com/shifamehreen-005/FeedForward',
    featured: true
  },
  {
    id: '3',
    title: 'Olympiad Reasoner',
    description: 'Tool-Augmented LLM Math Solver',
    longDescription: 'LoRA-tuned Qwen/DeepSeek model with 10k ReAct/ToRA samples; weighted self-consistency for Kaggle AI Math Olympiad 2 (2025).',
    technologies: ['LoRA', 'Qwen', 'DeepSeek', 'ReAct', 'ToRA', 'PyTorch'],
    category: 'ML/AI',
    featured: true
  },
  {
    id: '4',
    title: 'Ophthalmic Imaging Analysis',
    description: 'Medical AI Diagnostics',
    longDescription: 'VGG-19 on 5k+ fundus images achieving ≈95% accuracy; SmartKC corneal topography via Zernike fitting for medical diagnostics.',
    technologies: ['VGG-19', 'TensorFlow', 'Keras', 'OpenCV', 'Medical Imaging', 'Zernike Fitting'],
    category: 'ML/AI',
    github: 'https://github.com/shifamehreen-005/Eye-Disease-Recognition'
  },
  {
    id: '5',
    title: 'MayaCare',
    description: 'NGO Management Portal (JPMC CodeForGood Winner)',
    longDescription: 'Django/Bootstrap/SQL-based NGO management portal with role-based access and accessibility focus. Winner of JPMC CodeForGood 2022.',
    technologies: ['Django', 'Bootstrap', 'SQL', 'Python', 'HTML/CSS/JS'],
    category: 'Full-Stack'
  }
];

export const awards: Award[] = [
  {
    id: '1',
    title: 'Runner-Up',
    organization: 'UMD AI & Food Insecurity Case Competition',
    year: '2025',
    description: 'For FeedForward - End-to-End AI for Food Security solution',
    project: 'FeedForward',
    image: `${process.env.NODE_ENV === "production" ? '/shifa-mehreen-portfolio':''}/images/feedforward-award.jpg`
  },
  {
    id: '2',
    title: 'Winner',
    organization: 'JPMC CodeForGood',
    year: '2022',
    description: 'For MayaCare NGO portal with role-based access and accessibility focus',
    project: 'MayaCare'
  }
];

export const skills: Skill[] = [
  {
    category: 'ML/AI',
    skills: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Open3D', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    category: 'LLMs & Agents',
    skills: ['LangChain', 'LoRA', 'ReAct', 'CoT', 'Multi-Agent Systems', 'Prompting']
  },
  {
    category: 'Cloud/Big Data',
    skills: ['AWS (RDS)', 'GCP (Vertex, BigQuery, GKE, ADK)', 'Spark', 'Hadoop', 'ETL']
  },
  {
    category: 'Full-Stack',
    skills: ['Flask', 'Django', 'Node.js', 'REST', 'HTML/CSS/JS', 'Bootstrap']
  },
  {
    category: 'Data/DB/Tools',
    skills: ['MySQL', 'MongoDB', 'Redis', 'Tableau', 'Git/GitHub', 'VS Code']
  }
];

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/shifa-mehreen-8178111b8/',
  github: 'https://github.com/shifamehreen-005',
  email: 'shifamehreen.here@gmail.com'
};
