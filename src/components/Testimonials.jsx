import './Testimonials.css';
import { FaFemale, FaMale } from 'react-icons/fa'; // Import icons

function Testimonials() {
  const testimonials = [
    {
      name: "Priya S.",
      feedback: "Excellent coaching! My daughter improved a lot in Math and Science.",
      gender: "female", // Gender property added
    },
    {
      name: "Rahul M.",
      feedback: "Professional and friendly tutors. Highly recommend their online classes!",
      gender: "male", // Gender property added
    },
    {
      name: "Lakshmi K.",
      feedback: "Helped my son crack his 10th board exams with confidence.",
      gender: "female", // Gender property added
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">“{t.feedback}”</p>
              <h4 className="testimonial-name">
                {/* Render gender-specific icon before the name */}
                {t.gender === 'female' ? (
                  <FaFemale style={{ marginRight: '0.5rem' }} />
                ) : (
                  <FaMale style={{ marginRight: '0.5rem' }} />
                )}
                — {t.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
