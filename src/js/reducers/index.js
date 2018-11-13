import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { articles } from './articles';


console.log(`init rootReducer`);

export default combineReducers({
    items, // same as items: items,
    itemsHasErrored,
    itemsIsLoading,
    articles
});
