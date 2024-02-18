import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { ContactList } from 'components/contactList/ContactList';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import { SectionSubtitle } from 'components/sectionSubtitle/SectionSubtitle';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import css from './Contacts.module.css';

const Contacts = () => {
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

export default Contacts;
