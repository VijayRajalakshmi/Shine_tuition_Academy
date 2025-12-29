import './Tutors.css';
import { FaFemale, FaMale } from 'react-icons/fa'; // Importing gender-specific icons

const tutorsList = [
  {
    name: "Mrs. Radhika",
    subject: "Mathematics",
    experience: "10+ Years",
    image: "/src/assets/Teacher_1.jpg",  // Image path for female teacher 1
    gender: "female",  // Added gender property
  },
  {
    name: "Mr. Aravind",
    subject: "Science",
    experience: "8+ Years",
    image: "/src/assets/Teacher_4.jpg",  // Image path for male teacher 1
    gender: "male",  // Added gender property
  },
  {
    name: "Ms. Keerthi",
    subject: "English",
    experience: "7+ Years",
    image: "/src/assets/Teacher_2.jpg",  // Image path for female teacher 2
    gender: "female",  // Added gender property
  },
  {
    name: "Mrs.Leela",
    subject: "History",
    experience: "6+ Years",
    image: "/src/assets/Teacher_3.jpg",  // Image path for male teacher 2
    gender: "female",  // Added gender property
  },
];

function Tutors() {
  return (
    <section className="tutors">
      <div className="tutors-container">
        <h2>Meet Our Expert Tutors</h2>
        <div className="tutor-cards">
          {tutorsList.map((tutor, index) => (
            <div key={index} className="tutor-card">
              <img src={tutor.image} alt={tutor.name} className="tutor-img" />
              <h3 className="tutor-name">
                {/* Render gender-specific icon before the name */}
                {tutor.gender === 'female' ? (
                  <FaFemale style={{ marginRight: '0.5rem' }} />
                ) : (
                  <FaMale style={{ marginRight: '0.5rem' }} />
                )}
                {tutor.name}
              </h3>
              <p>{tutor.subject}</p>
              <span>{tutor.experience} Experience</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tutors;
