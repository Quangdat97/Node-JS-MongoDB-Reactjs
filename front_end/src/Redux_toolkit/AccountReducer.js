import {createSlice} from '@reduxjs/toolkit'


const accountstatus = createSlice({
    name:'Login',
    initialState:{account:localStorage.getItem('account'), edit_status:false},
    reducers:{
        login_account: (state,action)=>{
            state.account = null;
        },
        change_account: (state,action)=>{
            state.account = action.payload.toUpperCase();
        },
        change_edit: (state,action)=>{
            state.edit_status=!state.edit_status;
        }
    }
});


const {reducer, actions} = accountstatus;
export const {login_account, change_account,change_edit} =actions;
export default reducer;