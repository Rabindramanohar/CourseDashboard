import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "./../../redux/actions/courseActions";
import { loadAuthors } from "./../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./courseForm";
import { newCourse } from "./../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length == 0) {
      loadCourses().catch(error => {
        alert("Loading course failed: " + error);
      });
    } else {
      setCourse({...props.course})
    }

    if (authors.length == 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed: " + error);
      });
    }
  }, [props.course]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse(preCourse => ({
      ...preCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value, // [name] js computation
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push('/courses');
    });
  };
  return (
    <>
      <CourseForm
        course={course}
        authors={authors}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

function mapStateToProps(state) {
  // debugger;
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
