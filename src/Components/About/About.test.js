import { shallow } from "enzyme";
import React from "react";
import About from "./About";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<About />);
});

it("renders correctly with Snapshot", () => {
  const tree = shallow(<About />);
  expect(toJson(tree)).toMatchSnapshot();
});

describe("Contain Name", () => {
  it("contains Name", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.contains("Muhammad Arslan Akhtar"));
  });
});
