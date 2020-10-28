import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

type Coordinate = {
  lat: number;
  lng: number;
};

type Props = {
  latitude: number;
  longitude: number;
  nomeLatitude: string;
  nomeLongitude: string;
  setValue: Function;
  trigger: Function;
};

const mountPosition = (props: Props) => {
  console.log(props);
  return {
    lat: props.latitude,
    lng: props.longitude,
  };
};

const MapaEmbarque = (props: Props) => {
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [mapCenter, setMapCenter] = useState(mountPosition(props));
  const [markerPosition, setMarkerPosition] = useState(mountPosition(props));

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  const onLoadAutoComplete = (autocomplete: any) => {
    console.log("autocomplete: ", autocomplete);
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      let coordinate = autocomplete.getPlace().geometry.location;
      console.log(coordinate.lat, coordinate.lat());
      setMapCenter(coordinate);
      setMarkerPosition(coordinate);
      updateParentCoordinate({ lat: coordinate.lat(), lng: coordinate.lng() });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const onMapClicked = (coordinate: any) => {
    console.log("MAT CLICKED", coordinate.lat, coordinate.lat(), coordinate);
    setMarkerPosition(coordinate);
    updateParentCoordinate({ lat: coordinate.lat(), lng: coordinate.lng() });
  };

  const updateParentCoordinate = (coordinate: Coordinate) => {
    if (!props.setValue) return;
    if (props.nomeLatitude) props.setValue(props.nomeLatitude, coordinate.lat);
    if (props.nomeLatitude) props.setValue(props.nomeLongitude, coordinate.lng);
  };

  useEffect(() => {
    /*eslint-disable */
    console.log("useEffect", props.latitude, props.longitude);
    updateParentCoordinate({ lat: props.latitude, lng: props.longitude });
  }, [props.latitude, props.longitude]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAVrD8FwmuCTEaTR8aJ7CaZSI6D3MF5_RA"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={styles.containerStyle}
        center={mapCenter}
        zoom={10}
        onClick={(e) => onMapClicked(e.latLng)}
      >
        <Marker onLoad={onLoad} position={markerPosition} />
        {/* <InfoWindow onLoad={onLoad} position={position}>
          <div style={divStyle}>
            <h1>InfoWindow</h1>
          </div>
        </InfoWindow> */}

        <Autocomplete
          onLoad={onLoadAutoComplete}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Pesquise o local"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};
export default MapaEmbarque;

const styles = {
  containerStyle: {
    // width: "500px",
    // height: "500px",
    display: "table",
    margin: "0 auto",
    width: "100%",
    height: "500px",
  },

  divStyle: {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  },
};

MapaEmbarque.defaultProps = {
  latitude: -25.4352264,
  longitude: -49.2386819,
  setLatitude: null,
  setLongitude: null,
  setValue: null,
  trigger: null,
};
