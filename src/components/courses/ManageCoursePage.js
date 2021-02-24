import React from "react";
import { connect } from "react-redux";
import {loadCourses} from "./../../redux/actions/courseActions";
import {loadAuthors} from "./../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends React.Component {
  componentDidUpdate() {
    // console.log("checking.......");
    const {courses, authors, loadAuthors, loadCourses} = this.props;
    if(courses.length == 0) {
      loadCourses().catch((error) => {
      alert("Loading course failed: " + error);
    });
  }

  if(authors.length == 0) {
    loadAuthors().catch((error) => {
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
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
      loadCourses,
      loadAuthors
    }

function mapStateToProps(state) {
  // debugger;
  return {
    courses: state.courses, 
    authors: state.authors,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
