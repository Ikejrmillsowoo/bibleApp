import { createStore, combineReducers, applyMiddleware } from "redux";
import initialData from "./initialData";
import { booksReducer, chapterReducer, verseReducer } from "./reducer";
import ReduxThunk from "redux-thunk";

// const reducers = combineReducers({
//    booksReducer,
//   // chapter: chapterReducer,
//   // verse: verseReducer,
// });

export default createStore(
  (state, action) => booksReducer(state, action),
  initialData
  //applyMiddleware(ReduxThunk)
);
