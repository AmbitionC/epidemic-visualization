import { Card, Icon, Avatar, Col, Row } from 'antd';
import React, {Component} from "react";
import 'antd/dist/antd.css';

const { Meta } = Card;

class CardShow extends Component {

  render() {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              style={{width: 400}}
              headStyle={{backgroundColor: '#5B8FF9', fontSize:20, fontFamily:"Times New Roman"}}
              title="武汉市第一医院"
              // cover={
              //   <div style={{backgroundColor: '#5B8FF9', height:400}}>
              //     <h1>武汉市第一医院</h1>
              //   </div>
              // }
              actions={[
                <div>查看地图<Icon type="search" /></div>,
                <div>联系方式<Icon type="phone" /></div>,
                <div>更多信息<Icon type="ellipsis" key="ellipsis"/></div>,
              ]}
            >
              <Meta
                title="物资需求种类：8"
                description="具体地址：湖北省武汉市XXX"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{width: 400}}
              headStyle={{backgroundColor: '#5B8FF9', fontSize:20, fontFamily:"Times New Roman"}}
              title="武汉市第一医院"
              // cover={
              //   <div style={{backgroundColor: '#5B8FF9', height:400}}>
              //     <h1>武汉市第一医院</h1>
              //   </div>
              // }
              actions={[
                <div>查看地图<Icon type="search" /></div>,
                <div>联系方式<Icon type="phone" /></div>,
                <div>更多信息<Icon type="ellipsis" key="ellipsis"/></div>,
              ]}
            >
              <Meta
                title="物资需求种类：8"
                description="具体地址：湖北省武汉市XXX"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{width: 400}}
              headStyle={{backgroundColor: '#5B8FF9', fontSize:20, fontFamily:"Times New Roman"}}
              title="武汉市第一医院"
              // cover={
              //   <div style={{backgroundColor: '#5B8FF9', height:400}}>
              //     <h1>武汉市第一医院</h1>
              //   </div>
              // }
              actions={[
                <div>查看地图<Icon type="search" /></div>,
                <div>联系方式<Icon type="phone" /></div>,
                <div>更多信息<Icon type="ellipsis" key="ellipsis"/></div>,
              ]}
            >
              <Meta
                title="物资需求种类：8"
                description="具体地址：湖北省武汉市XXX"
              />
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default CardShow;