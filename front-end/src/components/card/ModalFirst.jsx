import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export const ModalFirst = ({}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={()=>{setVisible(false)}} style={{backgroundColor:'grey',borderColor:'grey'}}>
        查看地图
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={()=>{setVisible(false)}}
        onCancel={()=>{setVisible(false)}}
        footer={[ 
          <Button key="submit" type="primary" onClick={()=>{setVisible(false)}} >
            OK
          </Button>
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
