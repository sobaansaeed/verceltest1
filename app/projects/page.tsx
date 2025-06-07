"use client"; // Mark as client component

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ensure AnimatePresence is imported
import { SunIcon, MoonIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Variants for section animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Variants for project card animations
const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -5,
    boxShadow: '0 10px 20px rgba(0, 255, 255, 0.3), 0 0 15px rgba(0, 255, 255, 0.15)',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export default function ProjectsPage() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  const allProjects = [
    {
      title: "AI-Powered Content Generation Platform",
      description: "A full-stack platform leveraging advanced NLP models for content generation, featuring customizable templates and user authentication, showcasing scalable web app development.",
      image: "https://placehold.co/800x500/1a1a2e/00FFFF?text=AI+Content+Gen",
      techStack: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
      liveDemo: "#",
      github: "#",
      category: "AI/ML"
    },
    {
      title: "Automated Cloud Infrastructure Manager",
      description: "Automated cloud infrastructure manager for AWS/Azure, with IaC templating, real-time dashboards, and cost optimization.",
      image: "https://placehold.co/800x500/0a0a2a/00FF00?text=Cloud+Automation",
      techStack: ["Python", "AWS Lambda", "Azure Functions", "Terraform", "React", "Grafana"],
      liveDemo: "#",
      github: "#",
      category: "DevOps/Cloud"
    },
    {
      title: "E-commerce Microservices Platform",
      description: "Built a scalable e-commerce platform using microservices architecture, including product catalog, order processing, and payment gateway integrations.",
      image: "https://placehold.co/800x500/2a1a0a/FF8C00?text=E-commerce",
      techStack: ["Spring Boot", "Kafka", "PostgreSQL", "React", "Docker"],
      liveDemo: "#",
      github: "#",
      category: "Web Development"
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a real-time chat application with WebSockets, user authentication, and group chat functionality.",
      image: "https://placehold.co/800x500/0a2a1a/00FF7F?text=Chat+App",
      techStack: ["Node.js", "Socket.IO", "Express", "React", "Redis"],
      liveDemo: "#",
      github: "#",
      category: "Web Development"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets, featuring D3.js charts, filtering options, and responsive design.",
      image: "https://placehold.co/800x500/1a0a2a/8A2BE2?text=Data+Viz",
      techStack: ["React", "D3.js", "Python", "Flask", "Pandas"],
      liveDemo: "#",
      github: "#",
      category: "Data Science"
    },
  ];

  return (
    <div className={`min-h-screen font-inter ${theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Global Styles for Scrollbar & Selection */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${theme === 'dark' ? '#1a202c' : '#f1f1f1'};
        }
        ::-webkit-scrollbar-thumb {
          background: ${theme === 'dark' ? '#0ff' : '#007bff'};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme === 'dark' ? '#00f' : '#0056b3'};
        }
        ::selection {
          background-color: ${theme === 'dark' ? '#0ff' : '#007bff'};
          color: ${theme === 'dark' ? '#000' : '#fff'};
        }
      `}</style>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'} backdrop-blur-sm shadow-lg`}>
        <div className="container mx-auto flex items-center">
          <div className="flex-grow flex justify-center space-x-6">
            {/* Added Home link */}
            <Link href="/">
              <motion.a
                className={`text-lg font-medium transition-colors duration-300 ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-blue-700'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Home
              </motion.a>
            </Link>
            <Link href="/projects">
              <motion.a
                className={`text-lg font-medium transition-colors duration-300 ${theme === 'dark' ? 'text-cyan-400 hover:text-cyan-400' : 'text-blue-700 hover:text-blue-700'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Projects
              </motion.a>
            </Link>
            <Link href="/blog">
              <motion.a
                className={`text-lg font-medium transition-colors duration-300 ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-blue-700'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Blog
              </motion.a>
            </Link>
            <Link href="/#contact">
              <motion.a
                className={`text-lg font-medium transition-colors duration-300 ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-blue-700'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Contact
              </motion.a>
            </Link>
          </div>
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SunIcon className="w-6 h-6 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoonIcon className="w-6 h-6 text-blue-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <main className="pt-20 pb-10 min-h-screen container mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 dark:from-green-300 dark:to-blue-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          All My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl p-6 shadow-xl border flex flex-col overflow-hidden
                         ${theme === 'dark' ? 'bg-gray-800 border-gray-700 backdrop-blur-sm bg-opacity-70' : 'bg-white border-gray-200 bg-opacity-80'}`}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              variants={projectCardVariants}
            >
              <div className={`absolute inset-0 z-0 opacity-20 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-900 to-blue-900' : 'bg-gradient-to-br from-blue-100 to-indigo-100'} rounded-xl`}></div>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="relative z-10 w-full h-48 object-cover rounded-lg mb-4 border border-gray-700 shadow-md"
                unoptimized
              />
              <h2 className={`relative z-10 text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-cyan-300' : 'text-blue-700'}`}>{project.title}</h2>
              <p className={`relative z-10 mb-3 text-sm flex-grow ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
              <div className="relative z-10 mb-4">
                <p className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tech Stack:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={`px-2 py-0.5 text-xs rounded-full shadow-sm
                      ${theme === 'dark' ? 'bg-gray-700 text-gray-200 border border-gray-600' : 'bg-gray-300 text-gray-800 border border-gray-400'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex space-x-3 mt-auto">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md
                    ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-8 px-4 text-center text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-700'}`}>
        <p>&copy; {new Date().getFullYear()} Sobaan Saeed. All rights reserved.</p>
        <p className="mt-2">Designed and Developed with ❤️</p>
      </footer>
    </div>
  );
}