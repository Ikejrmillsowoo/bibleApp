export const booksReducer = (
  state = { book: null, chapter: null, verse: null },
  action
) => {
  switch (action.type) {
    case "SEARCH_BOOKS":
      console.log(
        `book: ${action.payload.book} ${action.payload.chapter} ${action.payload.verse}`
      );
      return {
        ...state,
        book: action.payload.book,
        chapter: action.payload.chapter,
        verse: action.payload.verse,
      };
    default:
      return state;
  }
};
