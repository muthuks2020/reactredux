# reactredux
React redux

I will give a super quick step-by-step tutorial (only 2 steps!) of to use react-redux
so we know how it works before we will implement it ourselves!

1. Make your store accessible from React
2. Make your component access Redux data



What problem does combineReducer solve?

In the example usage of Redux above, we use a reducer called counter. A reducer
function is basically a long switch.
When the application grows with more and more actions, the reducer function
grows with it. We want to avoid large functions because they are difficult to
overview, extend and combine.combineReducer lets us split the reducer up to 
smaller reducers and combine them so we can use them in Redux

