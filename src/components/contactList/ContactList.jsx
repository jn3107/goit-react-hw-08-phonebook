import { ContactListItem } from 'components/contactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

export { ContactList };
