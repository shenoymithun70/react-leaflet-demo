import './App.css';
import {MapContainer , Marker , Popup , TileLayer, useMap , Polyline , Tooltip} from 'react-leaflet'
import * as generalAddress from './data/generalAddress.json';
import * as tenGeneralAddress from './data/tenGeneralAddressDetails.json';
import * as testGeneralAddress from './data/testGeneralAddress.json';
import { useEffect, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import mapPin from './assets/map-pin-solid.svg';
import location from './assets/location.svg'
import polylineJson from './data/polyline.json'


function App() {
  const [address, setAddress] = useState(testGeneralAddress.default);
  // const [polyline , setPolyline ] = useState(polylineJson.features[0].geometry.coordinates)


  useEffect( () => {
    console.log(address);
  })


  const createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    })
  }


  const getCenterMap = () => {
    const bounds = address.map((item , index) => {
         return [item.latitude, item.longitude]
    })
    console.log(bounds);
    return bounds;
  }

  const fontAwesomeIcon = L.icon({
    iconUrl: location,
    iconSize: [50, 50],
    iconAnchor: [25, 41],
    popupAnchor: [4,-40],
    // tooltipAnchor: [4,-40]
  })

  

  // <i class="fas fa-map-pin"></i>

    //  

    // center={[43.643030 , -79.383790]} zoom={6}

  return (
   
    
    <MapContainer bounds={getCenterMap()}    >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
 
    {/* <MarkerClusterGroup
      
    > */}
    {/* <Marker position={[43.643030,-79.383790]} icon={fontAwesomeIcon}>
      {/* <Tooltip>React leaflet tooltip</Tooltip> */}
      {/* <Popup>
        <div>
          {"React leaflet marker"}
        </div>
      </Popup> */}
    {/* </Marker> */}

    
    
    <MarkerClusterGroup showCoverageOnHover={false}
    spiderfyDistanceMultiplier={2}
    iconCreateFunction={createClusterCustomIcon} >
      {address.map((item) => {
        return <Marker position={[item.latitude , item.longitude]} >
        <Popup minWidth={200} >
        <div>
          {`${item.address_line},${item.city},${item.state},${item.country}`}
        </div>
      </Popup>
        </Marker>
      })}
    </MarkerClusterGroup>
    {/* <Polyline color={"#0000"} positions={[polyline]}  /> */}
    </MapContainer>
  );
}



export default App;

// icon={fontAwesomeIcon}
