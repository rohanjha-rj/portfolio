import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h3>Rohan Kumar Jha</h3>
                <p>Computer Science and Engineering Student</p>

                <div className="social-links">
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>

                <p className="copyright">&copy; {new Date().getFullYear()} Rohan Kumar Jha. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
