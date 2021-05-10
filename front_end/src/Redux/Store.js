import accountReducer from './accountReducer';
import EditStatusReducer from './EditStatusReducer';
var redux = require('redux');


const allReducer = redux.combineReducers({ 
    editStatus:EditStatusReducer,
    account:accountReducer
});

var store1 = redux.createStore(allReducer); 

store1.subscribe(()=>{
    console.log(JSON.stringify(store1.getState()));
})

export default store1;