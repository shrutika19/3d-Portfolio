import { meta, shopify, bmi, rudraksha } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    java,
    aws,
    bootstrap,
    tailwind

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: 'Java',
        type: 'Backend',
    },
    {
        imageUrl: aws,
        name: 'AWS',
        type: 'Cloud',
    },
    {
        imageUrl: bootstrap,
        name: 'Bootstrap',
        type: 'Frontend',
    },
    {
        imageUrl: tailwind,
        name: 'Tailwind CSS',
        type: 'Frontend',
    },

];

export const experiences = [
    {
        title: "Graduate Engineer Trainee",
        company_name: "Burns and McDonnell, India",
        icon: bmi,
        iconBg: "#accbe1",
        date: "July 2023 - Current",
        points: [
            "Developing and maintaining web applications using React.js and Asp .Net Framework.",
            "Working with Kendo React UI",
            "Implementing OIDC Authentication in .Net MVC Application",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Finding and fixing bugs",
        ],
    },
    {
        title: "Mobile Application Dev Intern",
        company_name: "RUDRAKSHA WELFARE FOUNDATION",
        icon: rudraksha,
        iconBg: "#fbc3bc",
        date: "Oct 2021 - Nov 2022",
        points: [
            "Developed mobile application using Android, Firebase.",
            "Revamped multiple features within the mobile application to enhance user experience and functionality.",
            "Identified and fixed bugs in the existing codebase to improve overall stability..",
            "Collaborated with team members to brainstorm solutions and implement enhancement.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shrutika19',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shrutika-jaiswal-a1a835212/',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'AI Image Generator',
        description: 'Developed a web application that generates an image from text using React.js and OpenAi',
        link: 'https://github.com/shrutika19/Ai-image-generator',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Social Media Dashboard',
        description: 'Built a social media dashboard, using React.js, MUI',
        link: 'https://github.com/shrutika19/react-mui',
    },
    {
        iconUrl: car,
        theme: 'btn-back-orange',
        name: 'Airbnb Clone',
        description: 'Built fullstack airbnb clone, using MERN Stack, Tailwind CSS, Razorpay Payment Gateway ',
        link: 'https://github.com/shrutika19/airbnb-clone',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },

    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];