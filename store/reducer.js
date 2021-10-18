export const booksReducer = (
  state = { book: null, chapter: null, verse: null },
  action
) => {
  switch (action.type) {
    case "SEARCH_BOOKS":
      return {
        ...state,
        book: action.payload.book,
        chapter: action.payload.chapter,
        verse: action.payload.verse,
      };
    case "NEW_USER":
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

// export const userReducer = (
//   state = { email: null, username: null, password: null },
//   action
// ) => {
//   switch (action.type) {
//     case "NEW_USER":
//       return {
//         ...state,
//         email: action.payload.email,
//         username: action.payload.username,
//         password: action.payload.password,
//       };
//     default:
//       return state;
//   }
// };
