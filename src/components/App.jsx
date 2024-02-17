import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { SectionSubtitle } from './sectionSubtitle/SectionSubtitle';
import { SectionTitle } from './sectionTitle/SectionTitle';
import css from './App.module.css';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <NotificationContainer />

      <SectionTitle title="Phonebook" />

      <ContactForm />

      <SectionSubtitle subtitle="Contacts" />

      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}

      <ContactList />
    </div>
  );
};
