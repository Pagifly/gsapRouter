import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <a
        className="brand"
        href="https://greensock.com/scrolltrigger"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="greensock-icon"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
          width="200"
          height="64"
        />
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/">Boxes</Link>
          </li>
          <li>
            <Link to="/scroll">ScrollTrigger</Link>
          </li>
          <li>
            <Link to="/layers">Layers Section</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
