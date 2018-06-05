import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234'

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    //type request of redux-promisse
    //payload as the request the midleware will resolve the request of payload
    return {
        type: FETCH_POSTS,
        payload: request
    }
}