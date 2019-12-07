import { editCourse } from "../../actions/actionTypes";

const initialState = {
    loading: false,
    error: ""
}

function editCourseReducer(state = initialState, action){
    switch (action.type) {
        case editCourse.EDIT_COURSE_PENDING:
            return {
                ...state,
                loading: true
            };
        case editCourse.EDIT_COURSE_FULFILLED:
            return {
                ...state,
                loading: false
            };
        case editCourse.EDIT_COURSE_REJECTED:
            return {
                ...state,
                error: action.payload.message,
                loading: false
            }        
        default:
            return state;
    }
}

export default editCourseReducer;