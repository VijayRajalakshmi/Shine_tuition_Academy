import './Courses.css';

function Courses() {
  return (
    <section className="courses">
      <div className="courses-container">
        <h2>Courses We Offer</h2>
        <p className="subtitle">Online & Offline Classes for All Levels</p>
        <div className="course-list">
          <div className="course-card">
            <h3>Primary Classes</h3>
            <p>Personal attention for young learners. Covers all basic subjects.</p>
          </div>
          <div className="course-card">
            <h3>Middle School</h3>
            <p>Strengthen core concepts in Math, Science, English, and more.</p>
          </div>
          <div className="course-card">
            <h3>High School</h3>
            <p>Exam-focused coaching with concept clarity and doubt solving.</p>
          </div>
          <div className="course-card">
            <h3>Board Exam Prep</h3>
            <p>Special coaching for 10th & 12th boards (CBSE/State syllabus).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
