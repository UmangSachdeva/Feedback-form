import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuVariants = {
    hidden: { height: 0, opacity: 0 }, // Collapsed (hidden)
    visible: { height: "auto", opacity: 1 }, // Expanded (visible)
    exit: { height: 0, opacity: 0 }, // Collapsed (exit)
  };

  return (
    <nav
      className={`${
        isSticky ? "bg-39d15ba text-gray-900" : "transparent text-white"
      } shadow-sm sticky top-0 transition-colors`}
    >
      <div className="container relative px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare
              className={`h-6 w-6 ${
                isSticky ? "text-1fb4c06" : "text-1fb4c06"
              }`}
            />
            <span className="text-xl font-semibold">FeedbackHub</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden space-x-4 md:flex">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-1fb4c06 hover:bg-gray-100"
            >
              Submit Feedback
            </Link>
            <Link
              to="/dashboard"
              className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-1fb4c06 hover:bg-gray-100"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              title="toggle button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:text-1fb4c06 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className={`z-50 absolute left-0 flex flex-col w-full px-4 py-2 space-y-2 ${
                isSticky ? "bg-39d15ba text-gray-900" : "bg-747254e text-white"
              } shadow-md top-full md:hidden`}
            >
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-1fb4c06 hover:bg-gray-200"
              >
                Submit Feedback
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-1fb4c06 hover:bg-gray-200"
              >
                Dashboard
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
