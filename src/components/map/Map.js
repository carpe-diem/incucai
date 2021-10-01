import { provincias } from "../../data/dataProvincias"
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Circle
} from "react-google-maps";
import React, { Fragment } from 'react';
import { getRadioProvincia } from "../../utils/getInfo";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{
        lat: -38.04,
        lng: -62.50
      }}
    >
      {provincias.map(provincia => {
        return (
          <Fragment key={provincia.id} >
            {
              <Circle
                defaultCenter={{
                  lat:provincia.centroide.lat,
                  lng:provincia.centroide.lng
                }}
                radius={getRadioProvincia(provincia.nombre,`${props.tipoLista}`, `${props.max}`, `${props.maxRadio}`)}
                options={{
                  strokeColor: "#FF0000",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: "rgba(249, 21, 21, 0.5)"
                  
                }}
             />
            }


           {/*  {
              
              <MyMapComponent
                lat={provincia.centroide.lat}
                lng={provincia.centroide.lng}
                text="LALA"
              />
            
            } */}
            {/* {
              <Marker
              position={{
                lat: provincia.centroide.lat,
                lng: provincia.centroide.lng,
              }}
              text="LALA"
            />
            } */}
            {/* {
              <AnyComponent
                lat={provincia.centroide.lat}
                lng={provincia.centroide.lng}
                text="LALA"
              />
            } */}
          </Fragment>
        );
      })}
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));

