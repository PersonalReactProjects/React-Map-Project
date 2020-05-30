import React, { useContext } from 'react';
import '../styles/LocationDetail.css'
import { Context } from '../Store'


export default function LocationDetail({ hover }) {
    const [state] = useContext(Context);

    return (
        <>
            {
                hover ?
                    <div className="popupdetail uk-card uk-animation-fade uk-card-default" id="location-detail-popup">
                        <span className="text-center text-description ml-2">{state.location.coordsDetails.street}</span><br />
                        <span className="text-center text-description ml-2"> {state.location.coordsDetails.adminArea3}, {state.location.coordsDetails.adminArea5}</span><br />
                        <span className="text-center text-description ml-2">Postal Code: {state.location.coordsDetails.postalCode}</span>

                    </div> : null
            }
        </>
    )
}
