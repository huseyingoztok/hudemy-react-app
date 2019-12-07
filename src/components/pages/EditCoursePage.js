import React, { Component } from "react";
import EditCourseForm from "../EditCourseForm";
import { connect } from "react-redux";
import { getCourseById } from "../../actions/courses";

class EditPage extends Component {
  componentDidMount(){
    if (!this.props.movie && this.props.match.params._id) {
      this.props.getCourseById(this.props.match.params._id);
    }
  }
  render() {
    return (
      <div>
        <h2>Edit Page</h2>
        <hr />
        <EditCourseForm currentCourse={this.props.currentCourse ? this.props.currentCourse : this.props.getCourse } />
      </div>
    );
  }
}

function mapStateToProps({ getCourseReducer, listCoursesReducer}, props) {
  return {
    currentCourse: listCoursesReducer.courses.find(course => course._id === props.match.params._id),
    getCourse: getCourseReducer.course
  };
}

const mapDispatchToProps = {
  getCourseById
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
