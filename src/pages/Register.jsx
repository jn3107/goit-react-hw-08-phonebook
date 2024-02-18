import { RegisterForm } from 'components/registerForm/RegisterForm';
import React from 'react';

import css from './contacts/Contacts.module.css';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
const Register = () => {
  return (
    <div className={css.continer}>
      <SectionTitle title="Registration" />
      <RegisterForm />
    </div>
  );
};

export default Register;
