// Footer.js

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <span className="footerLogo">
          <img className="footerLogoImg" src={logo} alt="Logo" />
        </span>
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="hTwo">About Us</h2>
            <p className="descriptiontext">
              Learning Word <br/> Your Passport to Academic Excellence. Dive into
              personalized learning, innovative methods, and tech-enhanced
              education. Elevate your learning experience with us.
            </p>
            <div className="footerSocial-icons">
              <Link to="#" className="footerIcon">
                <FaFacebook />
              </Link>
              <Link to="#" className="footerIcon">
                <FaTwitter />
              </Link>
              <Link to="#" className="footerIcon">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <div className="footer-links footer-section links">
            <div><h2>Quick Links</h2></div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
           <div> <h2>Our Services</h2></div>
            <ul>
              <li>
                <Link to="#">Web Design</Link>
              </li>
              <li>
                <Link to="#">Graphic Design</Link>
              </li>
              <li>
                <Link to="#">Digital Marketing</Link>
              </li>
              <li>
                <Link to="#">Data Science</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
            <div><h2>Latest News</h2></div>
            <ul>
              <li>
                <Link to="#">New Course Released</Link>
              </li>
              <li>
                <Link to="#">Upcoming Events</Link>
              </li>
              <li>
                <Link to="#">Blog Posts</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form className="footer-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Learning World, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
