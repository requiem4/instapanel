import {Dispatch} from "react";
import {getBeerAction, getBeersAction, setBeerAction, setBeersAction} from "./BeerActions";
import BeerApi from "../../Api/BeerApi";

export function getBeers(params = []) {
    return (dispatch: Dispatch<any>) => {
        dispatch(getBeersAction());
        BeerApi.getBeers(params)
            .then(response => {
                dispatch(setBeersAction(response.data));
                return response.data;
            })
    };
}

export function getBeer(id: string|number) {
    return (dispatch: Dispatch<any>) => {
        dispatch(getBeerAction());
        BeerApi.getBeer(id)
            .then(response => {
                if(Array.isArray(response.data)){
                    dispatch(setBeerAction(response.data[0]));
                } else {
                    dispatch(setBeerAction(response.data));
                }
                return response.data;
            })
    };
}