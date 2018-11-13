import { ADD_ARTICLE } from "../constants/action-types";

console.log(`init articlesReducer`);

export function articles(state = [], action) {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log(`add article`);
            let newState = [...state, action.article];
            return newState;
        default:
            return state;
    }
};