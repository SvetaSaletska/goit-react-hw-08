import { ContactList } from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import css from "../App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/contactsOps";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.loading);
  const isError = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <Error>Error message</Error>}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};
