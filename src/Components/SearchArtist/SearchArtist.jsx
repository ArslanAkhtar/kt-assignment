import React, { Fragment, useState } from "react";
import { Row, Col } from "antd";
import SearchField from "../Subcomponents/SearchField";
import ArtistCard from "../Subcomponents/ArtistCard";
import EventCards from "../Subcomponents/EventCards";

const SearchArtist = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [artistName, setArtistName] = useState(null);
  const [eventsData, setEventsData] = useState(null);
  return (
    <Fragment>
      <Row>
        <Col span={24}>
          <SearchField
            setData={setData}
            setLoading={setLoading}
            artistName={artistName}
            setArtistName={setArtistName}
            setEventsData={setEventsData}
          />
        </Col>
      </Row>
      {data && (
        <ArtistCard
          data={data}
          loading={loading}
          artistName={artistName}
          setEventsData={setEventsData}
        />
      )}
      {eventsData && <EventCards eventsData={eventsData} />}
    </Fragment>
  );
};

export default SearchArtist;
