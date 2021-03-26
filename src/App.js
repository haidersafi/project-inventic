import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import './App.css';
// import SimpleBar from 'simplebar-react';
// import sideNavigation from './components/sideNavigation';
// import Footer from './components/Footer';
import './index.css';
import SideNavigation from './components/sideNavigation'

class App extends Component {
state={dropdownOpen:true}
  toggle = () => {
        
    this.setState({

        dropdownOpen: !this.state.dropdownOpen
    });
}
  
  render() {
    return (
        <div className="flexible-content d-flex flex-column">
          <TopNavigation toggle={this.toggle}/>
          {this.state.dropdownOpen?<SideNavigation/>:null}
        {console.log(this.state.dropdownOpen)}
       
         <div >
         <main id="content" className={`${this.state.dropdownOpen?'container p-4 ':'container-fluid  mt-4 ml-0'} mt-5 `} style={{marginTop:'20px'}}>
         <Routes />
       </main></div>
          {/* <Footer /> */}
        </div>
    );
  }
}

export default App;
