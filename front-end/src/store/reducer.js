import React, { createContext, useReducer } from 'react';

export const StatisticDataContext = createContext({});

export const GET_STATISTIC_DATA = "get_statistic_data";

export const StatisticData = props => {

  const [data, dispatch] = useReducer(reducer, {
    cityName: '',
    currentConfirmedCount: 0,
    confirmedCount: 0,
    suspectedCount: 0,
    curedCount: 0,
    deadCount: 0,
    locationId: 0,
    cityEnglishName: ''
  })

  return (
    <StatisticDataContext.Provider value={{data, dispatch}}>
      {props.children}
    </StatisticDataContext.Provider>
  )
}

export const FormDataContext = createContext({});

export const GET_FORM_DATA = "get_form_data";

export const FormData = props => {

  const [data, dispatch] = useReducer(reducer, {
    name: '',
    prefix: '',
    phone: '',
    email: '',
    donate_item: '',
    donate_number: '',
    need_item: '',
    need_number: '',
    hospital: ''
  })

  return (
    <FormDataContext.Provider value={{data, dispatch}}>
      {props.children}
    </FormDataContext.Provider>
  )
}

const reducer = (state, action) => {
  switch(action.type) {
    case GET_STATISTIC_DATA:
      return action.data;
    case GET_FORM_DATA:
      return action.data;
    default:
      return state;
  }
}