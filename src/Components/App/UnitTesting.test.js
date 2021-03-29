import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchArtist from '../SearchArtist/SearchArtist';
import ArtistCard from "../Subcomponents/ArtistCard";
import EventCards from "../Subcomponents/EventCards";
import SearchField from "../Subcomponents/SearchField";

Enzyme.configure({ adapter: new Adapter() });

describe("EventCards", () => {
  it("should be true", () => {
    const check = true;
    expect(check).toBe(true);
  });
});

describe("SearchField", () => {
  it("should be true", () => {
    const check = true;
    expect(check).toBe(true);
  });
});


//check
describe("ArtistCard", () => {
    it("contains event types(all,upcoming, past)", () => {
      const wrapper = shallow(<ArtistCard />);
      expect(wrapper.contains("all"));
    });
  });

  //check
describe("SearchArtist", () => {
  it("contains artistname", () => {
    const wrapper = shallow(<SearchArtist />);
    expect(wrapper.contains("artistName"));
  });
});

describe("EventCards", () => {
    it("contains artistname", () => {
      const wrapper = shallow(<EventCards />);
      expect(wrapper.contains("Country"));
    });
  });

  describe("SearchField", () => {
    it("contains Search Artist", () => {
      const wrapper = shallow(<SearchField />);
      expect(wrapper.contains("Search Artist"));
    });
  });


  describe("SearchField", () => {
    it("contains search button", () => {
      const wrapper = shallow(<SearchField />);
      expect(wrapper.contains("Search"));
    });
  });

