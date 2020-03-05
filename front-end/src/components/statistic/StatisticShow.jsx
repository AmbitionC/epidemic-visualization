import React, { useState } from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';
import { requestCity } from 'global/url';

export default () => {
  const [confirmedCount,setConfirmedCount]=useState(0);
  const [curedCount,setCuredCount]=useState(0);
  const [currentConfirmedCount,setCurrentConfirmedCount]=useState(0);
  const [deadCount,setDeadCount]=useState(0);
  const [supectedCount,setSupectedCount]=useState(0);
  let pastConfirmedCount,pastCuredCount,pastCurrentConfirmedCount,pastDeadCount,pastSupectedCount =0;
  requestCity()
  // .then(res => res.json())
  .then(data => {
    // console.log(data);
    if(confirmedCount === 0){
      setConfirmedCount(data.confirmedCount);
      setCuredCount(data.curedCount);
      setCurrentConfirmedCount(data.currentConfirmedCount);
      setDeadCount(data.deadCount);
      setSupectedCount(data.supectedCount);
      pastCurrentConfirmedCount = "0";
    }
    else{
      pastCurrentConfirmedCount = currentConfirmedCount;
    }
    
  })
  return(
    <div style={{ background: '#ECECEC', padding: '30px', fontSize:12}}>
      <Row gutter={[18,24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="现有确诊"
              value={currentConfirmedCount}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="arrow-up" />}
            />
            <h5>昨日{pastCurrentConfirmedCount}</h5>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="现有疑似"
              value={supectedCount}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Icon type="arrow-down" />}
            />
            <h5>昨日</h5>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="现有重症"
              value={0}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Icon type="arrow-down" />}
            />
            <h5>昨日</h5>
          </Card>
        </Col>
      </Row>
      <Row gutter={[18,24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="累计确诊"
              value={confirmedCount}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="arrow-up" />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="累计治愈"
              value={curedCount}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Icon type="arrow-down" />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="累计死亡"
              value={deadCount}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Icon type="arrow-down" />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}