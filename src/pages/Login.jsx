import { LoginForm } from 'components/loginForm/LoginForm';
import React from 'react';
import css from './contact/Contacts.module.css';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';

const Login = () => {
  return (
    <div className={css.wrapper}>
      <SectionTitle title="Log In" />
      <LoginForm />
    </div>
  );
};

export default Login;
