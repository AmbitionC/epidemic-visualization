import {
  SUBMIT_DONATE_VALUE,
  SUBMIT_NEED_VALUE
} from './actionTypes'

export const handleDonateSubmit = (values) => ({
  type: SUBMIT_DONATE_VALUE,
  values
});

export const handleNeedSubmit = (values) => ({
  type: SUBMIT_NEED_VALUE,
  values
});