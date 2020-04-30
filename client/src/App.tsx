import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  if (window.location.pathname !== '/man') {
    window.location.pathname = '/man'
  }

  return (
    <div className="App">

      <img src="https://media-exp1.licdn.com/dms/image/C5603AQGjGcewBcHnxg/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=SE_i_ql3K5cUGO9Ye2X_p6Nm4stViEoazrVBcXNGWsU"/>

      36 year old baby man looking for love. Preferably a hot lady, but at this point i'll take anything with a pulse. Note: pulse optional.


    </div>
  );
}

export default App;
