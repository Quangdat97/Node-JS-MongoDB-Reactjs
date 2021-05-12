export const LOGIN_REQUEST = 'login account';
export const CHANGE_ACCOUNT_SUCCESS = 'change account';


export function Login_Account () {
    return {
        type: LOGIN_REQUEST,
    }
}

export function Change_Account (account) {
    return {
        type: CHANGE_ACCOUNT_SUCCESS,
        account
    }
}

