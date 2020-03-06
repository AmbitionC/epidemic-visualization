import React, { useState, useContext } from 'react';
import { Collapse } from 'antd';
import { requestNews } from 'global/url';
import { CollapseDataContext,GET_COLLAPSE_DATA } from './collapse_data';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export default () => {

  // const [title,setTitle] = useState("none");
  const { data, dispatch } = useContext(CollapseDataContext); 

  requestNews().then( (data) => {
    // console.log(data);
    // setTitle(data[0].title)
    dispatch({type:GET_COLLAPSE_DATA,data:data});
  })

  return(
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header={data[0].title} key="1">
        <p>{data[0].summary}</p>
      </Panel>
      <Panel header={data[1].title} key="2">
        <p>{data[1].summary}</p>
      </Panel>
      <Panel header={data[2].title} key="3">
        <p>{data[2].summary}</p>
      </Panel>
    </Collapse>
  )
}