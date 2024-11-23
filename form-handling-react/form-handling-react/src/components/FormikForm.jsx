import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = { username: '', email: '', password: '' };

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values) => {
    // Simulate API call (replace with actual API call)
    console.log('Submitting:', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form>
        <h1>Registration (Formik)</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
