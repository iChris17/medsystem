import React, { Component } from "react";
import Paciente from "../components/pacient/pacient";
import ListPaciente from "../components/pacient/listpacients";
import GlobalConfig from '../variables/configuration';

const axios = require("axios");

class PacienteComponente extends Component {
  state = {
    pacientes: []
  };

  async componentDidMount() {

    await axios.get(`http://${GlobalConfig.IP}:${GlobalConfig.PORT}/api/pacients`,{  auth: {
      username: GlobalConfig.USER,
      password: GlobalConfig.PASS
    }})
    .then(e=>{
      console.log(e.data);
      this.setState({
        pacientes: e.data
      });
    }).catch(e=>{console.log(e.message)});

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
    const pacientes = pacientesActuales.filter(pac => pac.id !== id);

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
