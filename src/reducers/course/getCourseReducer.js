import { getCourse } from "../../actions/actionTypes";

const initialState = {
    course: {},
    error: ""
}

function getCourseReducer(state = initialState, action){
    switch (action.type) {
        case getCourse.GET_COURSE_PENDING: 
            return {
                ...state
            };
        case getCourse.GET_COURSE_FULFILLED:
            return {
                ...state,
                course: action.payload
            };
        case getCourse.GET_COURSE_REJECTED:
            return {
                ...state,
                error: action.payload.message
            }        
        default:
            return state;
    }
}

export default getCourseReducer;