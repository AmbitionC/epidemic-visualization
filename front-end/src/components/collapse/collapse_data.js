import React, { createContext, useReducer } from 'react';

export const  CollapseDataContext = createContext({});

export const GET_COLLAPSE_DATA = "get_collapse_data";

const reducer = (state, action) => {
  switch(action.type) {
    case GET_COLLAPSE_DATA:
      return action.data;
    default:
      return state;
  }
}

export const CollapseData = props => {

  const [data, dispatch] = useReducer(reducer, {
    0:{title:"",summary:"",infoSource:"",sourceUrl:"",pubDate:"",provinceName:"",provinceId:""},
    1:{title:"",summary:"",infoSource:"",sourceUrl:"",pubDate:"",provinceName:"",provinceId:""},
    2:{title:"",summary:"",infoSource:"",sourceUrl:"",pubDate:"",provinceName:"",provinceId:""}
  })

  return (
    <CollapseDataContext.Provider value={{data, dispatch}}>
      {props.children}
    </CollapseDataContext.Provider>
  )
}