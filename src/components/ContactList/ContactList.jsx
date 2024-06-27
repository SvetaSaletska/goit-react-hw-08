import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/contactsSlice";
import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contact_list}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact items={item} />
        </li>
      ))}
    </ul>
  );
};
