import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {items.map((item) => (
        <li key={item.id}>
          <Contact items={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
