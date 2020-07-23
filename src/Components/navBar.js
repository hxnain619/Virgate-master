import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn
    } from "mdbreact";
    import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
    
export default class NavBar extends React.Component {
    state = { width: 1000 };
    updateDimensions = () => {
        this.setState({ width: window.innerWidth});
      };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
    render() {
        const {width} = this.state;

        return (<MDBNavbar expand="md" fixed="top" >
             <MDBNavbarBrand>
             <img src={require('../Assets/Logo.png')} alt="" style={{width: '100%'}} />
        </MDBNavbarBrand>
        <MDBNavbarNav right>
            {width > 600 ?
                <>
                <MDBNavLink to="#!">Add a Property</MDBNavLink>
                <MDBNavLink to="#!">Client Login</MDBNavLink>
                <MDBBtn className="nav_img_btn" ><img src={require('../Assets/Icons/iconSearch_1.png')} alt="" /></MDBBtn>
                </> : null
            }
            <MDBBtn className="nav_img_btn" ><img src={require('../Assets/Icons/iconSidebar.png')} alt="" /></MDBBtn>
        </MDBNavbarNav>
        </MDBNavbar>)
    }
}