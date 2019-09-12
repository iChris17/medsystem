import React, { Component } from "react";
import Paciente from "../components/pacient/pacient";
import ListPaciente from "../components/pacient/listpacients";

const axios = require("axios");

class PacienteComponente extends Component {
  state = {
    pacientes: []
  };

  async componentDidMount() {
    let axiosConfig = {
      method:"GET",
      url:"http://localhost:9090/api/Patient/getALL",
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "Access-Control-Allow-Origin": "*",
      }
    };

    const options ={

    }
    await axios.get("http://localhost:9090/api/Patient/getALL")
    .then(e=>{
      console.log(e.data);
      this.setState({
        pacientes: e.data
      });
    }).catch(e=>{console.log(e.message)});

    /*let promise = axios.get("http://localhost:9090/api/Patient/getALL"
    );
    var All;
    promise.then(e => {
      All = e.data;
      this.setState({
        pacientes: All
      });
    }).catch(e=>{console.log('error de conexion')});*/
  }

  componentDidUpdate() {
    //localStorage.setItem('pacientes',JSON.stringify(this.state.pacientes));
  }

  crearNuevoPaciente = datos => {
    const Pacientes = [...this.state.pacientes, datos];
    this.setState({
      pacientes: Pacientes
    });
  };

  eliminaPaciente = id => {
    console.log(id);

    const pacientesActuales = [...this.state.pacientes];
    const pacientes = pacientesActuales.filter(pac => pac.pacientId !== id);

    this.setState({
      pacientes
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <Paciente crearNuevoPaciente={this.crearNuevoPaciente} />
          </div>
          <div className="mt-5 col-md-12 mx-auto">
            <ListPaciente
              pacientes={this.state.pacientes}
              eliminaPaciente={this.eliminaPaciente}
            />
          </div>
        </div>
      </div>
    );
  }
}
/*  <div className="mt-5 col-md-10 mx-auto">
            <ListaCita
              citas={this.state.citas}
              eliminaCita={this.eliminaCita}
            />
          </div> */
export default PacienteComponente;
