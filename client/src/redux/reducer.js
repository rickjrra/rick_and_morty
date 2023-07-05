import {REMOVE_FAV, ADD_FAV, FILTER, ORDER, RESET} from './actions/types';

const initialState = {
    data:[],
    myFavorites:[],
    allCharacters:[]
};

export default function rootReducer(state=initialState,{type, payload}){
    switch (type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters:[...state.allCharacters, payload]
            };
        case REMOVE_FAV:
            const newFavorites = state.allCharacters.filter((ch)=> ch.id !== payload);
            return{
                ...state,
                myFavorites: newFavorites,
                allCharacters: newFavorites,
            };
        case FILTER:
            const newfilter = state.allCharacters.filter((ch)=> ch.gender === payload);
            return{
                ...state,
                myFavorites: newfilter,
            };
        case RESET:
            return{
            ...state,
            myFavorites: [...state.allCharacters],
            };
        case ORDER:
            const newOrder = state.allCharacters.sort((a, b)=>{
                if (a.id > b.id){
                    return "Ascendente" === payload? 1: -1
                }
                if (a.id < b.id){
                    return "Descendente" === payload? 1: -1
                }
                return 0;
            });
            return{
                ...state,
                myFavorites: newOrder,
                };
    
        default:
            return state;
    }
}