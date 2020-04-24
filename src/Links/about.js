import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class About extends Component{
     state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
 }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
    render(){
      
        
        return(
        <div className="row">
             <Map google={this.props.google} 
             initialCenter={{
                lat: 12.848498,
                lng: 77.6525214
              }}  
             onClick={this.onMapClicked}
              zoom={15}  >
            <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>

                </div>
            </InfoWindow>
            </Map>
        </div>
            )
    }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDvm7nntLWudMYFB5wqUp-5cy1Gi8f-qus")
})(About) 