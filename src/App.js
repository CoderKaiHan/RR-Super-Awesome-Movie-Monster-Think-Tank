import React, { Suspense } from 'react';
import * as Loader from 'react-loader-spinner';
import './App.css';

const AboutUs = React.lazy(() => import('./components/AboutUs'));
const Packages = React.lazy(() => import('./components/Packages'));


function App() {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
        <Suspense fallback={<Loader.Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />}>
          <AboutUs />
          <Packages />
        </Suspense>
      </div>
    </div>
  );
}

export default App;