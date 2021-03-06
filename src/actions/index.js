import axios from "axios";

import {SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH} from "./types";


export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComment() {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');
    return{
        type: FETCH_COMMENT,
        payload: response
    };
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}
