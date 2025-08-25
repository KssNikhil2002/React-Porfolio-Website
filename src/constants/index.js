import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring Full Stack Software Engineer and passionate about Artificial Intelligence and Machine Learning.`;

export const ABOUT_TEXT = `I'm a Computer Science graduate student at UW-Madison with a passion for building AI-powered solutions that make a real impact. From developing multi-agent AI pipelines at Nutanix to leading full-stack development teams, I thrive at the intersection of cutting-edge technology and practical problem-solving. When I'm not architecting scalable systems or diving into machine learning research, you'll find me on the cricket field—where I helped bring home a national championship. I believe the best software bridges complex technology with human needs, and I'm excited to continue pushing those boundaries in my upcoming roles at Amazon and beyond.`;

export const EXPERIENCES = [
  {
    year: "Sept 2025 - Dec 2025",
    role: "Software Engineer Intern",
    company: "Amazon",
    description: `Incoming Fall 2025 Software Engineer Intern, part of the Amazon Stores Team.`,
    technologies: [],
  },
  {
    year: "Jun 2025 - Aug 2025",
    role: "Member of Technical Staff (Data/GenAI) - Intern",
    company: "Nutanix",
    description: `Developed a multi-agent AI pipeline using LangGraph and LLaMA to validate firmographics through deep web research, reducing validation time by 92% (12 min to 1 min). Implemented a FastAPI microservice integrating Slack, Outlook, and text-to-SQL tools, reducing data correction timelines from months to a week. Orchestrated the system using Airflow and led UAT/regression testing, achieving 92% firmographic data accuracy.`,
    technologies: ["LangGraph", "LLaMA", "FastAPI", "Airflow", "SQL"],
  },
  {
    year: "June 2024 - Dec 2024",
    role: "Research Software Engineer Intern",
    company: "People and Robotics Lab",
    description: `Led a 4-member team in developing a Video Analysis Tool for Qualitative Research using React, Flask, and PostgreSQL, exceeding existing tools in usability according to 80% of pilot users. Developed a Python script using YOLO and WhisperX to generate timestamped transcripts and object labels. Integrated an AI chatbot using LangChain and GeminiAPI, reducing information discovery time by 80%.`,
    technologies: ["React", "Flask", "PostgreSQL", "YOLO", "LangChain"],
  },
  {
    year: "Jan 2024 - May 2024",
    role: "Software Engineer Intern (Capstone)",
    company: "Holos",
    description: `Built a VR/AR educational app on F1 using Unity and designed 3D assets in Blender. Developed a C# script integrating ChatGPT and WhisperGPT for real-time speech-to-text. Led Agile development as Scrum Master, implementing Scrum and JIRA, achieving 90% stakeholder satisfaction.`,
    technologies: ["Unity", "C#", "Blender", "JIRA"],
  },
  {
    year: "Oct 2023 - May 2024",
    role: "Student Software Engineer",
    company: "Demic",
    description: `Collaborated with the core team in an agile environment to migrate a 3000+ lines React Native codebase from JavaScript to TypeScript for better code maintainability. Created database indexes to optimize queries, improving data retrieval efficiency and resolved 12+ bugs.`,
    technologies: ["React Native", "TypeScript", "JavaScript", "Database Optimization"],
  },
  {
    year: "Oct 2023 - Jan 2024",
    role: "Machine Learning Research Assistant",
    company: "University of Wisconsin Madison",
    description: `Cleaned and annotated 2,000+ mosquito images using Roboflow, developing an ML pipeline with image quality assessment, custom trained YOLO object detection, and SAM segmentation to classify mosquito species. Built a CNN classifier using segmentation masks, improving species classification accuracy by 45% over baseline.`,
    technologies: ["Python", "Roboflow", "YOLO", "SAM", "CNN", "Computer Vision"],
  },
  {
    year: "Oct 2023 - Feb 2024",
    role: "Teaching Assistant",
    company: "Microsoft TEALS",
    description: `Provided individualized support to 30 students as a Teaching Assistant in an AP Computer Science Java class. Created comprehensive problem sets on object-oriented programming, recursion, and loops and held online office hours, resulting in a 25% increase in student engagement.`,
    technologies: ["Java", "Object-Oriented Programming", "Teaching"],
  },
];

export const PROJECTS = [
  {
    title: "GitFlowAI",
    image: project1,
    type: "AI-Powered Developer Productivity",
    description:
      "Built an AI-based developer productivity app using Next.js and tRPC, integrating a RAG pipeline with LangChain and PGVector for intelligent GitHub repository querying and AssemblyAI for extracting issues from meeting audio.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "PrismaORM", "Clerk", "NeonDB", "tRPC", "LangChain", "PGVector", "AssemblyAI"],
    github: "https://github.com/KssNikhil2002/GitFlowAI", 
    dates: "Present", 
  },
  {
    title: "Quick Bite",
    image: project2,
    type: "Mobile Application Development",
    description:
      "A cross-platform React Native food delivery mobile application that allows users to browse various restaurants and their dishes, add items to a cart, and place orders. Utilizes Redux for State management and Firebase for user authentication, facilitating users to login and register.",
    technologies: ["ReactNative", "Javascript", "Firebase", "TailwindCSS"],
    github: "https://github.com/KssNikhil2002/Quick-Bite",
    dates: "Summer 2023",
  },
  {
    title: "Loan Approval Predictor",
    image: project3,
    type: "Data Analysis with Machine Learning ",
    description:
      "Utilized Spark to load and perform data analysis on Wisconsin Loan Applications and queried data using SparkSQL. Developed an ML-based Decision Tree model to predict loan approvals based on loan amount, income, and interest rate and achieved an accuracy of 89.3 percent.",
    technologies: ["Python", "ApacheSpark", "Docker"],
    github: "https://github.com/KssNikhil2002/Loan-Approval-Predictor",
    dates: "Fall 2023",
  },
  {
    title: "Generative Vision Model",
    image: project4,
    type: "Deep Learning for Computer Vision",
    description:
      "Developed a Generative Adversarial Network (GAN) from scratch using PyTorch, achieving a 99% accuracy rate in generating the MNIST dataset. Implemented Style transfer algorithms using a pre-trained SqueezeNet model.",
    technologies: ["Pytorch", "Python", "JupyterNotebook"],
    github: "https://github.com/KssNikhil2002",
    dates: "Spring 2023",
  },
];

export const CONTACT = {
  address: "Madison, WI",
  phoneNo: "+1 608-8673345 ",
  email: "skruthiventi@wisc.edu",
};
