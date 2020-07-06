import axios from 'axios';
import { SET_POSTS, CLEAR_POSTS } from '../types';

export const getPosts = () => async dispatch => {
    try {
        const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
        dispatch({
            type: SET_POSTS,
            payload: response?.data
        });
    } catch (error) {
        dispatch({
            type: CLEAR_POSTS,
            payload: {}
        });
    }
}