import axios from 'axios';
import { SET_POSTS, CLEAR_POSTS } from '../types';

export const getPosts = (pagination, callback) => async dispatch => {
    try {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pagination}`)
        callback(response?.data, true)
        dispatch({
            type: SET_POSTS,
            payload: response?.data
        });
    } catch (error) {
        callback(error, false)
        dispatch({
            type: CLEAR_POSTS,
            payload: {}
        });
    }
}