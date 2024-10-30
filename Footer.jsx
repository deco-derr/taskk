import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p> Made by <NavLink to="https://www.linkedin.com/in/jaspreetkaur950/" className="owner">Jaspreet Kaur</NavLink>
    <br />&copy; 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;