import React, { useContext, } from 'react'
import GoogleMapReact from 'google-map-react';
import MapMarker from './Mapmarker';
import { Context } from '../Store';
import '../styles/MapView.css';
import LoaderSpinner from './LoaderSpinner'


export default function MapView() {
    const viewport = {
        center: {
            lat: 9.077751,
            lng: 8.6774567
        },
        zoom: 3
    }
    const [state,] = useContext(Context);

    return (
        <div className="mapview-container">
            <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={viewport.center} defaultZoom={viewport.zoom} yesIWantToUseGoogleMapApiInternals >
                {state.location ? <MapMarker lat={state.location.latitude} lng={state.location.longitude} /> : state.loading ? <LoaderSpinner /> : null}
            </GoogleMapReact>
        </div>
    )
}
