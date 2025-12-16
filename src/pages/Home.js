import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlayCircle, Users, Building2, ShieldCheck, Store, Zap,
  MapPin, Home as HomeIcon, ArrowRight, Sparkles, // FIX: Renamed 'Home' to 'HomeIcon'
  QrCode, CreditCard, ChevronLeft, ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom"; 

// --- IMAGES ---
import heroImage from "../assets/logo.png"; // Placeholder
import visitorImg from "../assets/Visitor Management.png"; 
import communityImg from "../assets/Community Management.png";
import utilityImg from "../assets/Smart Utility Vending.png";
import paymentImg from "../assets/Simplified Payments.png";

const Home = () => {
  // --- STATES ---
  const [activeTab, setActiveTab] = useState("managers");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const rotatingWords = [
    "Apartment Blocks", "Office Buildings", "Residential Community", 
    "Gated Street", "Neighborhood", "Commercial Center", 
    "Shopping Complex", "Gated Community"
  ];

  // Images URLs
  const heroImgUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80";
  const solutionImgUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80";

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // --- DATA ---
  const statsData = [
    { icon: <MapPin size={32} />, number: "4 States", label: "Across Nigeria" },
    { icon: <HomeIcon size={32} />, number: "1,000+", label: "Property Units" }, // FIX: Used HomeIcon here
    { icon: <Users size={32} />, number: "5,000+", label: "Residents" },
  ];

  const tabData = {
    managers: {
      title: "Solo for Facility Managers",
      desc: "Our all-in-one app for managing communities allows admins to configure bills and tariffs, automate collections and reconciliations, implement revenue assurance measures, communicate individually or generally with residents, track issues and generate tonnes of reports - all from your mobile phone.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop" 
    },
    residents: {
      title: "Solo for Residents",
      desc: "Pay bills easily, receive immediate value for payments, vend energy any time and from anywhere, book in visitors securely without stress, download electronic statements and utility bills; report and track issues right from the app.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop" 
    },
    security: {
      title: "Solo for Security",
      desc: "Implement high-level security without breaking the bank with our code-based access, Virtual IDs and NFC-based digital cards and car-stickers. Already have physical access devices? Not to worry, Solo integrates with all popular electronic boom-barriers and turnstiles.",
      img: "https://images.unsplash.com/photo-1555955207-b2f70497cc22?q=80&w=1740&auto=format&fit=crop" 
    }
  };

  const testimonials = [
    { quote: "The Solo software is presently deployed across all our estates. It has been a true game changer as tasks are coordinated seamlessly, making the job of managing multiple estates quite easy and straightforward.", author: "Yinka", role: "Managing Director, Beachway Homes", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { quote: "Since switching to Solo, our revenue collection has improved by 40%. The automated billing system means we no longer have to chase residents for service charges. It's simply brilliant.", author: "Ahmed Musa", role: "Chairman, Lekki Gardens Phase 2", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { quote: "Security was our biggest headache. With Solo's visitor management codes, we know exactly who is coming in and out. The residents love the convenience and the guards love the simplicity.", author: "Sarah O.", role: "Facility Manager, Victoria Crest", logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
  ];

  const featuredLogos = [
    { name: "TechCabal", url: "https://logo.clearbit.com/techcabal.com" },
    { name: "Business Day", url: "https://logo.clearbit.com/businessday.ng" },
    { name: "Disrupt Africa", url: "https://logo.clearbit.com/disrupt-africa.com" },
    { name: "Techpoint", url: "https://logo.clearbit.com/techpoint.africa" }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Animation variants
  const statsContainerVariant = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const statItemVariant = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const featureImageVariant = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } } };
  const featureTextVariant = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="background-blobs"><div className="blob blob-1"></div><div className="blob blob-2"></div></div>
        <div className="hero-grid">
          <motion.div className="hero-text-col" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-pre-title">Manage your</div>
            <div className="anim-container"><AnimatePresence mode="wait"><motion.span key={textIndex} className="gradient-text" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} transition={{ duration: 0.5, ease: "circOut" }}>{rotatingWords[textIndex]}</motion.span></AnimatePresence></div>
            <div className="hero-subtitle">Easily and Efficiently</div>
            <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>We simplify living experiences across Africa with our all-in-one community management solution. Stop relying on spreadsheets and start automating today.</motion.p>
            <div className="btn-group">
                <Link to="/contact"><button className="btn-primary">Get Started</button></Link>
                <button className="btn-demo"><PlayCircle size={20} /> Watch Demo</button>
            </div>
          </motion.div>
          <motion.div className="hero-image-col" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <div className="image-card-wrapper"><img src={heroImgUrl} alt="Dashboard" className="hero-img-right" /><div className="floating-badge"><ShieldCheck size={20} color="#00ff88"/> <span>100% Secure</span></div></div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <motion.div className="stats-grid" variants={statsContainerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          {statsData.map((stat, index) => (
            <motion.div key={index} className="stat-item" variants={statItemVariant}>
              <div className="stat-icon-circle">{stat.icon}</div>
              <div className="stat-info"><h3>{stat.number}</h3><p>{stat.label}</p></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SOLUTION */}
      <section className="solution-section">
        <div className="solution-container">
          <motion.div className="solution-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2>All-in-one Community Management Solution</h2>
            <p>Solo Equations is an all-in-one community management solution for multi-unit residential and commercial communities. We provide best-in-class software for property managers, owners, and tenants in all types of communities.</p>
            <Link to="/contact"><button className="btn-dark">Get Started <ArrowRight size={18} /></button></Link>
          </motion.div>
          <motion.div className="solution-image" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="image-frame"><img src={solutionImgUrl} alt="Community Management" /></div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES INTRO */}
      <section className="features-intro">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="features-content">
          <div className="feature-badge"><Sparkles size={16} /> Discover our key features</div>
          <h2>Simplifying Living Experiences Across Africa</h2>
          <p>We elevate residential community management with our software! Simplifying operations and enhancing access to communal services for owners and occupants.</p>
        </motion.div>
      </section>

      {/* 4 CORE FEATURES */}
      <section id="visitor" className="feature-section layout-image-left">
        <motion.div className="feature-image-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={featureImageVariant}>
            <div className="feature-icon-circle-large"><QrCode size={40} /></div>
            <img src={visitorImg} alt="Visitor Management" className="feature-img" />
        </motion.div>
        <motion.div className="feature-text-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={featureTextVariant}>
            <div className="feature-number">01.</div><h3>Visitor Management</h3><p>Solo's system uses secure codes and virtual IDs from their apps for visitor management, along with integration for popular access control devices.</p><button className="btn-learn-more">Learn More <ArrowRight size={16} /></button>
        </motion.div>
      </section>

      <section id="community" className="feature-section layout-text-left subtle-bg">
        <motion.div className="feature-text-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <div className="feature-number">02.</div><h3>Community Management</h3><p>Integrated property database, issue reporting and management, amenities booking, financial reports as well as messaging and bulk communication tools are just a few of the tools Solo provides to Facilities Managers and Residents’ Associations.</p><button className="btn-learn-more">Learn More <ArrowRight size={16} /></button>
        </motion.div>
        <motion.div className="feature-image-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={featureImageVariant}>
            <div className="feature-icon-circle-large"><Users size={40} /></div>
            <img src={communityImg} alt="Community Management" className="feature-img" />
        </motion.div>
      </section>

      <section id="utility" className="feature-section layout-image-left">
        <motion.div className="feature-image-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={featureImageVariant}>
            <div className="feature-icon-circle-large"><Zap size={40} /></div>
            <img src={utilityImg} alt="Smart Utility Vending" className="feature-img" />
        </motion.div>
        <motion.div className="feature-text-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={featureTextVariant}>
            <div className="feature-number">03.</div><h3>Smart Utility Vending</h3><p>Solo simplifies community management for multi-unit properties, providing easy-to-use applications for property owners and occupants to access communal services.</p><button className="btn-learn-more">Learn More <ArrowRight size={16} /></button>
        </motion.div>
      </section>

      <section id="payments" className="feature-section layout-text-left subtle-bg">
        <motion.div className="feature-text-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <div className="feature-number">04.</div><h3>Simplified Payments</h3><p>Automated billing, collections and reconciliation functionality on our apps means that late or no-payment of communal dues are a thing of the past. We’ve built in revenue assurance features that reduce defaults in payments.</p><button className="btn-learn-more">Learn More <ArrowRight size={16} /></button>
        </motion.div>
        <motion.div className="feature-image-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={featureImageVariant}>
            <div className="feature-icon-circle-large"><CreditCard size={40} /></div>
            <img src={paymentImg} alt="Simplified Payments" className="feature-img" />
        </motion.div>
      </section>

      {/* ECOSYSTEM */}
      <section className="ecosystem-section">
        <div className="tab-nav-container">
          <div className="tab-nav">
            <button className={`tab-btn ${activeTab === 'managers' ? 'active' : ''}`} onClick={() => setActiveTab('managers')}>For FMs</button>
            <button className={`tab-btn ${activeTab === 'residents' ? 'active' : ''}`} onClick={() => setActiveTab('residents')}>For Residents</button>
            <button className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>For Security</button>
          </div>
        </div>
        <div className="tab-content-wrapper">
          <AnimatePresence mode="wait"><motion.div key={activeTab} className="tab-content-grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}><div className="tab-text"><h3>{tabData[activeTab].title}</h3><p>{tabData[activeTab].desc}</p><button className="btn-learn-more">Learn More <ArrowRight size={16} /></button></div><div className="tab-image"><img src={tabData[activeTab].img} alt={tabData[activeTab].title} /></div></motion.div></AnimatePresence>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="features-content" style={{marginBottom: '50px'}}>
          <div className="feature-badge"><Sparkles size={16} /> Customer Testimonials</div>
          <h2>Hear what our clients have to say about Solo</h2>
        </div>
        <div className="testimonial-wrapper">
          <button className="nav-btn prev" onClick={prevTestimonial}><ChevronLeft size={28} /></button>
          <div className="testimonial-card">
            <AnimatePresence mode="wait"><motion.div key={currentTestimonial} className="testimonial-content-inner" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}><div className="testimonial-text"><p>"{testimonials[currentTestimonial].quote}"</p><div className="testimonial-author"><h4>{testimonials[currentTestimonial].author}</h4><span>{testimonials[currentTestimonial].role}</span></div></div><div className="testimonial-logo-area"><img src={testimonials[currentTestimonial].logo} alt="Client Logo" /></div></motion.div></AnimatePresence>
          </div>
          <button className="nav-btn next" onClick={nextTestimonial}><ChevronRight size={28} /></button>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-section">
        <p className="featured-title">Also featured in</p>
        <div className="featured-logos">{featuredLogos.map((logo, index) => (<img key={index} src={logo.url} alt={logo.name} className="partner-logo" title={logo.name} />))}</div>
      </section>
    </div>
  );
};

export default Home;