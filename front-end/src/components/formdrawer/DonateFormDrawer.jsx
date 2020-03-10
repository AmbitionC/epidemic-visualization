import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Drawer, Button } from 'antd';
import DonateForm from '../form/DonateForm';
import { variableMap } from 'global/variable'


class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
   
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> {variableMap.menuDonate}
        </Button>
        <Drawer
          title="基本信息填写"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <DonateForm />
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
          </div>
        </Drawer>
      </div>
    );
  }
}

const FormDrawer = Form.create()(DrawerForm);

export default FormDrawer;

