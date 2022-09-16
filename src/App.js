import React from 'react';
import './App.css';
// import Row from 'react-bootstrap/Row'

import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
     <Header/>         
     <Dashboard/>
     <Footer/>
    </div>
   
  }
}
export default App;
