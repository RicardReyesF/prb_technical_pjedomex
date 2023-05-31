import axios from 'axios';

export function  getAllCharacters(){
    return async function (dispatch){
        const recipesAll = await axios.get('https://rickandmortyapi.com/api/character')
        return dispatch({
            type: 'GET_ALL_CHARACTERS',
            payload: recipesAll.data.results
        })
    }
}
