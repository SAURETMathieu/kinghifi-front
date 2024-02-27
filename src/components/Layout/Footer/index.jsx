import './index.css';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook, faSoundcloud, faBandcamp, faYoutube, faTwitter,
  faInstagram, faTiktok, faSnapchat, faWhatsapp, faDiscord, faDeezer,
} from '@fortawesome/free-brands-svg-icons';
import fetchData from '../../../services/api/call.api';

function Footer() {
  const [labels, setLabels] = useState([]);
  const [contactUs, setContactUs] = useState([]);
  const [legals, setLegals] = useState([]);

  const socialIcons = {
    Facebook: faFacebook,
    SoundCloud: faSoundcloud,
    Bandcamp: faBandcamp,
    Youtube: faYoutube,
    Twitter: faTwitter,
    Instagram: faInstagram,
    Tiktok: faTiktok,
    Snapchat: faSnapchat,
    Whatsapp: faWhatsapp,
    Discord: faDiscord,
    Deezer: faDeezer,
  };

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
          <div className="socials-card" key={label.id}>
            <p>{label.name}</p>
            <div className="socials-icon">
              {label.socials.map((social) => (
                <div key={social.id}>
                  <Link to={social.url} target="_blank" rel="noreferrer">
                    {socialIcons[social.name] && (
                    <FontAwesomeIcon
                      icon={socialIcons[social.name]}
                    />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="legals">
        <NavLink to="/legals" className="footer-icon">
          <FontAwesomeIcon icon={faScaleBalanced} />
          <span className="legals-text">Mentions légales</span>
          {legals}
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
