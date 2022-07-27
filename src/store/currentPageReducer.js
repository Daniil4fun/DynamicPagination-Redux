let defaultState = {
    currentPage: 1
}

export function currentPageReducer(state = defaultState, action) {
    switch (action.type) {
        case "CHANGE_PAGE":
            return { ...state, currentPage: state.currentPage + action.payload }
        default:
            return state;
    }
}