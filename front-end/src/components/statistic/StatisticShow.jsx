import React, { useContext } from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';
import { StatisticDataContext } from './statistic_data';

export default () => {
  const { data } = useContext(StatisticDataContext); 
  let pastCurrentConfirmedCount = 0;

  return(
    <div style={{ background: '#ECECEC', padding: '30px', fontSize:12}}>
      <Row gutter={[18,24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="现有确诊"
              value={data.currentConfirmedCount}
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
              value={data.suspectedCount}
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
              value={data.confirmedCount}
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
              value={data.curedCount}
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
              value={data.deadCount}
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