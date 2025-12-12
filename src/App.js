import React, { useState, useEffect } from "react";
import "./App.css";
// --- ASSET IMPORTS ---
import logo from "./assets/logo.png"; 

// --- SECTION IMAGES (Ensure these files exist in your assets folder) ---
import visitorImg from "./assets/Visitor Management.png"; 
import communityImg from "./assets/Community Management.png";
import utilityImg from "./assets/Smart Utility Vending.png";
import paymentImg from "./assets/Simplified Payments.png";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Globe, Menu, X, PlayCircle, 
  Users, Building2, ShieldCheck, Store, Zap,
  MapPin, Home, ArrowRight, Sparkles, 
  QrCode, CreditCard // Specific icons
} from "lucide-react";

function App() {
  // Toggle States
  const [isProductOpen, setProductOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Rotating Text State
  const [textIndex, setTextIndex] = useState(0);
  
  const rotatingWords = [
    "Apartment Blocks", 
    "Office Buildings", 
    "Residential Community", 
    "Gated Street", 
    "Neighborhood", 
    "Commercial Center", 
    "Shopping Complex", 
    "Gated Community"
  ];

  // Hero & Solution Images
  const heroImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80";
  const solutionImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80";

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleProducts = () => {
    setProductOpen(!isProductOpen);
  };

  // Data for the Stats Section
  const statsData = [
    { icon: <MapPin size={32} />, number: "4 States", label: "Across Nigeria" },
    { icon: <Home size={32} />, number: "1,000+", label: "Property Units" },
    { icon: <Users size={32} />, number: "5,000+", label: "Residents" },
  ];

  // Animation variants
  const statsContainerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const statItemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const featureImageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } }
  };

  const featureTextVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="App">
      
      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="logo-area">
          <img src={logo} alt="Solo Equations" className="logo-img" />
        </div>

        <div className="nav-center">
          <div style={{position: 'relative'}}>
            <button 
              className={`nav-link ${isProductOpen ? 'active' : ''}`}
              onClick={toggleProducts}
            >
              Products <ChevronDown size={16} style={{transform: isProductOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s'}} />
            </button>
            
            <AnimatePresence>
              {isProductOpen && (
                <motion.div 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                >
                  <a href="#residents" className="dropdown-item"><Users size={18}/> Solo for Residents</a>
                  <a href="#managers" className="dropdown-item"><Building2 size={18}/> Solo for Managers</a>
                  <a href="#security" className="dropdown-item"><ShieldCheck size={18}/> Solo for Security</a>
                  <a href="#marketplace" className="dropdown-item"><Store size={18}/> Solo Marketplace</a>
                  <a href="#meters" className="dropdown-item"><Zap size={18}/> Smart Meters</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          <a href="#about" className="nav-link">About Us</a>
        </div>

        <div className="nav-actions">
          <button className="nav-link"><Globe size={18} /> EN</button>
          <button className="btn-primary" style={{padding: '10px 24px', fontSize: '14px', color: '#0d6efd'}}>Get Started</button>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <button 
                className="mobile-link" 
                onClick={toggleProducts}
                style={{display: 'flex', justifyContent: 'space-between'}}
              >
                Products <ChevronDown size={18} style={{transform: isProductOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
              </button>
              
              <AnimatePresence>
                {isProductOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{overflow: 'hidden'}}
                  >
                    <a href="#residents" className="mobile-sub-link">Solo for Residents</a>
                    <a href="#managers" className="mobile-sub-link">Solo for Managers</a>
                    <a href="#security" className="mobile-sub-link">Solo for Security</a>
                    <a href="#marketplace" className="mobile-sub-link">Marketplace</a>
                    <a href="#meters" className="mobile-sub-link">Smart Meters</a>
                  </motion.div>
                )}
              </AnimatePresence>

              <a href="#blog" className="mobile-link">Blog</a>
              <a href="#contact" className="mobile-link">Contact Us</a>
              <a href="#about" className="mobile-link">About Us</a>
              <button className="btn-primary" style={{marginTop: '15px'}}>Get Started</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="background-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
        </div>

        <div className="hero-grid">
          
          <motion.div 
            className="hero-text-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-pre-title">Manage your</div>
            
            <div className="anim-container">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={textIndex}
                  className="gradient-text"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                >
                  {rotatingWords[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="hero-subtitle">Easily and Efficiently</div>

            <motion.p 
              className="hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              We simplify living experiences across Africa with our all-in-one community management solution.
              Stop relying on spreadsheets and start automating today.
            </motion.p>

            <div className="btn-group">
              <button className="btn-primary">Get Started</button>
              <button className="btn-demo">
                <PlayCircle size={20} /> Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="image-card-wrapper">
              <img src={heroImage} alt="Dashboard" className="hero-img-right" />
              <div className="floating-badge">
                <ShieldCheck size={20} color="#00ff88"/> 
                <span>100% Secure</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="stats-section">
        <motion.div 
          className="stats-grid"
          variants={statsContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statsData.map((stat, index) => (
            <motion.div key={index} className="stat-item" variants={statItemVariant}>
              <div className="stat-icon-circle">
                {stat.icon}
              </div>
              <div className="stat-info">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- All-in-One Solution Section --- */}
      <section className="solution-section">
        <div className="solution-container">
          <motion.div 
            className="solution-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>All-in-one Community Management Solution</h2>
            <p>
              Solo Equations is an all-in-one community management solution for multi-unit 
              residential and commercial communities. We provide best-in-class software for 
              property managers, owners, and tenants in all types of communities.
            </p>
            <button className="btn-dark">
              Get Started <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div 
            className="solution-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="image-frame">
               <img src={solutionImage} alt="Community Management" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Features Intro Section --- */}
      <section className="features-intro">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="features-content"
        >
          <div className="feature-badge">
             <Sparkles size={16} /> Discover our key features
          </div>
          <h2>Simplifying Living Experiences Across Africa</h2>
          <p>
            We elevate residential community management with our software! 
            Simplifying operations and enhancing access to communal services 
            for owners and occupants.
          </p>
        </motion.div>
      </section>

      {/* -------------------------------------------------- */}
      {/* --- SECTION 1: VISITOR MANAGEMENT (Image Left) --- */}
      {/* -------------------------------------------------- */}
      <section id="visitor" className="feature-section layout-image-left">
        <motion.div
            className="feature-image-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureImageVariant}
        >
            {/* Using brand blue circle */}
            <div className="feature-icon-circle-large"><QrCode size={40} /></div>
            <img src={visitorImg} alt="Visitor Management" className="feature-img" />
        </motion.div>
        
        <motion.div
            className="feature-text-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureTextVariant}
        >
            <div className="feature-number">01.</div>
            <h3>Visitor Management</h3>
            <p>
                Solo's system uses secure codes and virtual IDs from their apps for 
                visitor management, along with integration for popular access control devices.
            </p>
            <button className="btn-learn-more">
              Learn More <ArrowRight size={16} />
            </button>
        </motion.div>
      </section>

      {/* -------------------------------------------------- */}
      {/* --- SECTION 2: COMMUNITY MANAGEMENT (Text Left) --- */}
      {/* -------------------------------------------------- */}
      <section id="community" className="feature-section layout-text-left subtle-bg">
        <motion.div
            className="feature-text-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
        >
            <div className="feature-number">02.</div>
            <h3>Community Management</h3>
            <p>
                Integrated property database, issue reporting and management, amenities booking, 
                financial reports as well as messaging and bulk communication tools are just 
                a few of the tools Solo provides to Facilities Managers and Residents’ Associations.
            </p>
            <button className="btn-learn-more">
              Learn More <ArrowRight size={16} />
            </button>
        </motion.div>
        
        <motion.div
            className="feature-image-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureImageVariant}
        >
            <div className="feature-icon-circle-large"><Users size={40} /></div>
            <img src={communityImg} alt="Community Management" className="feature-img" />
        </motion.div>
      </section>

      {/* -------------------------------------------------- */}
      {/* --- SECTION 3: SMART UTILITY VENDING (Image Left) --- */}
      {/* -------------------------------------------------- */}
      <section id="utility" className="feature-section layout-image-left">
        <motion.div
            className="feature-image-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureImageVariant}
        >
            <div className="feature-icon-circle-large"><Zap size={40} /></div>
            <img src={utilityImg} alt="Smart Utility Vending" className="feature-img" />
        </motion.div>
        
        <motion.div
            className="feature-text-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureTextVariant}
        >
            <div className="feature-number">03.</div>
            <h3>Smart Utility Vending</h3>
            <p>
                Solo simplifies community management for multi-unit properties, providing 
                easy-to-use applications for property owners and occupants to access 
                communal services.
            </p>
            <button className="btn-learn-more">
              Learn More <ArrowRight size={16} />
            </button>
        </motion.div>
      </section>

      {/* -------------------------------------------------- */}
      {/* --- SECTION 4: SIMPLIFIED PAYMENTS (Text Left) --- */}
      {/* -------------------------------------------------- */}
      <section id="payments" className="feature-section layout-text-left subtle-bg">
        <motion.div
            className="feature-text-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
        >
            <div className="feature-number">04.</div>
            <h3>Simplified Payments</h3>
            <p>
                Automated billing, collections and reconciliation functionality on our apps 
                means that late or no-payment of communal dues are a thing of the past. 
                We’ve built in revenue assurance features that reduce defaults in payments.
            </p>
            <button className="btn-learn-more">
              Learn More <ArrowRight size={16} />
            </button>
        </motion.div>
        
        <motion.div
            className="feature-image-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureImageVariant}
        >
            <div className="feature-icon-circle-large"><CreditCard size={40} /></div>
            <img src={paymentImg} alt="Simplified Payments" className="feature-img" />
        </motion.div>
      </section>

    </div>
  );
}

export default App;