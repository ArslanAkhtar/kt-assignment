import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import ArtistCard from "./ArtistCard";
import EventCards from "./EventCards";
import SearchField from "./SearchField";
configure({ adapter: new Adapter() });

it("renders ArtistCard without crashing", () => {
  shallow(<ArtistCard data={{ err: "" }} loading={false} artistName={""} />);
});

it("renders ArtistCard correctly with Snapshot", () => {
  const tree = shallow(
    <ArtistCard data={{ err: "" }} loading={false} artistName={""} />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it("renders EventCards without crashing", () => {
  shallow(<EventCards eventsData={[]} />);
});

it("renders EventCards correctly with Snapshot", () => {
  const tree = shallow(<EventCards eventsData={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});

describe("Event Card Text Loaded", () => {
  it("contains Text", () => {
    const wrapper = shallow(<EventCards eventsData={[]} />);
    expect(wrapper.contains("EVENT DETAILS"));
  });
});

describe("Event Card Text Loaded Country", () => {
  it("contains Country", () => {
    const wrapper = shallow(<EventCards eventsData={[]} />);
    expect(wrapper.contains("Country"));
  });
});

describe("Event Card Text Loaded City", () => {
  it("contains City", () => {
    const wrapper = shallow(<EventCards eventsData={[]} />);
    expect(wrapper.contains("City"));
  });
});

describe("Event Card Text Loaded Venue", () => {
  it("contains Venue", () => {
    const wrapper = shallow(<EventCards eventsData={[]} />);
    expect(wrapper.contains("Venue"));
  });
});

describe("Event Card Text Loaded Date", () => {
  it("contains Date", () => {
    const wrapper = shallow(<EventCards eventsData={[]} />);
    expect(wrapper.contains("Date"));
  });
});

it("renders SearchField without crashing", () => {
  shallow(<SearchField artistName={""} />);
});

it("renders SearchField correctly with Snapshot", () => {
  const tree = shallow(<SearchField artistName={""} />);
  expect(toJson(tree)).toMatchSnapshot();
});

describe("SearchField Text Loaded", () => {
  it("contains Text", () => {
    const wrapper = shallow(<SearchField artistName={""} />);
    expect(wrapper.contains("Search Artist"));
  });
});
