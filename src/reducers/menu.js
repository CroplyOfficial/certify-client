// Contains the code for the reducer for the state of the sidebar (collapsed or not).

const menuReducer = (state = false, action) => {
    switch(action.type) {
        case "COLLAPSE":
            return !state // Returns true if the action to collapse the sidebar is executed.
        default: 
            return state // Returns false otherwise.
    }
}

export default menuReducer