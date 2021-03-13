export const reducer = (state, action) => {
  //   switch (action.type) {
  if (action.type === "ADD_TASK") {
    const newList = [...state.list, action.payload];
    return {
      ...state,
      list: newList,
      isModalOpen: true,
      modalCOntent: "task added",
    };
  }
  if (action.type === "EMPTY_ENTRY") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_TASK") {
    const newList = state.list.filter((task) => task.id !== action.payload);
    return { ...state, list: newList };
  }
  if (action.type === "REMOVE_ALL") {
    const newList = [];
    return { list: newList };
  }

  throw new Error("No matching action type");
};
