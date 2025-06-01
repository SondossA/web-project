// import React from "react";
// import './Footer.css';
// export default function Footer(){
//     return(
//         <div className="footer">
//   <p className="follow-text">Suivez-nous sur :</p>
//   <div className="social-icons">
//     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//       <img src="src/img/lnkdn.webp" alt="LinkedIn" className="icon" />
//     </a>
//     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//       <img src="src/img/twitter.png" alt="X/Twitter" className="icon" />
//     </a>
//     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//       <img src="src/img/instagram.png" alt="Instagram" className="icon" />
//     </a>
//     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//       <img src="src/img/fb.png" alt="Facebook" className="icon" />
//     </a>
//     <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//       <img src="src/img/ytb.png" alt="YouTube" className="icon" />
//     </a>
//   </div>
// </div>

//     );
// }

// Footer.js
import React from 'react';
import { FaHome, FaNewspaper, FaInfoCircle, FaEnvelope, FaUsers } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/"><FaHome className="footer-icon" /> Home</a>
        <a href="/news"><FaNewspaper className="footer-icon" /> News</a>
        <a href="/about"><FaInfoCircle className="footer-icon" /> About</a>
        <a href="/contact"><FaEnvelope className="footer-icon" /> Contact Us</a>
        <a href="/team"><FaUsers className="footer-icon" /> Our Team</a>
      </div>
      <div className="footer-copyright">
        Copyright ©2024 Vinci building solutions
      </div>
    </footer>
  );
};

export default Footer;