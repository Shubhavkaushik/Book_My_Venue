// Footer.js

import React from 'react';

const footerStyle = {
    background: 'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

const iconStyle = {
  margin: '0 10px',
  color: '#fff',
  fontSize: '24px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <p style={{color:"white"}}>&copy;Book_My_Venue</p>
        <div style={socialIconsStyle}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
