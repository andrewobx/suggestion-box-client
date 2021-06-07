import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import FormGroup from '../../../components/form/formGroup';
import ErrorText from '../../../components/form/error';
import Input from '../../../components/form/input';
import Button from '../../../components/button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
`;

export const Error = styled.div`
  color: #ed4337;
  font-weight: 500;
  margin: 1rem 0;
  font-size: 0.8rem;
  max-width: 250px;
  line-height: 1.5;
`;

export const LoginForm = props => (
  <Formik initialValues={{ email: '', password: '' }} {...props}>
    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
      <Form>
        <FormGroup style={{ minWidth: 250 }}>
          {errors.genericError && <ErrorText>{errors.genericError}</ErrorText>}
          <Input
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
            value={values.email}
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            value={values.password}
          />
          <Button primary large onClick={handleSubmit} type="submit">
            Login
          </Button>
        </FormGroup>
      </Form>
    )}
  </Formik>
);
