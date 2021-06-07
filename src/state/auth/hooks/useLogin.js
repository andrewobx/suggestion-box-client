import { useState } from 'react';
import { useStateValue } from '../../index';
import { login } from '../actions';
import { loginUser } from '../queries';
import { LOCAL_STORAGE } from '../../../constants';

const useLogin = () => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const formData = async ({ values, actions }) => {
    setIsLoading(true);

    if (values.email !== '' && values.password !== '') {
      try {
        const response = await loginUser(values);
        localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, response.tokens.access.token);
        localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, response.tokens.refresh.token);
        dispatch(login(response));
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  return [auth, formData, isLoading, error];
};

export default useLogin;
