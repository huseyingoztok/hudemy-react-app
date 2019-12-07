import React from "react";
import { connect } from "react-redux";
import { getCourses, removeCourse } from "../../actions/courses";
import NegativeErrorMessages from "../NegativeErrorMessages";
import { Card, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { hashLoaderStyle } from "../../helpers/customStyles";
class CoursesPage extends React.Component {
  handleDelete = (e, id) => {
    if (id) {
      this.props.removeCourse(id);
      
    }
  };
  componentDidMount(){
    this.props.getCourses();

  }
  render() {
    const extra = id => {
      return (
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="blue" as={Link} to={`/course/edit/${id}`}>
              <Icon name="pencil" />
              Edit
            </Button>
            <Button basic color="red" onClick={e => this.handleDelete(e, id)}>
              <Icon name="trash" />
              Delete
            </Button>
          </div>
        </Card.Content>
      );
    };
    const isCourseListEmpty = (
      <div>
        <h4>There are no courses yet.</h4>
      </div>
    );
    const fetchingCoursesHasError = (
      <div>
        <NegativeErrorMessages message={this.props.error} />
      </div>
    );
    const courseList = (
      <Card.Group itemsPerRow={3}>
        {this.props.courses.filter(c => !this.props.courseId || c._id !== this.props.courseId).map(course => {
          return (
            <Card
              key={course._id}
              image={course.cover}
              header={`${course.title} - ${course.instructor}`}
              extra={extra(course._id)}
            />
          );
        })}
      </Card.Group>
    );
    const pageLoading = (
      <HashLoader
        css={hashLoaderStyle}
        sizeUnit={"px"}
        size={150}
        color={"#123abc"}
        loading={this.props.fetching}
      />
    );
    return (
      <div>
        <h2>
          Courses
          <Button
            style={{ float: "right" }}
            color="green"
            as={Link}
            to="/course/create"
          >
            <Icon name="plus" />
            Add New Course
          </Button>
        </h2>
        <hr />
        {pageLoading}
        {!this.props.fetching &&
          (this.props.error
            ? fetchingCoursesHasError
            : this.props.courses.length === 0 && !this.props.fetching
            ? isCourseListEmpty
            : courseList)}
      </div>
    );
  }
}

function mapStateToProps({ listCoursesReducer, deleteCourseReducer }) {
  return {
    courses: listCoursesReducer.courses,
    error: listCoursesReducer.error,
    fetching: listCoursesReducer.fetching || deleteCourseReducer.fetching,
    courseId: deleteCourseReducer.courseId
  };
}

const mapDispatchToProps = {
  getCourses,
  removeCourse
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
