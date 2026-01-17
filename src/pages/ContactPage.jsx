import { useRef, useState } from 'react';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import { Mail, Phone, Info } from 'lucide-react';
import ContactUs from '../assets/ContactUs.svg';

import './ContactPage.css';

const ContactPage = () => {
  const contactRef = useRef(null);
  useGsapFadeIn(contactRef, 0.5);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-page" ref={contactRef}>
      <div className="pricing-hero">
        <h1 className="heading">Let’s Talk!</h1>
        <p className="intro">
          We're here to help you grow. Reach out for support, feedback, or just
          say hello!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <img src={ContactUs} alt="Contact Illustration" />
          <div className="contact-details">
            <p>
              <Mail size={18} /> support@skillup.com
            </p>
            <p>
              <Phone size={18} /> +1 234 567 890
            </p>
            <p>
              <Info size={18} /> Need help?{' '}
              <a href="#">Visit our Help Center</a>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
          {submitted && (
            <p className="success-msg">
              Thank you! We'll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
