import React from 'react';
import Navbar from './Components/Navbar';
import MapView from './Components/MapView'
import LocateUserFAB from './Components/LocateUserFAB';
import Store from './Store'



function App() {


  return (
    <Store>
      <div>
        <Navbar />
        <MapView />
        <LocateUserFAB />
      </div>
    </Store>
  );
}

export default App;
