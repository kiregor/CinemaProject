import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Carousel from './components/AppCarousel';
//import AppLogin from './components/AppLogin';
//import Breadcrumbs from './components/AppBreadcrumbs';

function App() {
  return ( 
    <div className = "App" >
      <AppNavbar/>
      <Carousel/>
    </div>
  );
}
export default App;