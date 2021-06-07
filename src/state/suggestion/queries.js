import api from '../../utils/api';

const basePath = '/suggestions';

export const loadSuggestions = () => {
  return api
    .get(`${basePath}`)
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });
};

export const createSuggestion = payload => {
  return api
    .post(`${basePath}`, payload)
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });
};
