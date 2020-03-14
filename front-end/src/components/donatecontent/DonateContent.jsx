import React, {Fragment, useState, useEffect, useContext } from 'react';
import { Descriptions } from 'antd';
import { Pagination } from 'antd';
import { requestDonate } from '../../global/url';
import { DonateDataContext, GET_DONATE_DATA } from '../../store/reducer';

// const data = [
//   {
//     titleHospital: '市金银潭医院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:1
//   },
//   {
//     titleHospital: '武汉市肺科医院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:2
//   },
//   {
//     titleHospital: '武汉市汉口医院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:3
//   },
//   {
//     titleHospital: '武汉市武昌医院（西区）',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:4
//   },
//   { 
//     titleHospital: '湖北省中西医结合医院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:5
//   },
//   {
//     titleHospital: '蔡甸区妇幼保健院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:6
//   },
//   {
//     titleHospital: '江夏区中医医院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:7
//   },
//   {
//     titleHospital: '武汉市第四医院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:8
//   },
//   {
//     titleHospital: '协和西院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:9
//   },
//   { 
//     titleHospital: '湖北六七二中西医结合骨科医院',
//     needItem: '需要大批口罩',
//     address: '具体地址：湖北省武汉市XX',
//     id:10
//   },
// ]

export const  DonateContent = () => {

  const {data,dispatch} = useContext(DonateDataContext);
  const [currentPage, setCurrentPage] = useState(1);

  //暂时用不到改变pageSize的地方
  const [pageSize, setPageSize] = useState(5);
  const numIndex = (currentPage - 1) * pageSize;
  const totalnumber = data.length;

  useEffect(() => {
    requestDonate().then(data => {
      dispatch({type:GET_DONATE_DATA,data:data});
      console.log(data);
    })
   },[]);

  return (
    <Fragment>
    {data.map((item,index) => {
      //console.log(item)
      if( index === numIndex || index === numIndex + 1 || index === numIndex + 2 || index === numIndex + 3 || index === numIndex + 4 ){
        return (
          <div style={{backgroundColor:'white',marginBottom:'4px',height:'163px'}} key={item.id}>
          <br />
          <Descriptions bordered >
            <Descriptions.Item label="捐赠日期">2019-3-13</Descriptions.Item>
            <Descriptions.Item label="捐赠单位（个人）">{item.donate_people}</Descriptions.Item>
            <Descriptions.Item label="物品名称">{item.donate_item}</Descriptions.Item>
            <Descriptions.Item label="规格">{item.donate_specification}</Descriptions.Item>
            <Descriptions.Item label="计量单位">{item.donate_unit}</Descriptions.Item>
            <Descriptions.Item label="数量">{item.donate_number}</Descriptions.Item>
          </Descriptions>
          <br />
        </div>
        );
      }
    })}
    
    <Pagination 
        size="small" 
        total={totalnumber} 
        defaultPageSize={pageSize}	
        onChange={(current) => {
          setCurrentPage(current)
        }}
      />
    </Fragment>
  );
}

export default DonateContent;