import { Card, Col, Row } from 'antd';
import React, { useState, useEffect, useContext } from "react";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { ModalFirst } from './ModalFirst';
import { ModalSecond } from './ModalSecond';
import { ModalThird } from './ModalThird';
import { requestNeed } from '../../global/url';
import { NeedDataContext, GET_NEED_DATA } from '../../store/reducer';

const { Meta } = Card;


export default () => {

  const [currentPage, setCurrentPage] = useState(1);
  const {data,dispatch} = useContext(NeedDataContext);

  //暂时用不到改变pageSize的地方
  const [pageSize, setPageSize] = useState(3);
  const numIndex = (currentPage - 1) * pageSize;
  const totalnumber = data.length;

  useEffect(() => {
    requestNeed().then(data => {
      dispatch({type:GET_NEED_DATA,data:data});
    })
   },[]);

  
  return (
    <div style={{ background: '#ECECEC', padding: '10px' }}>
      <Row gutter={16}>
      {data.map((item,index) => {
        //console.log(item)
        if( index === numIndex || index === numIndex + 1 || index === numIndex + 2 ){
          return (
            <Col span={8} key={item.id}>
              <Card
                headStyle={{fontSize:17, fontFamily:"Times New Roman"}}
                title={item.hospitalName}
                actions={[
                  <div style={{width:'96px',float:'left',marginLeft:'2px'}}><ModalFirst /></div>,
                  <div style={{width:'96px',float:'left',marginLeft:'2px'}}><ModalSecond phone={item.phoneNumber}/></div>,
                  <div style={{width:'96px',float:'left',marginLeft:'2px'}}><ModalThird need={item.needItem}/></div>
                ]}
              >
                <Meta
                  title={item.needStatus}
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

