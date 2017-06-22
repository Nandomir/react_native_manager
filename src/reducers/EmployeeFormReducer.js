import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
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
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
