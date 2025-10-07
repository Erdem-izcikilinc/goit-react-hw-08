import { useSelector } from "react-redux";
import { selectFilteredContacts, selectIsLoading, selectError } from "../../redux/contacts/selectors";
import Contact from "../Contacts/Contacts";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const items = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (loading) return <p className={styles.info}>Loading...</p>;
  if (error) return <p className={styles.err}>Error: {error}</p>;

  return (
    <ul className={styles.list}>
      {items.map((c) => <Contact key={c.id} contact={c} />)}
    </ul>
  );
}
