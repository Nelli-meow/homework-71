import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container d-flex  justify-content-between">
        <NavLink to="/" className="navbar-brand" >Turtle Pizza</NavLink>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/dishes">Dishes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page"  to="/orders">Orders</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;