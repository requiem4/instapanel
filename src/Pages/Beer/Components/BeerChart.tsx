import React, {
    useEffect
} from "react";
import Chart from "react-google-charts";
import {RootStateOrAny, useSelector} from "react-redux";
import BeerInterface from "../BeerInterface";
export default function BeerChart(props) {
    const { beers } = props
    let chartBeer:any[] = [
        ['First brewed','ABV',],
    ]
    beers.map( (beer: BeerInterface) => {
        chartBeer.push([beer.first_brewed, beer.abv])
    })

    return (
        <div style={{ display: 'flex', maxWidth: 900 }}>
            <Chart
                width={400}
                height={500}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={chartBeer}
                options={{
                    title: 'Beer chart',
                    hAxis: {
                        title: 'ABV',
                    },
                    vAxis: {
                        title: 'First brewed',
                    },
                }}

            />

        </div>
    )
}