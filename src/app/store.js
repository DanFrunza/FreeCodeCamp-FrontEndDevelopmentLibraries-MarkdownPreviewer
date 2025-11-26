import { legacy_createStore as createStore, combineReducers } from "redux";
import { markdownReducer } from '../features/reducers/markdownReducer.js';


const rootReducer = combineReducers({
    markdown: markdownReducer
});

const store = createStore(rootReducer);

export { store };