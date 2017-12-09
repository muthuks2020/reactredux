/*
 You will need node 6.9 or later.
 Run with: node my-redux.js --harmony
*/

/*
 Mini Redux implementation
*/

function createStore(reducer, initialState) {
    var currentReducer = reducer;
    var currentState = initialState;
    var listener = () => {};

    function dispatch(action) {
        currentState = currentReducer(currentState, action);
        listener()
        return action;
    }

    function subscribe(newListener) {
        listener = newListener;
    }

    function getState() {
        return currentState;
    }

    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({ type: "INIT" });
    return {
        dispatch,
        subscribe,
        getState
    };
}

/*
 Mini combineReducers implementation
*/
function combineReducers(reducers) {
  // First get an array with all the keys of the reducers (the reducer names)
  const reducerKeys = Object.keys(reducers);

  return function combination(state = {}, action) {
    // This is the object we are going to return.
    const nextState = {}

    // Loop through all the reducer keys
    for (let i = 0; i < reducerKeys.length; i++) {
    // Get the current key name
    const key = reducerKeys[i];
    // Get the current reducer
    const reducer = reducers[key]
    // Get the the previous state
    const previousStateForKey = state[key]
    // Get the next state by running the reducer
    const nextStateForKey = reducer(previousStateForKey, action)
    // Update the new state for the current reducer
    nextState[key] = nextStateForKey;
    }
    return nextState;
  }
}

// reducers.js
const theDefaultReducer = (state = 0, action) => state;

const firstNamedReducer = (state = 1, action) => state;

const secondNamedReducer = (state = 2, action) => state;

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer
});

const store = createStore(rootReducer);
console.log(store.getState());
// {theDefaultReducer : 0, firstNamedReducer : 1, secondNamedReducer : 2}
