import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CourseForm from './CourseForm';

afterEach(cleanup);

function renderCourseForm(args) {
    let defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    const props = { ...defaultProps, ...args };
    return render(<CourseForm {...props} />);
}

it("should render add course header", () => {
    const {getByText} =renderCourseForm();
    getByText("Add Course");
});

it("Should level save button as 'Save' when not saving", () => {
    const { getByText } = renderCourseForm();
    getByText("Save");
});

it('Should level save button as "Saving" when saving', () => {
    const { getByText } = renderCourseForm({ saving: true });
    getByText("Saving...");
})