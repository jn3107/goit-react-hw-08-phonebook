import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink
        className={location.pathname === '/' ? css.active : css.link}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={location.pathname === '/contacts' ? css.active : css.link}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export { Navigation };
