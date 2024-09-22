function createStore(reducer) {
    let state;
    let listeners = [];
  
    function getState() {
      return state;
    }
  
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    }
  
    function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  
    // Initialize state by dispatching an empty action
    dispatch({});
  
    return { getState, dispatch, subscribe };
  }
  
  export default createStore;