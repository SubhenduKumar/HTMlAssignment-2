const redux = require("redux"); //previous way to access redux

// import redux from "redux";             //new way to access redux if we using this then we have to midfy pakage json then it will work

const { createStore } = redux

//Action Type Constant
const INCREMENT_COUNTER = "INCREMENT-COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
//Action -Actions are the only source of information for the store as per Redux official
// documentation. It carries a payload of information from your application to store.
// As discussed earlier, actions are plain JavaScript object that must have a type attribute to indicate the type of action performed.

// {
//     type: INCREMENT_COUNTER;
// }

// {
//     type: DECREMENT_COUNTER;
// }


//Action Creator

const incrementCount = () => {
    return { type: INCREMENT_COUNTER }
}
const decrementCount = () => {
    return { type: DECREMENT_COUNTER }
}



// Initial state

const initialState = {
    count: 0
}

//Reducer
// 1. Initial State
// 2. Contains two parametrs : prev state and action
// 2. On the basis of action, it will return the updated state(logic)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT-COUNTER':
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT_COUNTER":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

//store

const store = createStore(reducer)


//getState() => its a method which returns the current state
console.log(store.getState());

const unsubsribe = store.subscribe(() => console.log("Subscribed"))

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())



console.log(store.getState());


unsubsribe()