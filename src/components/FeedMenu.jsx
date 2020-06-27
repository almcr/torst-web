import React from 'react'
import { Row, Space, Button, Dropdown, Menu } from 'antd'
import 'antd/dist/antd.css';
import { DownOutlined, PlusOutlined } from '@ant-design/icons'

const torrent_actions_menu = (
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

function ActionsMenu() {
  return (
    <Dropdown overlay={torrent_actions_menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Actions <DownOutlined />
      </a>
    </Dropdown>
  );
}

export default function FeedMenu() {
  return (
    <Row>
      <h3 style={{ marginRight: "auto" }}>Torrent Feed</h3>
      <Space size="middle">
        <ActionsMenu />
        <Button>
          <PlusOutlined /> TORRENT
        </Button>
      </Space>
    </Row>
  );
}