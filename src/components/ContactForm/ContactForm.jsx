import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Number
          <Field className={styles.input} name="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
