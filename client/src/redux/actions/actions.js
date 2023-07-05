import {REMOVE_FAV, ADD_FAV, FILTER, ORDER, RESET} from './types';

export function addFav(character){
    return{
        type: ADD_FAV,
        payload: character,
    }
}

export function removeFav(id){
    return{
        type: REMOVE_FAV,
        payload: id,
    }
    
}
export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender,
    }
    
}
export function orderCards(order){ //A: ascendente o D: descendente
    return{
        type: ORDER,
        payload: order,
    }
}

export function reset(){ //A: ascendente o D: descendente
    return{
        type: RESET
        }
    
}

