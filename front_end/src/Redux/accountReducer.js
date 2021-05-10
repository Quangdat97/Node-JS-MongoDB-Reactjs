const accountInitialState = 'Login';
const accountReducer = (state = accountInitialState, action) => {
    switch (action.type) {
        case 'login account':
            return 'Login';
        case 'change account':
            return action.account;
        default:
            return state
    }
}

export default accountReducer;