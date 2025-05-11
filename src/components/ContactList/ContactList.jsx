import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
