import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field name="name" type="text" className={styles.input} />
        </label>

        <label className={styles.label}>
          Email
          <Field name="email" type="email" className={styles.input} />
        </label>

        <label className={styles.label}>
          Password
          <Field name="password" type="password" className={styles.input} />
        </label>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
