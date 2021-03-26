import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import SideNavigation from './sideNavigation';

class TopNavigation extends Component {
    state = {
        collapse: false,
        dropdownOpen:true,
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        
        });
    }

    // toggle = () => {
        
    //     this.setState({

    //         dropdownOpen: !this.state.dropdownOpen
    //     });
    // }

    render() {
        return (
            <MDBNavbar className="flexible-navbar sticky-top w-100 "  light expand="md" scrolling >
            <MDBNavbarNav left>
                <MDBNavItem className="sideNav-toggle-btn">
                    <a class="btn btn-secondary btn-sm" onClick={this.props.toggle} style={{ backgroundcolor: "#7e57c2" }} href="#!" role="button">
                        <i class="fas fa-bars"></i></a>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarBrand className="text-center" href="/">
                <h3 style={{ color: "black" }}> <i style={{ color: "#7e57c2" }} class="fas fa-boxes"></i> SalePro</h3>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick}  data-mdb-toggle="collapse" />
            <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                    <MDBNavItem >
                        <a class="btn btn-secondary btn-sm" style={{ backgroundcolor: "#7e57c2" }} href="#!" role="button">
                            <i class="fas fa-lock"></i> Pos</a>
                    </MDBNavItem>

                    <MDBNavItem >
                        <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="#">
                            <i style={{ color: "#7e57c2" }} class="fas fa-arrows-alt"></i> </a>
                    </MDBNavItem>
                    <MDBNavItem >
                        <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="#">
                            <i style={{ color: "#7e57c2" }} class="fas fa-archive"></i> </a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="#">
                            <i style={{ color: "#7e57c2" }} class="far fa-bell"></i></a>
                    </MDBNavItem>
                    <span style={{ color :"#7e57c2"}} className="counter">1</span>
                    <MDBNavItem >
                        <MDBNavLink to="#"><i style={{ color: "#7e57c2" }} class="fas fa-globe"></i>Language</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink to="#"><i style={{ color: "#7e57c2" }} class="fas fa-info-circle"></i>Help</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        {/* <MDBDropdown>
                            <MDBDropdownToggle ize="sm" caret style={{ backgroundColor: "white" }}>
                                <i style={{ color: "#7e57c2" }} class="fas fa-user-shield"></i> Admin
                                 </MDBDropdownToggle>
                            <MDBDropdownMenu >
                                <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                                <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown> */}
                        <MDBNavLink to="#"><i style={{ color: "#7e57c2" }} class="fas fa-user-shield"></i>Admin</MDBNavLink>
                    </MDBNavItem>

                    {/* <MDBNavItem>
                        <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/" target="_blank">About MDB</a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/getting-started/download/" target="_blank">Free download</a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Free tutorials</a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="https://www.google.com/" target="_blank">Help</a>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                        <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/feed/"><MDBIcon fab icon="linkedin" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>MDB GitHub</a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://mdbootstrap.com/products/react-ui-kit/" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>Go Pro</a>
                    </MDBNavItem> */}
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
            
           
        );
    }
}

export default TopNavigation;