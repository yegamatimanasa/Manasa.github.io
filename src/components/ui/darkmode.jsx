"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(null); // ✅ Set to null initially

    // ✅ Ensure the correct theme is set after hydration
    useEffect(() => {
      const savedMode = localStorage.getItem("theme");
      if (savedMode === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }, []);
  
    // ✅ Prevent hydration error by rendering nothing until useEffect runs
    if (darkMode === null) return null;
  
    const toggleDarkMode = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
  
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
  return (
    <button
    onClick={toggleDarkMode}
      className="p-2 rounded-full bg-black-150 dark:bg-black-800 shadow-lg transition"
    >
      <motion.div
        animate={{ rotate: 360 }} // Infinite rotation effect
        transition={{ 
          repeat: Infinity, // Makes it rotate endlessly
          duration: 2, // Controls the speed (2 seconds per full rotation)
          ease: "linear" // Keeps the speed constant
        }}
        className="text-2xl"
      >
      
      {darkMode ? "🌙" : "🔆"}
    
      </motion.div>
    </button>
  );
}
