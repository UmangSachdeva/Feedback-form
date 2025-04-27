import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeedbackForm from "./pages/FeedbackForm";
import Dashboard from "./pages/Dashboard";
import { FeedbackProvider } from "./context/FeedbackContext";

const pageVariants = {
  initial: { opacity: 0, x: "-50vw" }, // Slide in from the left
  animate: { opacity: 1, x: 0 }, // Centered
  exit: { opacity: 0, x: "50vw" }, // Slide out to the right
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <FeedbackForm />
            </motion.div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Dashboard />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-747254e">
          <Navbar />
          <main className="container flex-grow px-4 py-8 mx-auto">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
