import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-section">
          <h3>Shine Tuition Academy</h3>
          <p>Empowering students through quality education.</p>

          <p>
            <FaMapMarkerAlt />{" "}
            13, Dayasadan St, Pallavan Nagar, Nerkundram, Chennai,
            Tamil Nadu 600107
          </p>

          <p>
            <FaPhoneAlt /> +91 98409 70732
          </p>

          <p>
            <FaEnvelope /> shineacademy@email.com
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <div><a href="/">Home</a></div>
            <div><a href="/about">About</a></div>
            <div><a href="/courses">Courses</a></div>
            <div><a href="/testimonials">Testimonials</a></div>
            <div><a href="/tutors">Tutors</a></div>
            <div><a href="/contact">Contact</a></div>
            <div><a href="/faq">FAQ</a></div>
            <div>
              <a href="/contact" className="cta-link">Get in Touch</a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <hr />

      <p className="footer-bottom">
        © 2025 Shine Tuition Academy. All rights reserved. Created by NextGen Crafter  Technologies.
      </p>
    </footer>
  );
}

export default Footer;
