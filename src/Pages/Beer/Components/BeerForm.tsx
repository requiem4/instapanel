import React, {useEffect} from "react";
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {getBeer} from "../BeerActionsApi";
import BeerInterface from "../BeerInterface";
import {Link} from "react-router-dom";
const BeerForm = (props: any) => {
    const { match } = props
    const params = match.params
    const dispatch = useDispatch()
    const beer = useSelector<RootStateOrAny, BeerInterface>((state) => state.beer.beer)
    useEffect( () => {
        dispatch(getBeer(params.id))
    })
    return (
        <div className="BeerList">
            <div>
                 <Link to={'/'}>
                     Back To Beer List
                 </Link>
            </div>
            <table className="BeerList table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Tagline</td>
                    <td>Photo</td>
                    <td>ABV</td>
                    <td>Description</td>
                    <td>Date first brewed</td>
                    <td>Brewer's tipsABV</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{beer.name}</td>
                    <td>{beer.tagline}</td>
                    <td >
                        <Link to={`/beer/${beer.id}`}>
                            <img alt={''} src={beer.image_url} style={{maxWidth: 200, maxHeight:200}}/>
                        </Link>
                    </td>
                    <td>{beer.abv}</td>
                    <td>{beer.description}</td>
                    <td>{beer.first_brewed}</td>
                    <td>{beer.brewers_tips}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BeerForm;