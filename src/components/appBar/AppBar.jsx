import { AuthNav } from 'components/authNav/AuthNav';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export { AppBar };
