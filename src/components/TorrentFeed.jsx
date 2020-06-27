import React from 'react';

import { Typography, Avatar, Progress, Row, Col } from 'antd';
import 'antd/dist/antd.css';

import {
  FileOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

export default function TorrentFeed(props) {
  const {percent} = props;

  return (
    <React.Fragment>
      <Row style={{
        marginTop: "20px"
      }}>
        <Col>
          <Avatar shape="square" size={64} icon={<FileOutlined />} style={{
            marginRight: "10px",
          }}></Avatar>
        </Col>
        <Col flex="auto">
          <Text strong>Torrent file name here</Text>
          <Row justify="space-between">
            <Text>Donwloading</Text>
            <span><ArrowUpOutlined style={{ color: "#2593FC" }} /> <Text>0 B/s</Text></span>
            <span><ArrowDownOutlined style={{ color: "#52c41a" }} /> <Text>0 B/s</Text></span>
            <span><ClockCircleOutlined /> <Text>Inf</Text></span>
            <Text>{percent + "%"}</Text>
          </Row>
          <Progress percent={percent} size="small" status="active" showInfo={false}></Progress>
        </Col>
      </Row>
    </React.Fragment>
  );
}