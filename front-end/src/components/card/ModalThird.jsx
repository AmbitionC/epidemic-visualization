import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export const ModalThird = ({need}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={()=>{setVisible(true)}} style={{backgroundColor:'grey',borderColor:'grey'}}>
        详细需求
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={()=>{setVisible(false)}}
        onCancel={()=>{setVisible(false)}}
      >
        <p>{need}</p>
      </Modal>
    </div>
  );
}
