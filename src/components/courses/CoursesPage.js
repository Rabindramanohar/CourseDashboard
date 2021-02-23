import React from "react";
import { connect } from "react-redux";
import * as courseActions from "./../../redux/actions/courseActions";
import * as authorActions from "./../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidUpdate() {
    // console.log("checking.......");
    if(this.props.courses.length == 0) {
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading course failed: " + error);
    });
  }

  if(this.props.authors.length == 0) {
    this.props.actions.loadAuthors().catch((error) => {
      alert("Loading authors failed: " + error);
    });
  }

  }

  componentWillUnmount() {
    this.props.actions.loadCourses();
    this.props.actions.loadAuthors();
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

function mapStateToProps(state) {
  // debugger;
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
