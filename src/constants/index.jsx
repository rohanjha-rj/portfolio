import React from 'react';
import { FaRobot, FaChartLine, FaWallet, FaGamepad, FaCalendarAlt, FaDumbbell, FaHeart, FaCode, FaUniversity, FaGhost, FaShieldAlt, FaPaintBrush, FaServer, FaTools, FaGlobe } from 'react-icons/fa';

export const projects = [
    {
        id: 1,
        title: "Smart Water Footprint Chatbot",
        category: "ai",
        status: "Ongoing",
        description: "Created a chatbot with 80% NLP accuracy for water consumption tracking using JavaScript and JSON logic.",
        tags: ["JavaScript", "NLP", "JSON"],
        icon: <FaRobot />
    },
    {
        id: 2,
        title: "Stock Market Simulator",
        category: "web",
        status: "Live",
        description: "Simulated 10+ real-time stock interactions with historical data and a virtual portfolio manager.",
        tags: ["JavaScript", "React", "API"],
        icon: <FaChartLine />
    },
    {
        id: 3,
        title: "Expense Tracker Web App",
        category: "web",
        status: "Live",
        description: "Developed a daily budgeting tool with custom filtering and category-based breakdowns.",
        tags: ["HTML/CSS", "JavaScript", "LocalStorage"],
        icon: <FaWallet />
    },
    {
        id: 4,
        title: "Space Shooter Pro",
        category: "game",
        status: "Live",
        description: "Built a 2D space shooting game featuring multiple levels, power-ups, and boss battles.",
        tags: ["Game Dev", "JavaScript", "Canvas"],
        icon: <FaGamepad />
    },
    {
        id: 5,
        title: "TimeTable Generator",
        category: "web",
        status: "Live",
        description: "Logic-based scheduling algorithms to handle faculty preferences and constraints across semesters.",
        tags: ["Algorithms", "Automation", "Web"],
        icon: <FaCalendarAlt />
    },
    {
        id: 6,
        title: "Campus TV and Radio Club (CTR)",
        category: "web",
        status: "Live",
        description: "Official website for the Campus TV and Radio Club (CTR), managing events and registrations.",
        tags: ["React", "CSS", "Management"],
        icon: <FaUniversity />
    },
    {
        id: 7,
        title: "Flames Calculator",
        category: "web",
        status: "Fun",
        description: "A fun web application to calculate compatibility between two names using the FLAMES game logic.",
        tags: ["Logic", "JavaScript", "Fun"],
        icon: <FaHeart />
    },
    {
        id: 8,
        title: "Gym Website",
        category: "web",
        status: "Live",
        description: "Modern landing page for a fitness center with class schedules, membership plans, and contact forms.",
        tags: ["Design", "Responsive", "UI/UX"],
        icon: <FaDumbbell />
    },
    {
        id: 9,
        title: "Pacman Game",
        category: "game",
        status: "Classic",
        description: "Recreated the classic Pacman game with pathfinding algorithms for ghost movement.",
        tags: ["Game Dev", "Pathfinding", "Logic"],
        icon: <FaGhost />
    },
    {
        id: 10,
        title: "Personal Portfolio",
        category: "web",
        status: "Live",
        description: "My personal portfolio website showcasing my skills, projects, and experience (You are here!).",
        tags: ["React", "Framer Motion", "Vite"],
        icon: <FaCode />
    },
    {
        id: 11,
        title: "Tower Defender",
        category: "game",
        status: "Live",
        description: "Strategy game where players place towers to stop waves of enemies from crossing the map.",
        tags: ["Game Dev", "Strategy", "Canvas"],
        icon: <FaShieldAlt />
    },
    {
        id: 12,
        title: "Tuition Website",
        category: "web",
        status: "Live",
        description: "Platform for private tutors to list courses, schedules, and student testimonials.",
        tags: ["Web", "Educational", "Service"],
        icon: <FaUniversity />
    }
];

export const skillsData = [
    {
        category: "Languages",
        icon: <FaCode />,
        items: [
            { name: "C / C++", percentage: 90 },
            { name: "Java", percentage: 80 },
            { name: "JavaScript", percentage: 95 },
            { name: "Python", percentage: 75 }
        ]
    },
    {
        category: "Frontend",
        icon: <FaPaintBrush />,
        items: [
            { name: "HTML5", percentage: 95 },
            { name: "CSS3", percentage: 90 },
            { name: "React.js", percentage: 85 }
        ]
    },
    {
        category: "Backend",
        icon: <FaServer />,
        items: [
            { name: "Node.js", percentage: 80 },
            { name: "Express.js", percentage: 75 }
        ]
    },
    {
        category: "Tools",
        icon: <FaTools />,
        items: [
            { name: "Git / GitHub", percentage: 90 },
            { name: "VS Code", percentage: 85 },
            { name: "Figma", percentage: 80 },
            { name: "Canva / Photoshop", percentage: 75 },
            { name: "Catia V5", percentage: 70 }
        ]
    },
    {
        category: "Web & Others",
        icon: <FaGlobe />,
        items: [
            { name: "Responsive Design", percentage: 90 },
            { name: "SEO Basics", percentage: 75 },
            { name: "Public Speaking", percentage: 85 },
            { name: "3D Printing", percentage: 80 }
        ]
    }
];

export const experiences = [
    {
        role: "Cyber Security and Cyber Forensics Intern",
        company: "Centre for Emerging Technologies",
        duration: "09/2025 - PRESENT",
        description: "Researched emerging cyber threats and forensic techniques, assisting in drafting security recommendations and strengthening incident response procedures."
    },
    {
        role: "Software Development Intern",
        company: "AngleTwo Innovations Pvt. Ltd.",
        duration: "08/2025 - PRESENT",
        description: "Work on real-time software projects, applying Agile methodologies and version control; collaborate with cross-functional teams, and engage in daily stand-ups and code reviews."
    },
    {
        role: "3-D Printing and Additive Manufacturing Intern",
        company: "C-DAC Kolkata",
        duration: "08/2025 - PRESENT",
        description: "Designed and optimized 3D models using CATIA V5 and slicing software, and successfully executed high-precision prototypes on advanced 3D printers, enhancing manufacturing efficiency and product quality."
    },
    {
        role: "Web Developer and Trainer",
        company: "Techglaz Labs Pvt. Ltd.",
        duration: "05/2025 - PRESENT",
        description: "Built and maintained 5+ production-ready web apps with 95%+ mobile responsiveness. Led training sessions for 80+ junior developers, resulting in 90% positive feedback and improved onboarding speed."
    }
];

export const education = [
    {
        institution: "Bhagalpur College of Engineering",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "2023–2027",
        details: ""
    },
    {
        institution: "Saint Joseph's School, Bhagalpur",
        degree: "Intermediate (Class 12)",
        duration: "2021–2023",
        details: ""
    },
    {
        institution: "Saint Joseph's School, Bhagalpur",
        degree: "Matriculation (Class 10)",
        duration: "2020–2021",
        details: ""
    }
];
