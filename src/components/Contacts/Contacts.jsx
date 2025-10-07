import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./Contacts.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactForm />
      <input
        className={styles.input}
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            <span className={styles.contactName}>
              {contact.name}: {contact.number}
            </span>
            <button className={styles.deleteBtn}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
