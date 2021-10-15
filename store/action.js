export const newSearchBook = (newBook) => ({
  type: "SEARCH_BOOKS",
  payload: newBook,
});

export const newUser = (user) => ({
  type: "NEW_USER",
  payload: user,
});
