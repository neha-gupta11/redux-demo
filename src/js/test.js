import {createStore, applyMiddleware} from "redux";


const reducer = function (state=1, action) {

    switch (action.type) {
        case "INC":
            console.log("*****************888",state + 1);
            return state + 1;
        case "DES":
            return state - 1;
        case '@@redux/INIT':
            return 15;
        default:
            console.log(state, action.type);
            return state;
    }
};

const logger = (store)=>(next)=>(action)=> {
    //console.log(next);
    console.log("action is fired ", action);
    next(action)
};

const middleware = applyMiddleware(logger);

const store = createStore(reducer, 11,middleware);

console.log(store.getState(), '*************');

// to listen the store change we need subscriber
store.subscribe(()=>{
    console.log("store changed", store.getState());
});


store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "DES"});
store.dispatch({type: "INC"});
store.dispatch({type: "DES"});

