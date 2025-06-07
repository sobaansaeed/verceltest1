"use client"; // Mark as client component

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from 'lucide-react';
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

// Variants for blog post card animations
const blogCardVariants = {
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
    boxShadow: '0 10px 20px rgba(255, 165, 0, 0.3), 0 0 15px rgba(255, 165, 0, 0.15)', // Orange glow
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export default function BlogPage() {
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

  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      summary: "Exploring how AI is transforming web development workflows, from code generation to automated testing and deployment.",
      date: "May 28, 2025",
      link: "#"
    },
    {
      title: "Mastering Tailwind CSS for Responsive Design",
      summary: "A comprehensive guide to building beautiful and responsive user interfaces with Tailwind CSS.",
      date: "April 15, 2025",
      link: "#"
    },
    {
      title: "Demystifying Serverless Functions with AWS Lambda",
      summary: "A deep dive into serverless architecture and how to build scalable applications using AWS Lambda.",
      date: "March 10, 2025",
      link: "#"
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

      {/* Navbar (replicated from main page for consistency) */}
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
                className={`text-lg font-medium transition-colors duration-300 ${theme === 'dark' ? 'text-cyan-400 hover:text-cyan-400' : 'text-blue-700 hover:text-blue-700'}`}
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
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 dark:from-yellow-300 dark:to-red-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          My Blog
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl p-6 shadow-xl border flex flex-col overflow-hidden
                         ${theme === 'dark' ? 'bg-gray-800 border-gray-700 backdrop-blur-sm bg-opacity-70' : 'bg-white border-gray-200 bg-opacity-80'}`}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              variants={blogCardVariants}
            >
              <div className={`absolute inset-0 z-0 opacity-20 ${theme === 'dark' ? 'bg-gradient-to-br from-orange-900 to-red-900' : 'bg-gradient-to-br from-yellow-100 to-orange-100'} rounded-xl`}></div>
              <h2 className={`relative z-10 text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-yellow-300' : 'text-orange-700'}`}>{post.title}</h2>
              <p className={`relative z-10 mb-3 text-sm flex-grow ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{post.summary}</p>
              <p className={`relative z-10 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Published: {post.date}</p>
              <Link href={post.link}>
                <motion.a
                  className="relative z-10 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm font-medium hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-md mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.a>
              </Link>
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