import React, { Fragment, memo } from "react";
import { Input, Row, Col, Typography, Space } from "antd";
import { isEmpty } from "ramda";

const SearchField = ({ setData, setLoading, setArtistName, setEventsData }) => {
  const { Search } = Input;
  const { Title } = Typography;

  const onSearch = async (value) => {
    setEventsData(null);
    if (value === "") {
      setData(null);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://rest.bandsintown.com/artists/${value}?app_id=test`
      );
      const data = await response.json();
      setLoading(false);
      if (isEmpty(data)) {
        setData({ ...data, err: "Empty" });
      } else {
        setData({ ...data, err: "" });
        setArtistName(value);
      }
    } catch {
      setLoading(false);
      setData({ err: "Service Error" });
    }
  };
  return (
    <Fragment>
      <Row>
        <Col span={24} offset={9}>
          <Title>Search Artist</Title>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Search
            placeholder="Search Artist"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <Space />
        </Col>
      </Row>
    </Fragment>
  );
};

export default memo(SearchField);
