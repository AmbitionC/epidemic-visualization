import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export const ModalSecond = ({phone}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={()=>{setVisible(true)}} style={{backgroundColor:'grey',borderColor:'grey'}}>
        联系方式
      </Button>
      <Modal
        title="联系方式"
        visible={visible}
        onOk={()=>{setVisible(false)}}
        onCancel={()=>{setVisible(false)}}
        footer={[ 
          <Button key="submit" type="primary" onClick={()=>{setVisible(false)}} >
            OK
          </Button>
        ]}
      >
        <p>{phone}</p>
      </Modal>
    </div>
  );
}
