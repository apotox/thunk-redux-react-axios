


const defaultState = {
    items:[]
}

const listTodoReducer = (state=defaultState,action)=>{

    switch(action.type){
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default listTodoReducer