let defaultState = {
    posts: []
}

const ADD_POSTS = "ADD_POSTS"

export function postsReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_POSTS:
            return { ...state, posts: [...state.posts, ...action.payload] }
        default:
            return state;
    }
}