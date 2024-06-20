import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.filter.name);

  const items = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase)
  );
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
