import api from './IndexApi';

export default class BeerApi {
    static getBeers = async (params: any) => await api.get('/beers', { params });
    static getBeer = async (id: string|number) => await api.get(`/beers/${id}`);
}