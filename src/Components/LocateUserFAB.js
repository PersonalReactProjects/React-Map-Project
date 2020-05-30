import React, { useContext } from 'react';
import '../styles/LocateUserFAB.css';
import { Context } from '../Store'

export default function LocateUserFAB() {
    const [state, dispatch] = useContext(Context);

    const locateUser = () => {
        dispatch({ type: 'LOCATION_LOADING' });
        var options = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        }


        const onSuccess = async ({
            coords: { latitude, longitude, } }) => {

            try {
                const getCoordsDetail = await fetch(`https://open.mapquestapi.com/geocoding/v1/reverse?key=F7jn7dokuPcI8V0goq79ykrAFC1k2hew&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`)

                const queryResults = await getCoordsDetail.json();
                const coordsDetails = queryResults.results[0].locations[0]
                dispatch({ type: 'GET_LOCATION_SUCCESS', payload: { latitude, longitude, coordsDetails } });
            } catch (error) {
                console.log('fetch error', error)
            }

        }
        const onError = (error) => {
            dispatch({ type: 'GET_LOCATION_FAIL', payload: error });
            console.log(error);

        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }


    return (
        <div className="add-grade-level basic uk-animation-slide-left-medium" uk-tooltip="title: Get your Current Location; pos: left" onClick={locateUser}>
            <i uk-icon="icon: location"></i>
        </div>
    )
}
