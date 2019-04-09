import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './components/Map';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      startPlace: {},
      endPlace: {}
    }
  }
  showStartPlace(place) {
    const startPlace = JSON.stringify(place, null, 2)
    this.setState({ startPlace : startPlace });
    //console.log(this.state.startPlace);
  }

  showEndPlace(place) {
    this.setState({ endPlace : place });
  }
  render() {
    return (
      <div>
        <div><Map startPlace={this.state.startPlace}
                  endPlace={this.state.endPlace}/></div>
        <header>
                <div className="form-group">
                <Header placeholder="Bạn đang ở đâu" onPlaceChanged={this.showStartPlace.bind(this)}/>
                <Header placeholder="Nơi bạn cần đến" onPlaceChanged={this.showEndPlace.bind(this)}/>
                </div>
        </header>
        <div><Footer/></div>
      </div>
    );
  }
}

export default App;
