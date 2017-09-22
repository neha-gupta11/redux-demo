import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"


const reducer = function (state, action) {

    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            console.log("decrement",state);
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

const middleware = applyMiddleware(thunk,logger);

const store = createStore(
    reducer,
    middleware
);


console.log(store.getState());

// to listen the store change we need subscriber
//store.subscribe(()=>{
//    console.log("store changed", store.getState());
//});



// It still recognizes plain object actions
store.dispatch({ type: 'INCREMENT' })

// But with thunk middleware, it also recognizes functions
store.dispatch(function (dispatch) {
    // ... which themselves may dispatch many times
    dispatch({ type: 'INCREMENT' })
    dispatch({ type: 'INCREMENT' })
    dispatch({ type: 'INCREMENT' })

    setTimeout(() => {
        // ... even asynchronously!
        dispatch({ type: 'DECREMENT' });
        console.log(store.getState());
    }, 1000)
});




