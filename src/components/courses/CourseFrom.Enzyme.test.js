import React from "react";
import { shallow } from "enzyme";
import CourseForm from "./CourseForm";

// factory function
function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("render forms and headers", () => {
  const wrapper = renderCourseForm();
  //   console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

// label save button
it('label save buttons as "Save" when not saving', () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('label save buttons as "Saving..." when not saving', () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
