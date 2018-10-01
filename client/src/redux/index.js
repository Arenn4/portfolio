import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';


const initState = {
    skills: []
}


export const getSkills = () => {
    return (dispatch) => {
        axios.get(`/skills`).then(res => {
            dispatch({
                type: "GET_SKILLS",
                skills: res.data
            })
        })
    }
}

export const sendEmail = (msg) => {
    return (dispatch) => {
        axios.post(`/send`, msg).then(res => {
            dispatch({
                type: "SEND_EMAIL"
            })
        })
    }
}


const reducer =(prevState = initState, action) =>{
    switch(action.type){
        case "GET_SKILLS":
            return {
                skills: action.skills
            }
        case "SEND_EMAIL":
            return;
        default:
            return prevState
    }
}




export default createStore(
    reducer,
    applyMiddleware(thunk)
);