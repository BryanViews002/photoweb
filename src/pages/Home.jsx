import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { Link } from "react-router-dom"; // For navigation

import dull1 from "../assets/images/dull1.jpg"; // Example image
import dull5 from "../assets/images/dull5.jpg"; // Example image
import { Helmet } from "react-helmet"; // Import Helmet
const Home = () => {

    
  return (
    <div className="home">
      <Helmet>
        <title>My Photography Portfolio</title>
        <meta
          name="description"
          content="Welcome to my photography portfolio showcasing my best works."
        />
        <meta
          name="keywords"
          content="photography, portfolio, portraits, events"
        />
        <meta property="og:title" content="My Photography Portfolio" />
        <meta
          property="og:description"
          content="Explore my photography work through this online portfolio."
        />
        <meta property="og:image" content="path_to_image.jpg" />
        <meta property="og:url" content="https://myphotographyportfolio.com" />
        <meta name="twitter:title" content="My Photography Portfolio" />
        <meta
          name="twitter:description"
          content="Explore my photography work through this online portfolio."
        />
        <meta name="twitter:image" content="path_to_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section (Centered text) */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Photography Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Capturing moments, telling stories.
        </motion.p>

        <Link to="/gallery">
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.1 }} // Adding hover effect
          >
            Explore Gallery
          </motion.button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Services
          </motion.h2>
          <div className="services-list">
            <motion.div
              className="service-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05 }} // Adding hover effect
            >
              <h3>Portrait Photography</h3>
              <p>
                Capturing the essence of individuals and their stories through
                portraits.
              </p>
            </motion.div>
            <motion.div
              className="service-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>Event Photography</h3>
              <p>
                Immortalizing your special moments at weddings, parties, and
                other events.
              </p>
            </motion.div>
            <motion.div
              className="service-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>Product Photography</h3>
              <p>
                Showcasing your products with clear, detailed, and high-quality
                images.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-preview">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Featured Work
        </motion.h2>
        <div className="gallery-grid">
          <motion.img
            src={dull1}
            alt="Gallery Image 1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05 }} // Adding hover effect to images
          />
          <motion.img
            src={dull5}
            alt="Gallery Image 2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>

      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }} // Bouncing animation
          transition={{ duration: 1, repeat: Infinity }}
        >
          ⬇️
        </motion.div>
      </div>

      <section className="about-footer">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Bringing Your Vision to Life Through Photography
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          With years of experience in portrait, event, and product photography,
          I strive to capture moments that last a lifetime. My work is not just
          about taking pictures; it's about telling your unique story through
          the lens.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to="/contact">
            <motion.button className="cta-button">Get in Touch</motion.button>
          </Link>
        </motion.div>
      </section>

      <footer className="footer">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © 2024 My Photography Portfolio. All Rights Reserved.
        </motion.p>
        <div className="social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          {/* Add other social links */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
