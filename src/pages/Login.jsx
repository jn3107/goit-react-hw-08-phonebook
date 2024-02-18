import { LoginForm } from 'components/loginForm/LoginForm';
import React from 'react';
import css from './contacts/Contacts.module.css';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';

const Login = () => {
  return (
    <div className={css.continer}>
      <SectionTitle title="Log In" />
      <LoginForm />
    </div>
  );
};

export default Login;
