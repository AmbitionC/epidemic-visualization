import React, { createContext, useReducer } from 'react';

export const StatisticDataContext = createContext({});

export const GET_STATISTIC_DATA = "get_statistic_data";

const reducer = (state, action) => {
  switch(action.type) {
    case GET_STATISTIC_DATA:
      return action.data;
    default:
      return state;
  }
}

export const StatisticData = props => {

  const [data, dispatch] = useReducer(reducer, {
    cityName: "",
    currentConfirmedCount: 0,
    confirmedCount: 0,
    suspectedCount: 0,
    curedCount: 0,
    deadCount: 0,
    locationId: 0,
    cityEnglishName: ""
  })

  return (
    <StatisticDataContext.Provider value={{data, dispatch}}>
      {props.children}
    </StatisticDataContext.Provider>
  )
}