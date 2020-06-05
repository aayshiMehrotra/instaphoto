import _posts from '../data/posts';
import {combineReducers} from 'redux'
function comments (state = [],action)  {
    switch(action.type){
        case 'ADD_COMMENT': 
        if(!state[action.id]) {
            console.log({ ...state, [action.id] :[action.comment ]})
            return { ...state, [action.id] :[action.comment ]}
        }
        else {
            console.log({...state, [action.id]: [...state[action.id],action.comment]})
            return {...state, [action.id]: [...state[action.id],action.comment]}
        }
        case 'SHOW_COMMENTS':
            return action.comments
        default:  return state;

        
    }
}
function posts  (state = [],action)  {
    switch(action.type){
        case 'REMOVE_POST': 
        console.log(state.filter((post) => Number(post.id) !== Number(action.id)))
        console.log(action.id,'aayshi')
        return state.filter((post) =>  Number(post.id) !== Number(action.id))
        case 'ADD_POST': return [...state, action.post]
        case 'SHOW_POSTS': return action.posts
        default:  return state;
    }
}



const rootReducer =  combineReducers({posts,comments})
export default rootReducer;