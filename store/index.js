import { createStore, combineReducers, applyMiddleware } from "redux";
import initialData from "./initialData";
import { userReducer, booksReducer } from "./reducer";
import ReduxThunk from "redux-thunk";

// const reducers = combineReducers({
//   booksReducer,
//   userReducer,
// });

// const schema = {
//   verseSchema,
//   userSchema,
// };

export const store = createStore(
  (state, action) => booksReducer(state, action),
  initialData
);
console.log(`this here: ${store.getState()}`);

// const newStore = createStore(
//   (state, action) => booksReducer(state, action),
//   verseSchema,
//   (state, action) => userReducer(state, action),
//   userSchema
// );

// const userStore = createStore(
//   (state, action) => userReducer(state, action),
//   userSchema
// );

export default store;
