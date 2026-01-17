import { useRef } from 'react';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import Footer from '../components/Footer';
import './PricingPage.css';

const plans = [
  {
    title: 'Monthly Access',
    price: '₹3,000 / month',
    features: [
      'All Courses Included',
      'Live Sessions Access',
      'Mentor Support',
      'Certificate on Completion'
    ],
    highlight: true
  },
  {
    title: 'Annual Access',
    price: '₹30,000 / year',
    features: [
      'Save ₹6,000 vs Monthly',
      'Priority Support',
      'Career Mentorship',
      'Job Placement Help'
    ],
    highlight: false
  }
];

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription anytime from your account dashboard.'
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes. On completing any course, a certificate is generated for download instantly.'
  },
  {
    question: 'Are live sessions included?',
    answer: 'Yes. Live sessions, Q&A, and webinars are part of every plan.'
  }
];

const PricingPage = () => {
  const pageRef = useRef(null);
  useGsapFadeIn(pageRef, 0.2);

  return (
    <section className="pricing-page" ref={pageRef}>
      <div className="pricing-hero">
        <h1>Unlimited Learning. One Simple Price.</h1>
        <p>Get unlimited access to mentor-led courses, community support, and career growth tools.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className={`pricing-card ${plan.highlight ? 'highlight' : ''}`} key={index}>
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feat, i) => <li key={i}>{feat}</li>)}
            </ul>
            <button className="btn">Start Now</button>
          </div>
        ))}
      </div>

      <div className="comparison-section">
        <h2>Compare Plans</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Monthly</th>
              <th>Annual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All Courses</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Live Events</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Mentor Q&A</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Career Mentorship</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Priority Support</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Job Assistance</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="testimonials">
        <h2>What Learners Say</h2>
        <div className="testimonial-card">
          <p>"SkillUp changed my career. The mentors are amazing and I landed my first job in fashion marketing!"</p>
          <span>— Priya M., Fashion Student</span>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="cta-banner">
        <h2>Ready to Start Learning?</h2>
        <p>Unlock your potential with mentor-led courses and career-focused training.</p>
        <button className="btn">Get Started</button>
      </div>
      <Footer />
    </section>
  );
};

export default PricingPage;
