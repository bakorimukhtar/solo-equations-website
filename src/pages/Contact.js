import React, { useState } from "react";
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    state: "Lagos",
    customState: "", // New field for "Other" text
    purpose: "enquiry",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setShowModal(true); // Show success modal
      
      // Optional: Reset form here
      // setFormData({ ...formData, message: "", fullName: "" }); 
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-header">
        <h1>Let's Talk</h1>
        <p>Get in touch with our team to schedule a demo or make an enquiry.</p>
      </div>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info-box">
          <h3>Get in touch</h3>
          <p className="info-desc">We'd love to hear from you. Our team is always here to chat.</p>
          
          <div className="info-item">
            <div className="icon-box"><Mail size={20} /></div> 
            <span>hello@soloequations.com</span>
          </div>
          <div className="info-item">
            <div className="icon-box"><Phone size={20} /></div> 
            <span>+234 800 000 0000</span>
          </div>
          <div className="info-item">
            <div className="icon-box"><MapPin size={20} /></div> 
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Enter your full name" 
              required 
              value={formData.fullName}
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label>Organization</label>
            <input 
              type="text" 
              name="organization" 
              placeholder="Company or Estate Name" 
              value={formData.organization}
              onChange={handleChange} 
            />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                required 
                value={formData.email}
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+234..." 
                required 
                value={formData.phone}
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="form-group">
            <label>State</label>
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Conditional "Other" Input with Animation */}
          <AnimatePresence>
            {formData.state === "Other" && (
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <label>Please Specify State</label>
                <input 
                  type="text" 
                  name="customState" 
                  placeholder="Enter your state" 
                  required 
                  value={formData.customState}
                  onChange={handleChange} 
                  className="input-highlight"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="form-group radio-group">
            <label>I want to:</label>
            <div className="radio-options">
              <label className={`radio-btn ${formData.purpose === 'demo' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="purpose" 
                  value="demo" 
                  checked={formData.purpose === 'demo'} 
                  onChange={handleChange} 
                /> 
                Schedule a Demo
              </label>
              <label className={`radio-btn ${formData.purpose === 'enquiry' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="purpose" 
                  value="enquiry" 
                  checked={formData.purpose === 'enquiry'} 
                  onChange={handleChange} 
                /> 
                Make an Enquiry
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message" 
              rows="4" 
              placeholder="How can we help you?" 
              required 
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </div>

      {/* --- SUCCESS MODAL --- */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="close-modal-btn" onClick={closeModal}><X size={20}/></button>
              <div className="modal-icon">
                <CheckCircle size={48} />
              </div>
              <h2>Request Submitted!</h2>
              <p>Thank you for reaching out. A member of the Solo Equations team will get back to you shortly.</p>
              <button className="modal-action-btn" onClick={closeModal}>Got it</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Contact;