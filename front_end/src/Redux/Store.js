import accountReducer from './accountReducer';
import EditStatusReducer from './EditStatusReducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';

var redux = require('redux');

const sagaMiddleware = createSagaMiddleware()

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const allReducer = redux.combineReducers({ 
    editStatus:EditStatusReducer,
    account:accountReducer
});

var store1 = redux.createStore(allReducer,redux.compose(redux.applyMiddleware(sagaMiddleware), reduxDevTools)); 

store1.subscribe(()=>{
    console.log(JSON.stringify(store1.getState()));
})

sagaMiddleware.run(rootSaga);

export default store1;