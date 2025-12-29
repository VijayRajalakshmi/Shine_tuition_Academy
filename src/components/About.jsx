import "./About.css";
import tuition1 from "../assets/tuition_1.jpg";
import tuition2 from "../assets/tuition_2.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* HEADING */}
        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        {/* IMAGES SECTION */}
        <div className="about-images">

          {/* IMAGE CARD 1 */}
          <motion.div
            className="image-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={tuition1} alt="Online Coaching" className="about-img" />
            <ul className="image-points">
              <li>✅ Online & Offline coaching actively conducted</li>
              <li>✅ Regular interactive sessions and assessments</li>
              <li>✅ Focus on conceptual clarity and real-time doubts</li>
            </ul>
          </motion.div>

          {/* IMAGE CARD 2 */}
          <motion.div
            className="image-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <img src={tuition2} alt="Experienced Tutors" className="about-img" />
            <ul className="image-points">
              <li>✅ Coaching staff with 10+ years of experience</li>
              <li>✅ Subject-wise specialists available</li>
              <li>✅ Friendly, supportive and highly skilled faculty</li>
            </ul>
          </motion.div>

        </div>

        {/* TEXT SECTION */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            With over 3 years of excellence in both online and offline coaching,
            Shine Tuition Academy helps students master core subjects with
            personal attention, innovative teaching methods, and expert guidance.
          </p>
          <p>
            Our mission is to make learning effective and enjoyable, whether
            you're at home or in our center in Chennai. Join hundreds of happy
            learners and unlock your academic potential today!
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
