import { useSelector } from "react-redux";
import { selectContacts } from "../../redax/contactsSlice";
import { selectNameFilter } from "../../redax/filtersSlice";
import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  console.log(typeof nameFilter);
  const items = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  console.log(items);
  return (
    <ul className={css.contact_list}>
      {items.map((item) => (
        <li key={item.id}>
          <Contact items={item} />
        </li>
      ))}
    </ul>
  );
};
