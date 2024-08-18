import React, { useEffect } from 'react';
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from 'react-leaflet';

function LeafletRouting() {
    const map = useMap();
    useEffect(()=>{
         var marker1 = L.marker([36.73965438900515, 3.087958803029278]).addTo(map);
         map.on("click", function(e){
            //  console.log(e);à
            var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
             L.Routing.control({
            waypoints: [
              L.latLng(36.73965438900515, 3.087958803029278),
              L.latLng(e.latlng.lat, e.latlng.lng),
            ],
            lineOptions:{
                styles:[{
                    color:'#059862',
                    

                }],
            },
            routeWhileDragging:false,
            geocoder: L.Control.Geocoder.nominatim(),
            addWaypoints:true,
            draggableWpoints:false,
            fitSelectedRoutes:true,
            showAlternatives:true,
          })
          .on("routesfound", function(e){
            e.routes[0].coordinates.forEach((c, i)=>{
                setTimeout(()=>{
                    marker1.setLatLng([c.lat, c.lng])

                },100*i)
            });
                
            })
            
        //   })
          .addTo(map);
         })
       

    },[])
  return null
};

export default LeafletRouting;