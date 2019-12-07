import React, { Component } from "react";
import CreateCourseForm from "../CreateCourseForm";

export default class CreateCoursePage extends Component {
  render() {
    return (
      <div>
        <h2>Create Course</h2>
        <hr />
        <CreateCourseForm />
      </div>
    );
  }
}
