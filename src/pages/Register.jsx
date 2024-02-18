import { RegisterForm } from 'components/registerForm/RegisterForm';
import React from 'react';

import css from './contact/Contacts.module.css';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
const Register = () => {
  return (
    <div className={css.wrapper}>
      <SectionTitle title="Registration" />
      <RegisterForm />
    </div>
  );
};

export default Register;
