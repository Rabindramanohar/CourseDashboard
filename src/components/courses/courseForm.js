import { PropTypes } from "prop-types";
import React from "react";
import TextInput from "./../common/TextInput";
import SelectInput from "./../common/SelectInput";

function  courseForm({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) {
  return (
    <div>
      <form onSubmit={onSave}>
        <h2>{course.id ? "Edit" : "Add"}-Course</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <TextInput
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          error={errors.title}
        />

        <SelectInput
          name="authorId"
          label="AuthorId"
          value={course.authorId || ""}
          defaultOption="Select Author"
          options={authors.map((author) => ({
            value: author.id,
            text: author.name,
          }))}
          onChange={onChange}
          error={errors.author}
        />

        <TextInput
          name="category"
          value={course.category}
          label="Category"
          onChange={onChange}
          error={errors.category}
        />

        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "saving..." : "save"}
        </button>
      </form>
    </div>
  );
}

courseForm.propTypes = {
  // course, authors, onSave, onChange, saving = false, errors = {}
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default courseForm;
