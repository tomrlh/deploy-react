import React, { useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { PontoEmbarque } from "services/types/PontoEmbarque";

type Coordinate = {
  lat: number;
  lng: number;
};

type Props = {
  latitude: number;
  longitude: number;
  pontosEmbarque: PontoEmbarque[];
};

const mountPosition = (props: Props) => {
  console.log(props);
  return {
    lat: props.latitude,
    lng: props.longitude,
  };
};

const PontosMapa = (props: Props) => {
  const mapCenter = mountPosition(props);

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  useEffect(() => {
    console.log("useEffect", props.latitude, props.longitude);
    console.log("PONTOS", props.pontosEmbarque);
  }, [props.latitude, props.longitude, props.pontosEmbarque]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAVrD8FwmuCTEaTR8aJ7CaZSI6D3MF5_RA"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={styles.containerStyle}
        center={mapCenter}
        zoom={10}
      >
        {props.pontosEmbarque &&
          props.pontosEmbarque.length > 0 &&
          props.pontosEmbarque.map((ponto) => (
            <Marker
              onLoad={onLoad}
              position={{
                lat: Number(ponto.latitude),
                lng: Number(ponto.longitude),
              }}
            >
              <InfoWindow onLoad={onLoad} position={"position"}>
                <div>
                  <h6>{ponto.nome}</h6>
                  <p>
                    {ponto.cidade.nome}-{ponto.cidade.estado.uf}
                  </p>
                </div>
              </InfoWindow>
            </Marker>
          ))}
      </GoogleMap>
    </LoadScript>
  );
};
export default PontosMapa;

const styles = {
  containerStyle: {
    width: "800px",
    // height: "500px",
    display: "table",
    margin: "0 auto",
    // width: "100%",
    height: "500px",
  },

  divStyle: {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  },
  segment: {
    maxWidth: "800px",
    alignSelf: "center",
  },
};

PontosMapa.defaultProps = {
  latitude: -25.4352264,
  longitude: -49.2386819,
  setLatitude: null,
  setLongitude: null,
  setValue: null,
  trigger: null,
};
