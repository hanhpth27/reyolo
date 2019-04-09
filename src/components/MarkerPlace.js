import React, {Component} from 'react';

export default class MarkerPlace extends Component{
    renderMarker(){

        const {startPlace, endPlace, map, maps} = this.props;

        if(startPlace){
            new maps.Marker({
                name: 'Your position',
                position: {startPlace},
                map: map
            })
        }

        if(endPlace){
            new maps.Marker({
                name: 'End address',
                position: {endPlace},
                map: map
            })
        }
    }

    render(){
        this.renderMarker();
        return null;
    }

}