import React from "react";
import "../../public/styles/Home.css";
import "animate.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="animate__animated animate__bounce">
          Welcome to My Portfolio
        </h1>
        <p>Hello! I'm Sandesh, a Web Developer based in India.</p>

        <Link to="/projects " className="hero-btn">
          Explore My Work
        </Link>
      </div>
    </div>
  );
}

export default Home;
