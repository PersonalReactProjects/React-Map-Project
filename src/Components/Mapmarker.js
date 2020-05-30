import React from 'react';
import MarkerIcon from '../assests/icons2.png';
import LocationDetail from './LocationDetail';
import '../styles/MapMarker.css'


export default function Mapmarker({ $hover, location }) {
    return (
        <div className="marker">
            <img className="marker-image" src={MarkerIcon} alt="mapicon" />
            <LocationDetail hover={$hover} />
        </div>
    )
}
