import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Download, X } from 'lucide-react';
import './Certificates.css';
import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/certificate2.png';

const certificates = [
  {
    id: 1,
    course: 'Digital Marketing for Beginners',
    mentor: 'Karan Singh',
    date: '2025-04-30',
    image: cert1
  },
  {
    id: 2,
    course: 'Fashion Portfolio Builder',
    mentor: 'Aarushi Mehta',
    date: '2025-03-18',
    image: cert2
  }
];

const Certificates = () => {
  const [modalCert, setModalCert] = useState(null);

  return (
    <motion.section
      className="certificates-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="page-heading-home">
        <Award size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Certificates
      </h1>
      <p>You can download your earned certificates below.</p>

      <div className="certificate-list">
        {certificates.map(cert => (
          <div className="certificate-card" key={cert.id}>
            <h2>{cert.course}</h2>
            <p><strong>Mentor:</strong> {cert.mentor}</p>
            <p><strong>Completed on:</strong> {cert.date}</p>
            <button className="btn download-btn" onClick={() => setModalCert(cert)}>
              <Download size={16} style={{ marginRight: '0.4rem' }} />
              View & Download
            </button>
          </div>
        ))}
      </div>

      {modalCert && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setModalCert(null)}>
              <X size={20} />
            </button>
            <img src={modalCert.image} alt={modalCert.course} />
            <a
              href={modalCert.image}
              download={`${modalCert.course.replace(/\s+/g, '_')}.png`}
              className="btn modal-download"
            >
              <Download size={16} />
              Download Certificate
            </a>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Certificates;
