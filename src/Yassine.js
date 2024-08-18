import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from "leaflet"

function Yassine() {
    const map = useMap();
    useEffect(()=>{
        // var geocoder = 
        L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
           

            // var latLng = e.geocoder.center;
            // L.marker(latLng).addTo(map)
            // map.fitBounds(e.geocoder.bbox);
            
                 var bbox = e.geocode.bbox;
              var poly = L.polygon(
               

                [
                bbox.getSouthEast(),
                 bbox.getNorthEast(),
                 bbox .getNorthWest(),
                 bbox.getSouthWest(),
 
              ]
              ).addTo(map);
            map.fitBounds(poly.getBounds());
            })
             .addTo(map);

    },[]);
  return null

};

export default Yassine