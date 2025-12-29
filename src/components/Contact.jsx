import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Shine Tuition Academy</h2>

        <div className="contact-details">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Mogappair, Chennai, Tamil Nadu</p>
          </div>
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <p>+91 98409 70732</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p>shineacademy@gmail.com</p>
          </div>
        </div>

        {/* Contact for two branches */}
        <div className="branch-details">
          <h3>Our Branches</h3>
          <div className="branch-cards">
            <div className="branch-card">
              <h4>Nerkundram Branch (3 Years)</h4>
              <iframe
                title="Nerkundram Branch Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.577660588682!2d80.1769053!3d13.0693276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261005e8b7e7b%3A0xca20c9b01f3f2ffe!2sShine%20Tuition%20Academy!5e0!3m2!1sen!2sin!4v1677642351444!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="branch-card">
              <h4>Mogappair (New Branch)</h4>
              <iframe
                title="Mogappair Branch Map"
                src="https://www.google.com/maps?q=Mogappair,+Chennai&output=embed"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
