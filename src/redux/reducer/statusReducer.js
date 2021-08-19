const initialState = []

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UP_STATUS":
            state = [action.data, ...state]
            return state;

        default:
            return state;
    }
}
export default statusReducer