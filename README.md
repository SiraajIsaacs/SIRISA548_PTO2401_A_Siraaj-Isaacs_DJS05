# Tally App - Redux-Inspired Store

This project demonstrates a simple state management solution inspired by Redux to handle a counter tally. It manages state changes, including incrementing, decrementing, and resetting the counter, and logs the state to the console.

## Running the Project
To run the project:
1. Clone the repository.
2. Navigate to the `src` folder and run `node tallyApp.js` to see the state updates logged in the console.

## Approach
I implemented a Redux-like store with `getState`, `dispatch`, and `subscribe` methods. The reducer handles the three main actions (`ADD`, `SUBTRACT`, and `RESET`), and the app logs state changes via a subscription.

## User Stories (Gherkin Syntax)
Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```