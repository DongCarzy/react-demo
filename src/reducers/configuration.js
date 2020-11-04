import request from '../utils/request';
import { GET_CONFIGURATION } from '../constants';

const initialState = {
  configurations: [],
};

const getConfigs = params => dispatch =>
  request
    .get('/api/v1/all', {})
    .then(data => dispatch({ type: GET_CONFIGURATION, data }));

    
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONFIGURATION:
      return { ...state, configurations: action.data };
    default:
      return state;
  }
};

export { getConfigs };
