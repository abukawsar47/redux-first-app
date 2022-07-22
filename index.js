// state
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  users: [{ name: "Abu Kawsar" }],
};

//actions => Object => type, payload
//INCREMENT COUNTER
const INCREMENT = "INCREMENT";
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

//DECREMENT COUNTER
