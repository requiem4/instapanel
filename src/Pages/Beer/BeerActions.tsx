import {GET_BEERS, SET_BEERS, GET_BEER, SET_BEER} from '../../Configs/ActionTypes'
import Beer from "./BeerInterface";

export function getBeersAction() {
    return {
        type: GET_BEERS
    };
}

export function setBeersAction(data: []) {
    return {
        type: SET_BEERS,
        payload: data
    };
}

export function getBeerAction() {
    return {
        type: GET_BEER
    };
}

export function setBeerAction(data: Beer) {
    return {
        type: SET_BEER,
        payload: data
    };
}