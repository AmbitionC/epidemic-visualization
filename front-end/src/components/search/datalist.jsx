import React, {useContext} from 'react';
import { List, Typography } from 'antd';
import {CountContext} from 'containers/App';
import {options} from 'global/variable';

export const DataList = () => {

  const {count,setCount} = useContext(CountContext);

  const searchAns = (e,data) =>{
    const ans=[];
    if(e == 'isnotSearch'){
      return data;
    }
    else {
      ans.push(e);
      return ans;
    }
  }

  return(
    <div>
      <h3 style={{ marginBottom: 16 }}>Default Size</h3>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={searchAns(count,options)}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default DataList;