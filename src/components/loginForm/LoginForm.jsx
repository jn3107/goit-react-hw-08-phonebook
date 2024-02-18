import React from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form
      className={css.form_wrapper}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" required />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          minLength={5}
          required
        />
      </label>
      <button className={css.button_add} type="submit">
        Log In
      </button>
    </form>
  );
};

export { LoginForm };
