import React from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Typography, Menu, Space } from 'antd';
import { PlusOutlined, DownOutlined } from '@ant-design/icons'

import './App.css'

const { Title, Text } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="0">
      Pause
    </Menu.Item>
    <Menu.Item key="1">
      Resume
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      Delete
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div style={{ padding: '10px 250px' }}>
      <div className="row-container">
        <h3 style={{ marginRight: "auto" }}>Torrent Feed</h3>
        <Space>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Actions <DownOutlined />
            </a>
          </Dropdown>
          <Button>
            <PlusOutlined /> TORRENT
        </Button>
        </Space>
      </div>
    </div>
  );
}

export default App;
