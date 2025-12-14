// src/App.js
import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom"; // Import Router tools
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X, Facebook, Twitter, Instagram, Linkedin, Apple, Play } from "lucide-react";

// --- IMPORT PAGES ---
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"; // <--- 1. IMPORT ADDED

// --- ASSET IMPORTS ---
import logo from "./assets/logo.png"; 

function App() {
  const [isProductOpen, setProductOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get current route

  const toggleProducts = () => {
    setProductOpen(!isProductOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setProductOpen(false);
  };

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      
      {/* --- SHARED NAVBAR --- */}
      <nav className="navbar">
        <div className="logo-area">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Solo Equations" className="logo-img" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="nav-center">
          <Link to="/" className="nav-link">Home</Link>
          
          <div style={{position: 'relative'}}>
            <button className={`nav-link ${isProductOpen ? 'active' : ''}`} onClick={toggleProducts}>
              Products <ChevronDown size={16} style={{transform: isProductOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s'}}/>
            </button>
            <AnimatePresence>
              {isProductOpen && (
                <motion.div className="dropdown-menu" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}>
                  <Link to="/" className="dropdown-item" onClick={() => setProductOpen(false)}>Solo for Residents</Link>
                  <Link to="/" className="dropdown-item" onClick={() => setProductOpen(false)}>Solo for Managers</Link>
                  <Link to="/" className="dropdown-item" onClick={() => setProductOpen(false)}>Solo for Security</Link>
                  <Link to="/" className="dropdown-item" onClick={() => setProductOpen(false)}>Marketplace</Link>
                  <Link to="/" className="dropdown-item" onClick={() => setProductOpen(false)}>Smart Meters</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </div>

        <div className="nav-actions">
          <button className="nav-link"><Globe size={18} /> EN</button>
          <Link to="/contact">
            <button className="btn-primary" style={{padding: '10px 24px', fontSize: '14px', color: '#0d6efd'}}>Get Started</button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-menu" 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: "auto", opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
            >
              
              {/* Mobile Products Dropdown */}
              <button 
                className="mobile-link" 
                onClick={toggleProducts} 
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}
              >
                Products 
                <ChevronDown size={18} style={{transform: isProductOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s'}}/>
              </button>

              <AnimatePresence>
                {isProductOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{overflow: 'hidden', display: 'flex', flexDirection: 'column'}}
                  >
                    <Link to="/" className="mobile-sub-link" onClick={closeMenu}>Solo for Residents</Link>
                    <Link to="/" className="mobile-sub-link" onClick={closeMenu}>Solo for Managers</Link>
                    <Link to="/" className="mobile-sub-link" onClick={closeMenu}>Solo for Security</Link>
                    <Link to="/" className="mobile-sub-link" onClick={closeMenu}>Marketplace</Link>
                    <Link to="/" className="mobile-sub-link" onClick={closeMenu}>Smart Meters</Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Other Mobile Links */}
              <Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link>
              <Link to="/" className="mobile-link" onClick={closeMenu}>Blog</Link>
              <Link to="/about" className="mobile-link" onClick={closeMenu}>About Us</Link>
              <Link to="/contact" className="mobile-link" onClick={closeMenu}>Contact Us</Link>
              
              <Link to="/contact" onClick={closeMenu} style={{width: '100%'}}>
                <button className="btn-primary" style={{marginTop: '20px', width: '100%'}}>Get Started</button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- ROUTING CONTENT --- */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> {/* <--- 2. ROUTE ADDED */}
        </Routes>
      </main>

      {/* --- SHARED FOOTER --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="logo-area-footer">
              <Link to="/" onClick={() => window.scrollTo(0,0)}>
                <img src={logo} alt="Solo Equations" className="logo-img" style={{filter: 'brightness(0) invert(1)'}} />
              </Link>
              <span>Simplifying Living Experiences</span>
            </div>
            <div className="newsletter-box">
              <p>Subscribe to our newsletter</p>
              <div className="input-group">
                <input type="email" placeholder="What's your email?" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Download our app</h4>
              <div className="app-buttons">
                <button className="app-btn">
                  <Apple size={24} fill="white" />
                  <div className="app-btn-text"><span>Download on the</span><strong>App Store</strong></div>
                </button>
                <button className="app-btn">
                  <Play size={24} fill="white" />
                  <div className="app-btn-text"><span>GET IT ON</span><strong>Google Play</strong></div>
                </button>
              </div>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/about">FAQs</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/about">Referral Program</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/about">Terms of Service</Link>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <Link to="/">Solo for Residents</Link>
              <Link to="/">Solo for Facility Managers</Link>
              <Link to="/">Solo for Security</Link>
              <Link to="/">Solo for Marketplace</Link>
              <Link to="/">Smart Meters</Link>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#"><Facebook size={20} /></a>
                <a href="#"><Twitter size={20} /></a>
                <a href="#"><Instagram size={20} /></a>
                <a href="#"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Solo Equations. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;