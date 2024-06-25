import { ContactList } from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import css from "../App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <ErrorMessage>Error message</ErrorMessage>}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};
