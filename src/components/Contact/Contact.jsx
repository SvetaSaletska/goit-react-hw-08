import { FaPhone, FaUser } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redax/contactsSlice";

export const Contact = ({ items: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

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
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
