import React, { Component } from "react";
import logo from "../../assets/img/reactlogo.png";
import "../sidebar/sidebar.css";

class Sidebar extends Component {
    render() {
      return (
        <div>
            <div className="sidenav">
                <div className="logo">
                    <a href="#" className="simple-text logo-mini">
                        <div className="logo-img">
                            <img src={logo} alt="logo_image" />
                        </div>
                    </a>
                    <a href="#" className="simple-text logo-normal">
                        Medical System
                    </a>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Sidebar;