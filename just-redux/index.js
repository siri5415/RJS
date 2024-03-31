//import redux
const { createStore} = require('redux');


//initial state of the data
const initialState = {
    balance: 10000
};


//need a machanism to update the data store / state
const reducer = (state = initialState, action) =>{
       let newState = { ...state };

       switch (action.type) {
         case "WITHDRAW":
           newState.balance = newState.balance - action.value;
           break;
         case "DEPOSIT":
           newState.balance = newState.balance + action.value;
           break;
           default:
       }

       return newState;
}

//create a data store
const store = createStore(reducer);

console.log("Initial balance: " + initialState.balance);


// Subscribers (who will be notified whenever there is a change in the data of the store)
store.subscribe(() => {
    console.log("Updated balance is:" + store.getState().balance);
})


//publisher (will make a change to the data of store)
store.dispatch({
    type:"DEPOSIT",
    value:15000
});

//publisher (will make a change to the data of store)
store.dispatch({
    type:"WITHDRAW",
    value: 500
});
