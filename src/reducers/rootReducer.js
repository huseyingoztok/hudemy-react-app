import { combineReducers } from "redux";
import listCoursesReducer from "./course/listCoursesReducer";
import createCourseReducer from "./course/createCourseReducer";
import deleteCourseReducer from "./course/deleteCourseReducer";
import getCourseReducer from "./course/getCourseReducer";
import editCourseReducer from "./course/editCourseReducer";
const rootReducer = combineReducers({
    listCoursesReducer,
    createCourseReducer,
    deleteCourseReducer,
    getCourseReducer,
    editCourseReducer
})

export default rootReducer;