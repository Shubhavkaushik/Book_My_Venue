
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    localStorage.removeItem('authToken');
    console.log(localStorage);
    navigate('/login');
  };

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
   background: 'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',
   // backgroundColor: 'rgb(14, 14, 14);',
    padding: '15px',
    position: 'fixed',
    width: '98%',
    top: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
  };

  const logoStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: 'white',
  };

  const navLinksStyle = {
    display: 'flex',
  };

  const activeStyle = {
    backgroundColor: '#555',
    color: '#fff',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Book_My_Venue</div>
      <div  style={navLinksStyle}>
        <NavLink className="a" label="Home" active={activeLink === 'home'} onClick={() => handleLinkClick('home')} />
        <NavLink className="ab" label="Profile" active={activeLink === 'profile'} onClick={() => handleLinkClick('profile')} />
        <NavLink className="abc" label="My Cart" active={activeLink === 'cart'} onClick={() => handleLinkClick('cart')} />
        <NavLink className="abcd" label="Logout" active={activeLink === 'logout'} onClick={handleclick} />
      </div>
    </nav>
  );
};

const NavLink = ({ label, active, onClick }) => {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
    margin: '0 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ...(active ? {backgroundColor: '#555', color:'#fff'} : {}),
  };

  return (
    <a style={navLinkStyle} onClick={onClick}>
      {label}
    </a>
  );
};

export default Navbar;
