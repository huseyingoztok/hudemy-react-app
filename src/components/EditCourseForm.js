import React from "react";
import { Form, Button, Image } from "semantic-ui-react";
import { clearFix } from "../helpers/customStyles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateCourse } from "../actions/courses";

class EditCourseForm extends React.Component {
  constructor(props) {
    super(props);
    const { currentCourse } = props
    console.log(props);
    this.state = {
      _id: "",
      title: "",
      instructor: "",
      cover: "",
      errors: [],
      isSubmitOk: false
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.currentCourse._id && !state._id) {
      return {
        _id: props.currentCourse._id,
        title: props.currentCourse.title,
        instructor: props.currentCourse.instructor,
        cover: props.currentCourse.cover
      };
    }

    return null;
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.formHasError();
    this.setState({
      errors: errors
    });
    if (Object.keys(errors).length === 0) {
      const { title, instructor, cover } = { ...this.state };
      const course = { title, instructor, cover };
      this.props.updateCourse(this.state._id, course);
      this.setState({
        isSubmitOk: true
      });
    }
  };
  formHasError = () => {
    const errors = {};
    if (!this.state.title) {
      errors.titleError = "Course Name can not be empty.";
    }
    if (!this.state.instructor) {
      errors.instructorError = "Instructor can not be empty.";
    }
    if (!this.state.cover) {
      errors.coverError = "Cover Photo can not be empty.";
    }
    return errors;
  };
  render() {
    return (
      <div>
        <Form loading={this.props.loading}>
          <Form.Input
            error={
              this.state.errors.titleError
                ? this.state.errors.titleError
                : false
            }
            fluid
            label="Course Name"
            placeholder="Course Name"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Form.Input
            error={
              this.state.errors.instructorError
                ? this.state.errors.instructorError
                : false
            }
            fluid
            label="Intructor"
            placeholder="Intructor"
            name="instructor"
            value={this.state.instructor}
            onChange={this.handleChange}
          />
          <Form.Input
            error={
              this.state.errors.coverError
                ? this.state.errors.coverError
                : false
            }
            fluid
            label="Cover Photo"
            placeholder="Cover Photo"
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
          />
          <Image src={this.state.cover} size="small" />
          <div style={clearFix}></div>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        {!this.props.loading && this.state.isSubmitOk && (
          <Redirect to="/courses" />
        )}
      </div>
    );
  }
}

function mapStateToProps({ editCourseReducer }) {
  return {
    loading: editCourseReducer.loading
  };
}

const mapDispatchToProps = {
  updateCourse
};
export default connect(mapStateToProps, mapDispatchToProps)(EditCourseForm);
