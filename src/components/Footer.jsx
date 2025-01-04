import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.facebook.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-xl hover:text-blue-500"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-xl hover:text-blue-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-xl hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-xl hover:text-blue-700"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mb-4">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </div>

      {/* Additional Links */}
      <div className="flex justify-center space-x-6">
        <a href="/terms-of-service" className="hover:underline">
          Terms of Service
        </a>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#contact" className="hover:underline">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
