const accountInitialState = localStorage.getItem('account');
const accountReducer = (state = accountInitialState, action) => {
    switch (action.type) {
        case 'login account':
            return null;
        case 'change account':
            return  action.account;
        default:
            return state
    }
}

export default accountReducer;