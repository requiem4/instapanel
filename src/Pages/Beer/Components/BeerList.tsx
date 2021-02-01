import React, {useEffect} from "react";
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {getBeers} from "../BeerActionsApi";
import BeerInterface from "../BeerInterface";
import {Link} from "react-router-dom";
import {tableSort, getComparator, Order} from "./SortHelper";
import BeerChart from "./BeerChart";

const BeerList = () => {
    const dispatch = useDispatch()
    const beers = useSelector((state: RootStateOrAny) => state.beer.beers)
    const loadingBeers = useSelector((state: RootStateOrAny) => state.beer.loadingBeers)
    useEffect( () => {
        if(beers.length <=0 && loadingBeers === false){
            dispatch(getBeers())
        }
    }, [beers, loadingBeers])

    const [orderBy, setOrderBy] = React.useState('id');
    const [order, setOrder] = React.useState<Order>("desc");
    const sort = (attribute: string) => {
        if(order === 'desc'){
            setOrder('asc')
        } else {
            setOrder('desc')
        }
        setOrderBy(attribute)
        // tableSort(beers,getComparator(order, attribute))
    }
    return (
        <div className="BeerList">
            <BeerChart beers={beers} />
            <table className="BeerList table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <td onClick={() => sort('id')}>Id</td>
                        <td onClick={() => sort('name')}>Name</td>
                        <td>Tagline</td>
                        <td>Photo</td>
                        <td onClick={() => sort('abv')}>ABV</td>
                    </tr>
                </thead>
                <tbody>
                {tableSort(beers,getComparator(order, orderBy)).map( (beer: BeerInterface, index: number) => (
                    <tr key={index}>
                        <td>{beer.id}</td>
                        <td>{beer.name}</td>
                        <td>{beer.tagline}</td>
                        <td >
                            <Link to={`/beer/${beer.id}`}>
                                <img alt={''} src={beer.image_url} style={{maxWidth: 200, maxHeight:200}}/>
                            </Link>
                        </td>
                        <td>{beer.abv}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BeerList;