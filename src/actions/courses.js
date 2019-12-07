import {
  fetchCourses,
  postCourse,
  deleteCourse,
  getCourse,
  editCourse
} from "./actionTypes";
import axios from "axios";
import { API_BASE } from "../config/.env";

export function getCourses() {
  return dispatch => {
    dispatch({
      type: fetchCourses.FETCH_COURSES,
      payload: axios
        .get(`${API_BASE}/courses`)
        .then(result => result.data.courses)
    });
  };
}

export function createCourse({ title, instructor, cover }) {
  return dispatch => {
    dispatch({
      type: postCourse.POST_COURSE,
      payload: axios.post(`${API_BASE}/courses`, { title, instructor, cover })
    });
  };
}

export function removeCourse(id) {
  return dispatch => {
    dispatch({
      type: deleteCourse.DELETE_COURSE,
      payload: axios
        .delete(`${API_BASE}/courses/${id}`)
        .then(result => Object.assign({}, result.data, { id }))
    });
  };
}

export function getCourseById(_id) {
  return dispatch => {
    dispatch({
      type: getCourse.GET_COURSE,
      payload: axios
        .get(`${API_BASE}/courses/${_id}`)
        .then(result => result.data.course)
    });
  };
}

export function updateCourse(_id, course){
  return dispatch => {
    dispatch({
      type: editCourse.EDIT_COURSE,
      payload: axios.put(`${API_BASE}/courses/${_id}`, course)
    })
  }
}