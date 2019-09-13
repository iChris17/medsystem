import Consultio_cmp from "../components/consultorio/consultorio_cmp";
import React, { Component } from "react";
import ListConsultorio from "../components/consultorio/listconsultorio";
const axios = require("axios");
class Consultorio extends Component {
  state = {
    Consultorios: []
  };

  async componentDidMount() {

    await axios.get("http://localhost:59290/api/rooms",{  auth: {
      username: 'bily98',
      password: '123'
    }})
    .then(e=>{
      console.log(e.data);
      this.setState({
        Consultorios: e.data
      });
    }).catch(e=>{console.log(e.message)});

  }
  crearNuevoConsultorio = datos => {
    const consultorios = [...this.state.Consultorios, datos];
    this.setState({
      Consultorios: consultorios
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
      <div className="col-md-12 mx-auto">
        <Consultio_cmp crearNuevoConsultorio={this.crearNuevoConsultorio}/>
      </div>
      <div className="mt-5 col-md-12 mx-auto">
            <ListConsultorio
              consultorios={this.state.Consultorios}
            />
          </div>
      </div>
      </div>
    );
  }
}
export default Consultorio;
