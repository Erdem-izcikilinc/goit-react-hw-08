import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Registration from "../../pages/Registration/Registration";
import Login from "../../pages/Login/Login";
import Contacts from "../../pages/Contacts/Contacts";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";
import styles from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <div className={styles.loading}>Refreshing user...</div>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
        />
      </Routes>
    </Layout>
  );
}
