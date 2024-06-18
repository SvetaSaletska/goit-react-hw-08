import { FaPhone, FaUser } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";

export const Contact = ({ items: { name, number, id }, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.text}>
        <p>
          <FaUser className={css.icon} />
          <span className={css.description}>{name}</span>
        </p>
        <p>
          <FaPhone className={css.icon} />
          <span className={css.description}>{number}</span>
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
