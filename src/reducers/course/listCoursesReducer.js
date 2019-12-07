import { fetchCourses } from "../../actions/actionTypes";

const initialState = {
    courses: [],
    error: "",
    fetching: false
}

function listCoursesReducer(state = initialState, action){
    switch (action.type) {
        case fetchCourses.FETCH_COURSES_PENDING: 
            return {
                ...state,
                fetching: true
            };
        case fetchCourses.FETCH_COURSES_FULFILLED:
            return {
                ...state,
                courses: action.payload,
                fetching: false
            };
        case fetchCourses.FETCH_COURSES_REJECTED:
            return {
                ...state,
                error: action.payload.message,
                fetching: false
            }        
        default:
            return state;
    }
}

export default listCoursesReducer;