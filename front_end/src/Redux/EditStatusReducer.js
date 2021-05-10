const editStatusInitialState = true;
const EditStatusReducer = (state = editStatusInitialState, action) => {
    switch (action.type) {
        case 'change_edit':
            return !state
        default:
            return state
    }
}

export default EditStatusReducer;