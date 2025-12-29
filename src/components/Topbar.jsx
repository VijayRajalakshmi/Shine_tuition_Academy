import { FaHeadset } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-item">
        <FaHeadset className="topbar-icon" />
        <span>
          Talk With Us on WhatsApp: <a href="https://wa.me/919123456789" target="_blank" rel="noopener noreferrer">+91 98409 70732</a>
        </span>
      </div>
      <div className="topbar-item">
        <MdEmail className="topbar-icon" />
        <span>
          Mail Us: <a href="mailto:shineacademy@gmail.com">shineacademy@gmail.com</a>
        </span>
      </div>
    </div>
  );
}

export default Topbar;
