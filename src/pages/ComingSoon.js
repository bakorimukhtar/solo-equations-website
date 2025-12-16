import React, { useEffect } from "react";
import "./ComingSoon.css";
import { motion } from "framer-motion";
import { Hammer, ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
    // <--- 2. Add this block at the top of your component
  useEffect(() => {
    document.title = "Coming Soon | Solo Equations"; 
  }, []);
  return (
    <div className="coming-soon-container">
      <motion.div 
        className="coming-soon-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="icon-wrapper">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Hammer size={64} color="#0d6efd" />
          </motion.div>
          <motion.div
            initial={{ x: -20, y: 20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ position: 'absolute', top: -10, right: -10 }}
          >
             <Rocket size={32} color="#00ff88" />
          </motion.div>
        </div>

        <h1>Under Construction</h1>
        <p>
          We are currently working hard to build this page. <br />
          Stay tuned for something amazing!
        </p>

        <Link to="/">
          <button className="back-home-btn">
            <ArrowLeft size={18} /> Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;