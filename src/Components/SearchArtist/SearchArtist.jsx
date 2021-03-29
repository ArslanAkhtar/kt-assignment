import React, { Fragment, useState } from "react";
import { Row, Col } from "antd";
import SearchField from "../Subcomponents/SearchField";
import ArtistCard from "../Subcomponents/ArtistCard";

const SearchArtist = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <Fragment>
      <Row>
        <Col span={24}>
          <SearchField setData={setData} setLoading={setLoading} />
        </Col>
      </Row>
      {data && <ArtistCard data={data} loading={loading} />}
    </Fragment>
  );
};

export default SearchArtist;
