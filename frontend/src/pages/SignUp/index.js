import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Please inform a valid email address.')
    .required('A valid e-mail address is required.'),
  password: Yup.string().required('Password is required.'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="E-mail address" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Create account</button>
        <Link to="/">Already registered?</Link>
      </Form>
    </>
  );
}
