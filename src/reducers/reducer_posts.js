import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// action contem o id do post
export default function(state = {}, action) {
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state,  };
            // newState[post.id] = post;
            // return newState;
            // same  as \/
            return { ...state, [action.payload.data.id]: action.payload.data };

        case DELETE_POST:
                    // if state object has the key post id
                    // just drop it dont present the id anymore
            return _.omit(state, action.payload);
    default:
        return state;
    }
}