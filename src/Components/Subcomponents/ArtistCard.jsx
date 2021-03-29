import React, { Fragment, useState } from "react";
import {
  Skeleton,
  Card,
  Avatar,
  Divider,
  Row,
  Col,
  Empty,
  Select,
  Typography,
} from "antd";

import "./ArtistCard.css";

const ArtistCard = ({ data, loading, artistName, setEventsData }) => {
  const [eventType, setEventType] = useState(null);
  if (data.err === "Empty") {
    return (
      <Row>
        <Col span={24}>
          <Empty style={{ marginTop: 24 }} />
        </Col>
      </Row>
    );
  }

  const { Option } = Select;
  const { Meta } = Card;
  const { Title } = Typography;

  const handleChange = (value) => {
    setEventType(value);
  };

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://rest.bandsintown.com/artists/${artistName}/events?app_id=test&date=${eventType}`
      );
      const data = await response.json();
      setEventsData(data);
    } catch {
      setEventsData(null);
    }
  };

  return (
    <Fragment>
      <Row>
        <Divider />
      </Row>
      <Row>
        <Col span={3} offset={6}>
          <Title level={5}>Select Event Type:</Title>
        </Col>
        <Col span={4}>
          <Select
            defaultValue="all"
            className="main-select"
            onChange={handleChange}
          >
            <Option value="all">All</Option>
            <Option value="upcoming">Upcoming</Option>
            <Option value="past">Past</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card className="main-card" onClick={handleClick}>
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={<Avatar src={data.image_url} />}
                title={data.name}
                description={data.facebook_page_url}
              />
            </Skeleton>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ArtistCard;
