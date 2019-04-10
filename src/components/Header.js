import React, {Component} from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
      }
    
      componentDidMount() {
        //const {map, maps} = this.props;
        const google = window.google;
        var options = {
            types: ["geocode"],
            componentRestrictions: {country: "vn"}
           };
        this.autocomplete = new google.maps.places.Autocomplete(
          this.autocompleteInput.current,
          options
        );
        this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
      }
    
      handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          // if (place.geometry.viewport) {
          //   return;
          // } else {
          //   
          // }
          this.props.onPlaceChanged(place.geometry.location);
      }
    render(){
        const {placeholder} = this.props
        return (
                    <input type="text" className="form-control" id="autocomplete" ref={this.autocompleteInput}
                    placeholder={placeholder}/>
          );
    }
}
