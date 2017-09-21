
import {createStore, combineReducers} from "redux";


const userReducer=(state={},action)=>{
    const newState=Object.assign({},state);
    switch(action.type){
        case "CHANGE_NAME":{
            newState.name=action.payload;
            break;
        }
        case "DES":{
            newState.age=action.payload;
            break;
        }

    }
    return newState;
};

const tweetsReducer=(state=[],action)=>{
    //switch(action.type){
    //    case "INC":
    //        return action.payload;
    //    case "DES":
    //        return state - action.payload;
    //}

    return state;
};

const reducers=combineReducers({
    user:userReducer,
    tweets:tweetsReducer
});

const reducer = function(state=1, action){
   switch(action.type){
       case "INC":
           return state+action.payload;
       case "DES":
           return state - action.payload;
   }
};

const store = createStore(reducers, {
    user:{
        name:"Neha",
        age:"27"
    },
    tweets:[]
});

console.log(store);

// to listen the store change we need subscriber
store.subscribe(()=>{
    console.log("store changed", store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload: "Naina"});
store.dispatch({type:"CHANGE_AGE", payload: 28});
store.dispatch({type:"ADD_TWEET", payload: ["test"]});
store.dispatch({type:"DELETE_TWEET", payload: ["work"]});

