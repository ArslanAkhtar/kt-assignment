import { shallow } from "enzyme";
import React from "react";
import SearchArtist from "./SearchArtist";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<SearchArtist />);
});

it("renders correctly with Snapshot", () => {
  const tree = shallow(<SearchArtist />);
  expect(toJson(tree)).toMatchSnapshot();
});

describe("Contain Name", () => {
  it("contains Name", () => {
    const wrapper = shallow(<SearchArtist />);
    expect(wrapper.contains("Search Artist"));
  });
});
