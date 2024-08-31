"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Moon, Sun, Mail, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionImage = motion(Image);

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-8 md:py-10 lg:py-12 transition-colors duration-200 ease-in-out dark:bg-gray-900 bg-gray-100">
        <header className="flex justify-between items-center mb-8 sm:mb-12">
          <motion.h1
            className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            &nbsp;
          </motion.h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="rounded-full"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </header>

        <main className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-4 lg:gap-8">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 dark:text-purple-400 text-purple-600">
              Hey Hey.
              <br />I am Sachit Malhotra.
            </h2>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 dark:text-white text-gray-800">
              I&apos;m a{" "}
              <span className="dark:text-purple-400 text-purple-600 font-semibold">
                Senior Software Developer
              </span>{" "}
              at{" "}
              <Link
                href="https://findex.com.au"
                target="_blank"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-200"
              >
                Findex
              </Link>
              .
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Passionate about building products that make a difference.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Love to build products that solve real world problems.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Build experiences that are delightful and memorable.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Love cultivating high performing teams and cultures.
              </li>
            </ul>
            <div className="mb-6 sm:mb-8">
              <p className="mb-3 sm:mb-4 dark:text-white text-gray-800 font-semibold">
                Reach me via:
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Mail,
                    href: "mailto:sachitsac@gmail.com",
                    label: "Email",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/sachittechB",
                    label: "X",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/sachitsac",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sachit-malhotra-64260ab/",
                    label: "LinkedIn",
                  },
                ].map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.href}
                    aria-label={platform.label}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                  >
                    <platform.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MotionImage
              src="/sachit.jpeg"
              alt="Your Name"
              width={600}
              height={600}
              className="profilePic rounded-full shadow-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-cover bg-inherit mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </main>
        <footer className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <p>Sachit Malhotra © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
