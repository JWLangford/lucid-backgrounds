import { App } from "../app";
import { shallow } from "enzyme";
import * as React from "react";

describe("<App>", () => {
  it("should render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div>Hello</div>)).toBeTruthy();
  });
});
