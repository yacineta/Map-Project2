// import logo from './logo.svg';
import './App.css';
import {MapContainer, Marker,Popup,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import LeafletGeocooder from './LeafletGeocooder';
import Yassine from './Yassine';
import LeafletRouting from './LeafletRouting';
import Miral from './Miral';

function App() {
  const position = [36.73965438900515, 3.087958803029278]


  // [ 28.033886,1.659626]
  // [ 36.73946, 3.34186] 
  return (
   


    <div className="App">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}
        style={{height: "50vh", height:"100vh"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />



    {/* <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
    {/* <LeafletGeocooder /> */}
    {/* <Yassine/> */}




    <LeafletRouting/>
  </MapContainer>
    
      <div className='Raha Mqwda'>
        <Miral/>
      </div>
    </div>
  );
}
let defaultIcon = L.icon({
   iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
   iconSize: [25,41], 
   iconAnchor: [10,41], 
   popupAnchor: [2, -41],

});
L.Marker.prototype.options.icon = defaultIcon

export default App;
