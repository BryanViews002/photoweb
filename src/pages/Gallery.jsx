import React from "react";
import { motion } from "framer-motion"; // Import motion for animations

// Import images directly
import niyi from "../assets/images/niyi.jpg";
import niyi2 from "../assets/images/niyi2.jpg";
import bryan from "../assets/images/bryan.jpg";
import dull3 from "../assets/images/dull3.jpg";
import dull2 from "../assets/images/dull2.jpg";
import dull4 from "../assets/images/dull4.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="gallery-title"
      >
        My Photography Gallery
      </motion.h2>

      <div className="gallery-grid1">
        {/* Wrapping each image in a div with motion effects */}
        {[niyi, bryan, niyi2, dull3, dull2, dull4].map((image, index) => (
          <motion.div
            key={index}
            className="gallery-imgg-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-imgg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
