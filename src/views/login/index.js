import React, { useEffect } from 'react';
import useLogin from '../../state/auth/hooks/useLogin';
import Spinner from '../../components/spinner';
import { Container, Error, LoginForm } from './components';
import { isTokenExpired } from '../../utils/jwt';

const Login = ({ location, history }) => {
  const { from } = location.state || { from: { pathname: '/home' } };
  const [auth, setLogin, isLoading, error] = useLogin();

  useEffect(() => {
    if (!isTokenExpired()) {
      history.push(from);
    }
  }, [auth, from, history]);

  return (
    <Container>
      <Spinner show={isLoading} />
      <LoginForm onSubmit={(values, actions) => setLogin({ values, actions })} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Login;
