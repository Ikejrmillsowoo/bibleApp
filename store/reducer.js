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
        email: action.payload,
        fullname: action.payload,
      };
    default:
      return state;
  }
};
