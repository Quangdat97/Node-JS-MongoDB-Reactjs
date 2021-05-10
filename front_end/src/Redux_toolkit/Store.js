import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from './AccountReducer'

const rootReducer = {
    Accounts: AccountReducer
}

const store2 = configureStore({
    reducer: rootReducer
});

export default store2;