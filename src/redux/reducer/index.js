
const initialState ={
    allCharacter: [],
}

export function rootReducer (state = initialState, action)  {
    switch(action.type){
        case 'GET_ALL_CHARACTERS':
            return{
                ...state,
                allCharacter: action.payload,
        }

        default: return state
    }
}