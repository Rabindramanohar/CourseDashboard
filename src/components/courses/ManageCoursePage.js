import React from "react";
import { connect } from "react-redux";
import * as courseActions from "./../../redux/actions/courseActions";
import * as authorActions from "./../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class ManageCoursePage extends React.Component {
  componentDidUpdate() {
    // console.log("checking.......");
    const {courses, authors, actions} = this.props;
    if(courses.length == 0) {
      actions.loadCourses().catch((error) => {
      alert("Loading course failed: " + error);
    });
  }

  if(authors.length == 0) {
    actions.loadAuthors().catch((error) => {
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
        <h2>Manage Courses</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
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
    courses: state.courses, 
    authors: state.authors,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);