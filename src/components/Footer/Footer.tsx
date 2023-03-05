import React from "react";
import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <footer className="center-div">
      <div className="footer-content p-4">
        <p className="pt-2">
          Made with{" "}
          <span className="footer-icon">
            <i className="fas fa-heart"></i>
          </span>{" "}
          by Developers in Bangalore !
        </p>
        
      </div>
    </footer>
  );
}

export default Footer;
