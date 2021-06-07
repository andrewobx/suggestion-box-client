import { useState } from 'react';
import { useStateValue } from '../../index';
import { loadSuggestions, createSuggestion } from '../queries';
import { listSuggestions } from '../actions';

const useSuggestions = () => {
  const [{ suggestion }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getSuggestions = async () => {
    setIsLoading(true);

    try {
      const response = await loadSuggestions();
      dispatch(listSuggestions(response));
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  const submitSuggestion = async body => {
    setIsLoading(true);

    try {
      await createSuggestion(body);
      getSuggestions();
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  return [suggestion, getSuggestions, submitSuggestion, isLoading, error];
};

export default useSuggestions;
