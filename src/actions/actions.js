import {database} from '../database/config';
export const AddingPosttoDatabase = (post) => {
    return (dispatch) => {
        return database.ref('posts').update({
            [post.id]: post
        }).then(() => {
            dispatch(addPosts(post));
        }).catch((error) => {
            console.log(error);
        })
    }
}

export const AddingCommentstoDatabase = (comment,id) => {
    return (dispatch) => {
        return database.ref(`comments/${id}`).push(comment).then(() => {
            dispatch(addComment(comment,id));
        }).catch((error) => {
            console.log(error);
        })
    }
}

export const getPostsfromDatabase = () => {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshots) => {
            let posts = [];
            snapshots.forEach((childSnapshot) =>{
                posts.push(childSnapshot.val())
            } );
            dispatch(showPosts(posts));
        })
    }
}

export const getCommentsfromDatabase = () => {
    return (dispatch) => {
        return database.ref(`comments`).once('value').then((snapshots) => {
            let comments = [];
            snapshots.forEach((childSnapshot) =>{
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            } );
            dispatch(showComments(comments));
        })
    }
}

export const removePostsfromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            database.ref(`comments/${id}`).remove().then(() => {
                dispatch(removePosts(id));
            })
            
        })
    }
}
export const showPosts = (posts) => {
    return {
        type:'SHOW_POSTS',
        posts
    }
}
export const removePosts = (id) => {
    return {
        type:'REMOVE_POST',
        id
    }
}

export const addPosts = (post) => {
    return {
        type:'ADD_POST',
        post
    }
}

export const addComment = (comment,id) => {
    return {
        type:'ADD_COMMENT',
        comment,
        id
    }
}
export const showComments = (comments) => {
    return {
        type:'SHOW_COMMENTS',
        comments
    }
}
