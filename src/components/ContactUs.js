import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className="contactus-container" id="contact">
      <h2>Contact Us</h2>
      <div className="contactus-details">
        <div>
          <strong>Phone:</strong> <a href="tel:8652463737">09371110000</a>
        </div>
        <div>
          <strong>WhatsApp:</strong> <a href="https://wa.me/918652463737" target="_blank" rel="noopener noreferrer">Send a message</a>
        </div>
        <div>
          <strong>Address:</strong>  Hi Tech Infrastructure, behind Batuk Bhai Jewelers, Khare Town, Dharampeth, Nagpur, Maharashtra 440010




        </div>
        <div>
          <strong>Year of Establishment:</strong> 2008

        </div>
      </div>
      <form className="contactus-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}