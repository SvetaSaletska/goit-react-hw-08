import css from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redax/filtersSlice";
import { useId } from "react";

export const SearchBox = () => {
  const filterID = useId();

  const dicpatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);

  const handleSearch = (e) => {
    dicpatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor={filterID}>Find contacts by name</label>
      <input id={filterID} type="text" value={filter} onChange={handleSearch} />
    </div>
  );
};
