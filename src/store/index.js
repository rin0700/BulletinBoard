import { createStore } from "redux";

const initialState = {
  addPost: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        addPost: !state.addPost,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
