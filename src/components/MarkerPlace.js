import React, {Component} from 'react';

export default class MarkerPlace extends Component{
    constructor(props){
        super(props);
        this.state = {
            startMarker: null,
            endMarker: null
        }
    }
    fitBounds (map, maps, startPlace, endPlace) {
        var bounds = new maps.LatLngBounds()
        // for (let marker of this.props.markers) {
        //   bounds.extend(
        //     new maps.LatLng(marker.lat, marker.lng)
        //   )
        // }
        bounds.extend(new maps.LatLng(startPlace.lat, startPlace.lng));
        bounds.extend(new maps.LatLng(endPlace.lat, endPlace.lng));
        map.fitBounds(bounds)
    }
    renderMarker(){

        const {startPlace, endPlace, map, maps} = this.props;
        let marker = new maps.Marker({
            map: map,
            anchorPoint: new maps.Point(0, -29)
        });
        marker.setVisible(false);
        console.log(startPlace)
        if(startPlace){
            map.setCenter(startPlace);
            map.setZoom(17);
            marker.setPosition(startPlace);
            marker.setVisible(true);

            this.setState({
                startMarker: marker
            })
        }

        if(endPlace){
            let end_marker = new maps.Marker({
                map: map,
                anchorPoint: new maps.Point(0, -29)
            });
            end_marker.setPosition(endPlace);
            this.setState({
                endMarker: end_marker
            })
        }

        // if(startPlace && endPlace){
        //     this.fitBounds(map, maps, startPlace, endPlace)
        // }

    }

    updatePositionStartMarker(){
        const {startMarker} = this.state.startMarker;
        const {startPlace} = this.props.startPlace;
        startMarker.setPosition(startPlace);

        this.setState({
            startMarker: startMarker
        })
    }

    render(){
        if(this.state.startMarker){
            this.updatePositionStartMarker();
        }else{
            this.renderMarker();
        }
        return null;
    }

}