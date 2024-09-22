import createStore from './store.js';
import counterReducer from './reducer.js';

// Create the store
const store = createStore(counterReducer);

// Subscribe to state changes
store.subscribe(() => {
  console.log('State:', store.getState());
});

// SCENARIO 1: Initial State Verification
console.log("Initial State:", store.getState());

// SCENARIO 2: Incrementing the Counter
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });

// SCENARIO 3: Decrementing the Counter
store.dispatch({ type: 'SUBTRACT' });

// SCENARIO 4: Resetting the Counter
store.dispatch({ type: 'RESET' });