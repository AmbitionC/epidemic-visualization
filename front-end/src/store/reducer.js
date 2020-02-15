 import {
  SUBMIT_DONATE_VALUE,
   SUBMIT_NEED_VALUE
 } from './actionTypes'

const defaultState = {
  display_need: 'none',
  display_donate: 'none',
  DonateUsername: '',
  DonatePhone: '',
  DonateEmail: '',
  donateItem: '',
  donateNumber: '',
  DonateHospital: '',
  NeedUsername:'',
  NeedPhone:'',
  NeedEmail:'',
  needItem:'',
  needNumber:''
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case SUBMIT_DONATE_VALUE:
    {
      newState.DonateUsername = action.values.username;
      newState.DonatePhone = action.values.phone;
      newState.DonateEmail = action.values.email;
      newState.donateItem = action.values.donateItem;
      newState.donateNumber = action.values.donateNumber;
      newState.DonateHospital = action.values.hospital;

      return newState;
    }
    case SUBMIT_NEED_VALUE:
    {
      newState.NeedUsername = action.values.username;
      newState.NeedPhone = action.values.phone;
      newState.NeedEmail = action.values.email;
      newState.needItem = action.values.needItem;
      newState.needNumber = action.values.needNumber;

      return newState;
    }
    default:
      break;
  }
  return state;
}