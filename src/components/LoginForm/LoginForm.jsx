import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Email
          <Field name="email" type="email" className={styles.input} />
        </label>

        <label className={styles.label}>
          Password
          <Field name="password" type="password" className={styles.input} />
        </label>

        <button type="submit" className={styles.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
