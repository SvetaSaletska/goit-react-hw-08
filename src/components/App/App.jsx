import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute.jsx";
import PrivateRoute from "../../components/PrivateRoute.jsx";
import { selectLoading } from "../../redux/contacts/selectors.js";
import Layaut from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";

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
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);
  const isLoading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <div>Refreshing User!</div>
  ) : (
    <Layaut>
      {isLoading && <Loader>Loading message</Loader>}
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage redirectTo="/contacts" />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage redirectTo="/contacts" />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage redirectTo="/login" />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layaut>
  );
};
