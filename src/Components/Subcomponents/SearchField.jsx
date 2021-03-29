import React, { Fragment } from "react";
import { Input, Row, Col, Typography, Space } from "antd";

const SearchField = ({ setData, setLoading }) => {
  const { Search } = Input;
  const { Title } = Typography;

  const onSearch = async (value) => {
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
      if (data) setLoading(false);
      setData({ ...data, err: "" });
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

export default SearchField;
