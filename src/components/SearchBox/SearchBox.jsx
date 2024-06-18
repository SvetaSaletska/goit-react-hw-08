import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";

export const SearchBox = ({ value, onChange }) => {
  const filterID = useId();
  return (
    <div className={css.filter}>
      <label htmlFor={filterID}>Find contacts by name</label>
      <input id={filterID} type="text" value={value} onChange={onChange} />
    </div>
  );
};
