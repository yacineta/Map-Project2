import React, { useEffect } from 'react'
import L from "leaflet";
import { useMap } from 'react-leaflet';


function LeafletGeocooder() {
    const map = useMap();
    useEffect(() => {
        L.Control.geocoder({
            defaultMarkGeocode: false
        })
            .on('markgeocode', function(e) {
              var latlng = e.geocoder.center ;
              L.marker(latlng).addTo(map);
              map.fitBounds(e.geocoder.bbox);
           
            })
            .addTo(map);
// 
    }, []);
  return null;
};

export default LeafletGeocooder;