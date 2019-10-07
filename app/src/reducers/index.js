import { GET_FRIENDS_START, GET_FRIENDS_SUCCESS, GET_FRIENDS_ERROR } from '../actions';
import { initialState } from '../state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS_START: {
            return {
                ...state
            }
        }
        case GET_FRIENDS_SUCCESS: {
            return {
                ...state,
                friends: [...state.friends, ...action.payload.data]
            }
        }
        case GET_FRIENDS_ERROR: {
            return {...state,
            error: action.payload}
        }
        default: {
            return state;
        }
    }
}