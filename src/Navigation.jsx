import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">A-propos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projet">Projets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
