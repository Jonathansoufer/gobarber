import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please inform a valid email address.')
    .required('A valid e-mail address is required.'),
  password: Yup.string()
    .min(6, 'Password should have a minimum of 6 characters.')
    .required('Password is required.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail address" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">{loading ? 'Loading...' : 'Sign In'}</button>
        <Link to="/register">Sign Up now!</Link>
      </Form>
    </>
  );
}
