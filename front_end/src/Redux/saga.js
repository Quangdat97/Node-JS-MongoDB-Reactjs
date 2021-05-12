import {put, takeLatest, call, all, fork} from 'redux-saga/effects'
import * as actions from '../actions/action'
import axios from "axios";
import { home_click} from '../router/Link_dieuhuong';

export function* rootSaga() {
   yield all([
       fork(Logout),
       fork(Get_Name),
   ])
}

function* Change_Account_Saga(payload) { //paramaster from event dispatch login
    console.log(payload.value.account + '  12 '+payload.value.password)
    const res = yield call(fetchAccount(payload.value.account,payload.value.password))
    if(res.kq=='ok')
    {
        localStorage.setItem('account', res.account);
        localStorage.setItem('token', res.token);
        yield put(actions.Change_Account(res.account));
        home_click();
    }
    else{alert(res);}
    console.log(res);
    console.log(res.kq);
}

function* Login_Saga() {
    console.log('->Login ');
    yield put(actions.Login_Account()); 
}

function* Get_Name() {
    yield takeLatest('CHANGE_ACCOUNT',Change_Account_Saga);
}

function* Logout() {
    yield takeLatest('LOGIN_ACCOUNT',Login_Saga);
}

function fetchAccount(username,password) {
    return function() {
        return axios.post("http://localhost:5000/login",{username,password})
                .then(res => res.data)
    }
}

