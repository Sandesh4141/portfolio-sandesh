import React from 'react';
import "../../public/styles/Footer.css";
import "animate.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} Sandesh Pawar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
