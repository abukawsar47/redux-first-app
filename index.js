const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";
// state
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  users: [{ name: "Abu Kawsar" }],
};
//add user is an action
//actions => Object => type, payload
//INCREMENT COUNTER

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
// Action will have two things type and payload
//DECREMENT COUNTER

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
//add user
// When the action type is dispatched then the data must also be dispatched
/* const addUser = () => {
  return {
    type: ADD_USER,
  };
}; */

//1. state
//2. dispatch action
//3. reducer
//4. store

// Reducer - create reducer for counter

const counterReducer = (state = incrementCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        const: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        const: state.count - 1,
      };

    default:
      state;
  }
};
