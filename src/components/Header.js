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
