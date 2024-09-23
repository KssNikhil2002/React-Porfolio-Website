import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring Full Stack Software Engineer and passionate about Artificial Intelligence and Machine Learning.`;

export const ABOUT_TEXT = `I'm a first-year Master's student in Computer Science at UW-Madison, specializing in Artificial Intelligence and Machine Learning. With a strong foundation in full-stack development, I have hands-on experience with frontend technologies like React.js and React Native, as well as backend technologies including Node.js, Express.js, Flask, and databases like MySQL and PostgreSQL. My passion for machine learning drives my work in developing algorithms using Python and PyTorch, blending my expertise in software development with cutting-edge AI techniques.`;

export const EXPERIENCES = [
  {
    year: "June, 2024 - Present",
    role: "AI | Software Engineer",
    company: "People and Robotics Lab",
    description: `Leading a 4 member team in the development of a Full Stack Video Analysis tool using React, Flask, and PostgreSQL. Engineered a custom object detection pipeline using Python and OpenCV Library, generating timestamped labels for
objects in a video. Implemented 7 RESTful APIs using Flask, with thorough testing and documentation using Postman.`,
    technologies: ["Javascript", "React.js", "Python", "PostgreSQL", "OpenCV", "Flask", "Postman"],
  },
  {
    year: "Oct, 2023 - Sep, 2024",
    role: "Software Engineer",
    company: "Demic. Inc",
    description: `Collaborated with the core team in an agile environment to resolve 12+ bugs and transformed 500+ lines of React Native codebase from Javascript to Typescript for better code maintainability. Implemented a gallery feature allowing users to connect based on shared interests and redesigned Firebase database architecture to accommodate student organizations registering within the app.`,
    technologies: ["ReactNative", "Typescript", "Firebase", "TailwindCSS"],
  },
  {
    year: "Jan, 2024 - May, 2024",
    role: "Software Engineer Intern", 
    company: "Holos. Inc",
    description: `Developed an AR/VR educational app on F1 using Unity and designed a 3D model of an F1 car using Blender. Implemented a C# script to seamlessly integrate OpenAI’s ChatGPT and WhisperGPT. Served as Scrum Master and implemented agile methodologies like Scrum, Lean Canvas, and JIRA for task tracking`,
    technologies: ["Unity", "C#", "Blender"],
  },
  {
    year: "Oct, 2023 - Feb, 2024",
    role: "NLP Research Assistant",
    company: "MaDPL Lab",
    description: `Conducted a comprehensive literature review of 8 research articles to understand the prompt sensitive and hallucinating nature of Large Language Models, informing the scope of the research. Developed a Python script using Microsoft Azure’s ChatGPT API and prompting principles like Few-Shot prompting, decreasing response multiplicity by 40%.`,
    technologies: ["Python", "LLMs", "HuggingFace"],
  },
];

export const PROJECTS = [
  {
    title: "UnionHub | Ongoing Project",
    image: project1,
    type: "Full Stack Web Development",
    description:
      "A One Stop Platform for Wisconsin Union Admin tasks and automate the process by 80 percent.",
    technologies: ["Next.js", "TailwindCSS", "PostgreSQL", "NextAuth.js"],
    github: "https://github.com/KssNikhil2002/UnionHub", 
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
