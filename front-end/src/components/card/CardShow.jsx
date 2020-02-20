import { Card, Icon, Col, Row } from 'antd';
import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

const { Meta } = Card;
const hospitalItem = [
  {
    titleHospital: '市金银潭医院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  {
    titleHospital: '武汉市肺科医院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  {
    titleHospital: '武汉市汉口医院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  {
    titleHospital: '武汉市武昌医院（西区）',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  { 
    titleHospital: '湖北省中西医结合医院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  {
    titleHospital: '蔡甸区妇幼保健院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  {
    titleHospital: '江夏区中医医院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  {
    titleHospital: '武汉市第四医院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  {
    titleHospital: '协和西院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
  { 
    titleHospital: '湖北六七二中西医结合骨科医院',
    needItem: '需要大批口罩',
    address: '具体地址：湖北省武汉市XX'
  },
]



export default () => {

  const [currentPage, setCurrentPage] = useState(1);
  //暂时用不到改变pageSize的地方
  const [pageSize, setPageSize] = useState(3);
  const numIndex = (currentPage - 1) * pageSize;
  const totalnumber = hospitalItem.length;
  return(
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
      {hospitalItem.map((item,index) => {
        //console.log(item)
        if( index === numIndex || index === numIndex + 1 || index === numIndex + 2 ){
          return (
            <Col span={8}>
              <Card
                headStyle={{fontSize:20, fontFamily:"Times New Roman"}}
                title={item.titleHospital}
                actions={[
                  <div>查看地图<Icon type="search" /></div>,
                  <div>联系方式<Icon type="phone" /></div>,
                  <div>更多信息<Icon type="ellipsis" /></div>,
                ]}
              >
                <Meta
                  title={item.needItem}
                  description={item.address}
                />
              </Card>
            </Col>
          );
        }
      })}
      </Row>
      <Pagination 
        size="small" 
        total={totalnumber} 
        defaultPageSize={pageSize}	
        onChange={(current) => {
          setCurrentPage(current)
        }}
      />
    </div>
  );
  }

