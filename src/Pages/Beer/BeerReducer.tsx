import * as ACTION_TYPES from '../../Configs/ActionTypes';
const initialState = {
    loadingBeers: false,
    loadingBeer: false,
    beers: [],
    beer: {}
}

const BeerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.GET_BEERS:
            return {
                ...state,
                loadingBeers: true
            }
        case ACTION_TYPES.SET_BEERS:
            return {
                ...state,
                beers: action.payload,
                loadingBeers: false
            }
        case ACTION_TYPES.GET_BEER:
            return {
                ...state,
                loadingBeer: true
            };
        case ACTION_TYPES.SET_BEER:
            return {
                ...state,
                beer: action.payload,
                loadingBeer: false
            };
    }
    return state
}
export default BeerReducer