import {
  EMPLOYEE_UPDATE
} from '../actions/types.js';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // reducer has to return a new object as well
      return { ...state, [action.payload.prop]: action.payload.value };
      // the [] above is KEY INTERPOLATION, key added to this object is determined at runtime
    default:
      return state;
  }
};
