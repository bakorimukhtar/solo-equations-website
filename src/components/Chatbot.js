import React, { useState } from "react";
import "./Chatbot.css";
import { MessageCircle, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // REPLACE THIS WITH YOUR ACTUAL WHATSAPP NUMBER
  const supportNumber = "2347026842722"; 

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${supportNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, "_blank");
    
    // Optional: Clear message or close chat
    setMessage("");
  };

  return (
    <div className="chatbot-container">
      
      {/* --- Chat Window --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="status-dot"></div>
                <div>
                  <h4>Solo Support</h4>
                  <span>Online</span>
                </div>
              </div>
              <button onClick={toggleChat} className="close-chat-btn">
                <X size={20} />
              </button>
            </div>

            <div className="chat-body">
              <div className="system-message">
                <div className="avatar-circle">
                  <User size={16} />
                </div>
                <div className="msg-bubble">
                  Hi there! 👋 <br/> How can we help you optimize your community today?
                </div>
              </div>
            </div>

            <form className="chat-footer" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="send-btn">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Floating Button --- */}
      <motion.button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

    </div>
  );
};

export default Chatbot;