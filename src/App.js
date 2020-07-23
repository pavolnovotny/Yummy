import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import './App.module.css';
import Maker from './containers/Maker/Maker'

class App extends Component {
  
  render() { 
    return (  
      <div>
        <Layout>
          <Maker/>
        </Layout>
      </div>
    );
  }
}
 
export default App;


