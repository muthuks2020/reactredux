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

    return {
        dispatch(action) {
            currentState = currentReducer(currentState, action);
            listener()
            return action;
        },
        subscribe(newListener) {
            listener = newListener;
        },
        getState() {
            return currentState;
        }
    };
}

/*
 Example usage of our Mini Redux.
 Copy pasted from the Redux official github page: https://github.com/reactjs/redux#the-gist
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })



// reducers.js
export default theDefaultReducer = (state = 0, action) => state;

export const firstNamedReducer = (state = 1, action) => state;

export const secondNamedReducer = (state = 2, action) => state;

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer
});

const store2 = createStore(rootReducer);
console.log(store2.getState());
// {theDefaultReducer : 0, firstNamedReducer : 1, secondNamedReducer : 2}
