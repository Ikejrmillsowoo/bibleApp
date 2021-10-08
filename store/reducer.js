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

// export const chapterReducer = (state = { chapter: null }, action) => {
//   switch (action.type) {
//     case "SEARCH_CHAPTER":
//       console.log(`chapter: ${action.payload} ${state}`);
//       return { ...state, chapter: action.payload };
//     default:
//       return state;
//   }
// };

// export const verseReducer = (state = { verse: null }, action) => {
//   switch (action.type) {
//     case "SEARCH_VERSE":
//       console.log(`verse: ${action.payload}`);
//       return { ...state, verse: action.payload };
//     default:
//       return state;
//   }
// };
