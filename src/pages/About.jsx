import React from "react";

// Import the image
import dull1 from "../assets/images/dull1.jpg";

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="bio">
        {/* Use the imported image */}
        <img src={dull1} alt="Profile" className="profile-img" />
        <p>
          I'm a passionate photographer who believes in capturing moments that
          tell stories. My work spans across various genres, including
          portraiture, landscape, and lifestyle photography.
        </p>
      </div>
    </div>
  );
};

export default About;
