import React, { Component } from 'react';
// import logo from "../assets/mdb-react.png";
// import logo from "../assets/React_logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class SideNavigation extends Component {
  
    render(){
    return (
        <div className={`sidebar-fixed position-fixed`}>
            {/* <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a> */}
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <br />
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/product" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}}  icon="list" className="mr-3"/>
                       Product 
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/purchase" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="credit-card"className="mr-3"/>
                       Purchase
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/sale" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="shopping-cart" className="mr-3"/>
                       Sale
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/expense" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="suitcase" className="mr-3"/>
                       Expense
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/quotation" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="book-open" className="mr-3"/>
                       Quotation
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/transfer" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="exchange-alt" className="mr-3"/>
                       Transfer
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/return" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="arrow-left" className="mr-3"/>
                       Return
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/accounting" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="briefcase" className="mr-3"/>
                       Accounting
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/hrm" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="users" className="mr-3"/>
                       HRM
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/people" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="user" className="mr-3"/>
                       People
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/reports" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="file-alt" className="mr-3"/>
                       Reports
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/settings" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon style={{color:"#9400D3"}} icon="cog" className="mr-3"/>
                       Settings
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
        }
}

export default SideNavigation;