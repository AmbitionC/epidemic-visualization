import React, { useState, useContext } from 'react';
import { Drawer, Button } from 'antd';
import { StatisticDataContext, GET_STATISTIC_DATA } from './statistic_data';
import StatisticShow from '../statistic/StatisticShow';
import { requestCity } from 'global/url';

export const StatisticDrawer = () => {
  const [visible, setVisible] = useState(false);
  const {dispatch} = useContext(StatisticDataContext);
  
    return (
      <div>
        <Button 
          type="primary" 
          onClick={() => {
            setVisible(true);
            requestCity().then( (data) => {
              console.log(data);
              dispatch({type:GET_STATISTIC_DATA,data:data});
            })
          }} 
          style={{width:'150px'}}
        >
          武汉疫情实时数据
        </Button>
        <Drawer
          placement='right'
          closable={false}
          onClose={() => setVisible(false)}
          visible={visible}
          width={720}
        >
          <div>
              <StatisticShow />
          </div>
        </Drawer>
      </div>
    );
}


export default StatisticDrawer;

