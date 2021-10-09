import { createStore, combineReducers, applyMiddleware } from "redux";
import initialData from "./initialData";
import { booksReducer, chapterReducer, verseReducer } from "./reducer";
import ReduxThunk from "redux-thunk";

export default createStore(
  (state, action) => booksReducer(state, action),
  initialData
  //applyMiddleware(ReduxThunk)
);
