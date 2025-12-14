import React, { useState } from "react";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Home as HomeIcon, Users, 
  ChevronDown, ChevronUp, Linkedin, Mail, Phone, ArrowRight, 
  CheckCircle, HelpCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // --- STATE FOR FAQ ---
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- DATA: IMPACT STATS ---
  const statsData = [
    { icon: <MapPin size={32} />, number: "4 States", label: "Across Nigeria" },
    { icon: <HomeIcon size={32} />, number: "1,000+", label: "Property Units" },
    { icon: <Users size={32} />, number: "5,000+", label: "Residents" },
  ];

  // --- DATA: TEAM MEMBERS ---
  const teamMembers = [
    {
      name: "Mukhtar Abdullahi",
      role: "Chief Executive Officer",
      bio: "Visionary leader with a passion for PropTech solutions driving efficiency in African real estate.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Amina Yusuf",
      role: "Head of Operations",
      bio: "Expert in optimizing community workflows and ensuring seamless service delivery for clients.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "David Okafor",
      role: "Lead Software Engineer",
      bio: "The architect behind the Solo ecosystem, dedicated to building secure and scalable platforms.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // --- DATA: FAQs ---
  const faqs = [
    { question: "How does Solo Equations improve security?", answer: "We implement rigorous access control protocols including unique visitor codes, biometric integrations, and real-time guard monitoring to ensure maximum safety." },
    { question: "Can I pay my service charge in installments?", answer: "Yes! Solo provides flexible payment plans that allow residents to manage their cash flow while ensuring the estate remains funded." },
    { question: "Is the app available on iOS and Android?", answer: "Absolutely. The Solo app is fully optimized for both platforms and available for download on the App Store and Google Play Store." },
  ];

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* --- HEADER SECTION --- */}
      <section className="about-header-section">
        <div className="about-header-content">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
          >
            Welcome to Solo Equations
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Redefining community living through technology, innovation, and seamless management.
          </motion.p>
        </div>
        <div className="about-hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2340&auto=format&fit=crop" 
            alt="Team Meeting" 
            className="about-hero-img" 
          />
        </div>
      </section>

      {/* --- OUR STORY & VISION --- */}
      <section className="story-section">
        <div className="story-grid">
          <div className="story-text">
            <span className="section-pill">Our Story</span>
            <h2>Driven by a Need for Better Living</h2>
            <p>
              Solo Equations was born from a simple observation: managing communities in Africa is harder than it needs to be. 
              From lost payments to security lapses, the friction was real. We set out to build an operating system 
              that makes life easier for everyone involved—from the facility manager to the resident.
            </p>
          </div>
          <div className="vision-cards">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>To be the premier operating system for residential and commercial communities across Africa.</p>
            </div>
            <div className="vision-card dark">
              <h3>Our Mission</h3>
              <p>To simplify property management through automation, transparency, and world-class user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR IMPACT --- */}
      <section className="impact-section">
        <div className="impact-content">
          <h2>Our Impact</h2>
          <p className="impact-desc">
            Our solutions have transformed countless communities by improving operational efficiency, 
            drastically reducing administrative costs, and enhancing the overall living experience for thousands of residents.
          </p>
          
          <div className="impact-stats-grid">
            {statsData.map((stat, index) => (
              <motion.div 
                key={index} 
                className="impact-stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="impact-icon-circle">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEET THE TEAM --- */}
      <section className="team-section">
        <div className="team-header">
          <h2>Meet the Minds Behind Solo</h2>
          <p>A dedicated team of innovators, engineers, and problem solvers.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-box">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
                <div className="team-socials">
                  <a href="#"><Linkedin size={18} /></a>
                  <a href="#"><Mail size={18} /></a>
                  <a href="#"><Phone size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-btn-wrapper">
          <button className="btn-outline-dark">Meet Full Team</button>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Have you Got Questions?</h2>
            <p>We are always available to give responses to your questions.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaqIndex === index ? 'open' : ''}`} onClick={() => toggleFaq(index)}>
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <p>Still have more questions?</p>
            <Link to="/contact" className="faq-cta-link">
              Ask us a question <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default About;