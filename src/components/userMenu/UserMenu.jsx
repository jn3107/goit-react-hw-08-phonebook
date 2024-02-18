import React from 'react';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name} </p>
      <button
        className={css.button_add}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export { UserMenu };
