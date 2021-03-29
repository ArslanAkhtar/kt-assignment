import React, { Fragment } from "react";
import { Card, Divider, Row, Col, Empty } from "antd";
import Grid from "@material-ui/core/Grid";

import "./EventCards.css";

const EventCards = ({ eventsData }) => {
  if (eventsData.length === 0) {
    return (
      <Row>
        <Col span={24}>
          <Empty style={{ marginTop: 24 }} />
        </Col>
      </Row>
    );
  }
  const date = (dateTime) => {
    const setDateTime = new Date(dateTime).toDateString();
    return setDateTime;
  };
  return (
    <Fragment>
      <Row>
        <Divider />
      </Row>

      <Grid container spacing={4}>
        {eventsData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card title="EVENT DETAILS" bordered={true}>
              <div className="row">
                <div className="left">
                  <span className="heading">Country</span>
                  <span className="detail">{card.venue.country}</span>
                </div>
                <div className="right">
                  <span className="heading">City</span>
                  <span className="detail">{card.venue.city}</span>
                </div>
              </div>
              <div className="row">
                <div className="left">
                  <span className="heading">Venue</span>
                  <span className="detail">{card.venue.name}</span>
                </div>
                <div className="right">
                  <span className="heading">Date</span>
                  <span className="detail">{date(card.datetime)}</span>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default EventCards;
