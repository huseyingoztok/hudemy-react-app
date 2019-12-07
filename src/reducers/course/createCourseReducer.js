import { postCourse } from "../../actions/actionTypes";

const initialState = {
    loading: false,
    error: ""
}

function createCourseReducer(state = initialState, action){
    switch (action.type) {
        case postCourse.POST_COURSE_PENDING:
            return {
                ...state,
                loading: true
            };
        case postCourse.POST_COURSE_FULFILLED:
            return {
                ...state,
                loading: false
            };
        case postCourse.POST_COURSE_REJECTED:
            return {
                ...state,
                error: action.payload.message,
                loading: false
            }        
        default:
            return state;
    }
}

export default createCourseReducer;