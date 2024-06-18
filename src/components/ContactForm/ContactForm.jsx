import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
// import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useSelector } from "react-redux";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number().required("Required"),
});

export const ContactForm = () => {
  const value = useSelector((state) => state.contacts.items);
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        console.log(values);
        // onAdd({ id: nanoid(), ...values });
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label id={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label id={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId}></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
