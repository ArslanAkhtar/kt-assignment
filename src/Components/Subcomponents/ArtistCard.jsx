import React, { Fragment } from "react";
import { Skeleton, Card, Avatar, Divider, Row, Col, Empty } from "antd";

const ArtistCard = ({ data, loading }) => {
  if (data.err === "Service Error")
    return (
      <Row>
        <Col span={24}>
          <Empty style={{ marginTop: 24 }} />
        </Col>
      </Row>
    );
  const { Meta } = Card;
  return (
    <Fragment>
      <Row>
        <Divider />
      </Row>
      <Row>
        <Col span={24}>
          <Card style={{ width: 300, marginTop: 16 }}>
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={<Avatar src={data && data.image_url} />}
                title={data && data.name}
                description={data && data.facebook_page_url}
              />
            </Skeleton>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ArtistCard;
