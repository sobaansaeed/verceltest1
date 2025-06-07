"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

// Main App Component
export default function App() {
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  // Effect to load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('dark'); // Ensure dark mode is applied by default
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme); // Remove old theme class
    document.documentElement.classList.add(newTheme); // Add new theme class
  };

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

  // Variants for text animations in Hero
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Variants for featured project card animations
  const featuredCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      boxShadow: '0 15px 30px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)', // More pronounced neon glow
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Project data (only featured projects for homepage)
  const projects = [
    {
      title: "AI-Powered Content Generation Platform",
      description: "Developed a full-stack platform leveraging advanced NLP models (GPT-3/4) to generate high-quality articles, marketing copy, and social media content. Features include customizable templates, user authentication, and a credit-based system. This project demonstrates expertise in integrating large language models and building scalable web applications.",
      shortDescription: "A full-stack platform using advanced NLP for content generation, featuring customizable templates and user authentication, showcasing scalable web app development.",
      image: "https://placehold.co/800x500/1a1a2e/00FFFF?text=AI+Content+Gen", // Futuristic blue
      techStack: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
      role: "Lead Full-Stack Developer",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Automated Cloud Infrastructure Manager",
      description: "Engineered a robust system for automating cloud resource provisioning, monitoring, and scaling across AWS and Azure. Features include infrastructure-as-code (IaC) templating, real-time performance dashboards, and cost optimization insights. This project streamlines DevOps workflows and ensures high availability.",
      shortDescription: "Automated cloud infrastructure manager for AWS/Azure, with IaC templating, real-time dashboards, and cost optimization.",
      image: "https://placehold.co/800x500/0a0a2a/00FF00?text=Cloud+Automation", // Futuristic green
      techStack: ["Python", "AWS Lambda", "Azure Functions", "Terraform", "React", "Grafana"],
      role: "DevOps & Cloud Engineer",
      liveDemo: "#",
      github: "#"
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
          height: 8px; /* Added for horizontal scrollbar */
        }
        ::-webkit-scrollbar-track {
          background: ${theme === 'dark' ? '#1a202c' : '#f1f1f1'};
        }
        ::-webkit-scrollbar-thumb {
          background: ${theme === 'dark' ? '#0ff' : '#007bff'}; /* Neon blue for dark, regular blue for light */
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
          {/* Centered navigation links */}
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
                className={`text-lg font-medium transition-colors duration-300 ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-blue-700'}`}
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

          {/* Theme Toggle Button - pushed to the right by flex-grow above */}
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

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-screen overflow-hidden text-center p-4 pt-20"
      >
        {/* Futuristic background gradient/overlay */}
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div> {/* Subtle grid pattern */}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.6 }}
          >
            I&apos;m Sobaan Saeed
          </motion.h1>
          <motion.p
            className={`text-2xl md:text-4xl font-semibold mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.8 }}
          >
            Giving life to the code.
          </motion.p>
          <motion.p
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.0 }}
          >
            I craft cutting-edge web experiences from concept to deployment, ensuring robust functionality and intuitive design.
          </motion.p>
          <motion.div
            className={`flex flex-wrap justify-center gap-4 text-sm md:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.2 }}
          >
            {/* Added motion.span for individual animations */}
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Python', 'SQL'].map((tech, index) => (
              <motion.span
                key={index}
                className={`px-3 py-1 rounded-full shadow-inner cursor-pointer ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 text-gray-200' : 'bg-gray-200 border border-gray-300 text-gray-800'}`}
                whileHover={{ scale: 1.1, backgroundColor: theme === 'dark' ? '#00FFFF' : '#007bff', color: theme === 'dark' ? '#000' : '#fff' }} // Neon glow/blue on hover
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section (now featuring premium projects) */}
      <section id="projects" className="py-20 px-4 container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 dark:from-green-300 dark:to-blue-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          My Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl p-8 shadow-2xl border flex flex-col overflow-hidden
                         ${theme === 'dark' ? 'bg-gray-800 border-gray-700 backdrop-blur-sm bg-opacity-70' : 'bg-white border-gray-200 bg-opacity-80'}`}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={featuredCardVariants}
            >
              {/* Background gradient for premium look */}
              <div className={`absolute inset-0 z-0 opacity-20 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-900 to-blue-900' : 'bg-gradient-to-br from-blue-100 to-indigo-100'} rounded-xl`}></div>

              {/* Changed img to Image from next/image */}
              <Image
                src={project.image}
                alt={project.title}
                width={800} // Added width prop
                height={256} // Added height prop (h-64 is 256px)
                className="relative z-10 w-full h-64 object-cover rounded-lg mb-6 border border-gray-700 shadow-lg"
                unoptimized // Required for static export with external images
              />
              <h3 className={`relative z-10 text-3xl font-semibold mb-3 ${theme === 'dark' ? 'text-cyan-300' : 'text-blue-700'}`}>{project.title}</h3>
              <p className={`relative z-10 mb-4 flex-grow ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{project.shortDescription}</p>
              <div className="relative z-10 mb-4">
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tech Stack:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 text-xs rounded-full shadow-md
                      ${theme === 'dark' ? 'bg-gray-700 text-gray-200 border border-gray-600' : 'bg-gray-300 text-gray-800 border border-gray-400'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex space-x-4 mt-auto">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 rounded-lg font-medium shadow-md flex items-center
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
      </section>

      {/* Blog Section (now a separate page) */}
      <section id="blog" className="py-20 px-4 container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 dark:from-yellow-300 dark:to-red-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Blog & Insights (See full Blog page)
        </motion.h2>
        <motion.div
          className={`rounded-xl p-8 shadow-xl border max-w-3xl mx-auto text-center ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <p className={`text-xl mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Explore my thoughts on full-stack development, AI, automation, and tech trends on the dedicated Blog page.
          </p>
          <Link href="/blog">
            <motion.a
              className="mt-4 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-medium hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Blog Page
            </motion.a>
          </Link>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:from-purple-300 dark:to-pink-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className={`rounded-xl p-8 shadow-xl border max-w-2xl mx-auto text-center ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <p className={`text-xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          <div className="mb-8">
            <motion.a
              href="mailto:me@sobaansaeed.com"
              className={`inline-flex items-center text-2xl font-medium transition-colors duration-300 ${theme === 'dark' ? 'text-cyan-400 hover:text-cyan-500' : 'text-blue-700 hover:text-blue-800'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MailIcon className="w-8 h-8 mr-3" />
              me@sobaansaeed.com
            </motion.a>
          </div>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/sobaansaeed/" // Updated GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className="w-10 h-10" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sobaansaeed/" // Updated LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-700'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinIcon className="w-10 h-10" />
            </motion.a>
            <motion.a
              href="https://x.com/sobaanx" // Updated Twitter/X link
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon className="w-10 h-10" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 text-center text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-700'}`}>
        <p>&copy; {new Date().getFullYear()} Sobaan Saeed. All rights reserved.</p>
        <p className="mt-2">Designed and Developed with ❤️</p>
      </footer>

      {/* Tailwind CSS Custom Styles (for animations and patterns) */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Custom scrollbar for horizontal projects section */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: ${theme === 'dark' ? '#0ff' : '#007bff'} ${theme === 'dark' ? '#1a202c' : '#f1f1f1'};
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: ${theme === 'dark' ? '#1a202c' : '#f1f1f1'};
          border-radius: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: ${theme === 'dark' ? '#0ff' : '#007bff'};
          border-radius: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: ${theme === 'dark' ? '#00f' : '#0056b3'};
        }


        /* Subtle grid pattern for background */
        .bg-grid-pattern {
          background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
        }

        /* Keyframe animation for background gradient shift */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  );
}