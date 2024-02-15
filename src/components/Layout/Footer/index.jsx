import './index.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import fetchData from '../../../services/api/call.api';

function Footer() {
  const [labels, setLabels] = useState([]);
  const [contactUs, setContactUs] = useState([]);
  const [legals, setLegals] = useState([]);

  // fetch all labels with socials
  const fetchLabelsData = async () => {
    const labelsData = await fetchData('GET', 'labels/socials');
    setLabels(labelsData);
  };
  useEffect(() => {
    fetchLabelsData();
  }, []);

  return (
    <footer className="footer">
      <div className="contactus">
        <NavLink to="/contact" className="footer-icon">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="contactus-text">Nous contacter</span>
        </NavLink>
        {contactUs}
      </div>
      <div className="socials">
        {labels.map((label) => (
          <div key={label.id}>
            <p>{label.name}</p>
            <div>
              {label.socials.map((social) => (
                <div key={social.id}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="legals">
        <NavLink to="/legals" className="footer-icon">
          <span className="legals-text">Mentions légales</span>
          {legals}
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
