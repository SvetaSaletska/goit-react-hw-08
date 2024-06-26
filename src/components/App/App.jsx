import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { ContactList } from "../ContactList/ContactList";
// import ContactForm from "../ContactForm/ContactForm";
// import { SearchBox } from "../SearchBox/SearchBox";
// import css from "../App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
// import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { fetchContacts } from "../../redux/contacts/contactsOps.js";
import { selectLoading } from "../../redux/contacts/contactsSlice.js";
import Layaut from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage.jsx")
);
const RegisterPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage.jsx")
);

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layaut>
      {isLoading && <Loader>Loading message</Loader>}
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layaut>
  );
};

//  <div>
//    <h1 className={css.title}>Phonebook</h1>
//    {isError && <ErrorMessage>Error message</ErrorMessage>}
//    <ContactForm />
//    <SearchBox />
//    <ContactList />
//  </div>;
