import { deleteCourse } from "../../actions/actionTypes";

const initialState = {
    courseId: "",
    error: "",
    fetching: false
}

function deleteCourseReducer(state = initialState, action){
    switch (action.type) {
        case deleteCourse.DELETE_COURSE_PENDING: 
            return {
                ...state,
                fetching: true
            };
        case deleteCourse.DELETE_COURSE_FULFILLED:
            return {
                ...state,
                courseId: action.payload.id,
                fetching: false
            };
        case deleteCourse.DELETE_COURSE_REJECTED:
            return {
                ...state,
                error: action.payload.message,
                fetching: false
            }        
        default:
            return state;
    }
}

export default deleteCourseReducer;