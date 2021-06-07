import authReducer from './auth/reducers';
import suggestionReducer from './suggestion/reducers';

export default ({ auth, product }, action) => ({
  auth: authReducer(auth, action),
  suggestion: suggestionReducer(product, action),
});
