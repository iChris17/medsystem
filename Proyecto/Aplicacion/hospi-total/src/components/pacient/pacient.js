import React, { Component } from "react";

const stateInicial = {
  paciente: {
    firstname: "",
    lastname: "",
    dni: "",
    phone: "",
    email: "",
    gender: "",
    age: 0,
    usRegistered:'cacevedo'
  },
  error: false
};

const axios = require("axios");

class Pacient extends Component {
  state = {
    ...stateInicial
  };

  handleChange = e => {
    //console.log(e.target.name + ":" + e.target.value);
    this.setState({
      paciente: {
        ...this.state.paciente,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firstname, lastname, dni, gender, age } = this.state.paciente;
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      dni.trim() === "" ||
      gender.trim() === "" ||
      age === 0
    ) {
      this.setState({
        error: true
      });
      return;
    }

    const NuevoPaciente = { ...this.state.paciente };
    NuevoPaciente.id = 0;

    const dataJSON =`{"age": ${parseInt(NuevoPaciente.age)},"dni": "${NuevoPaciente.dni}","email": "${NuevoPaciente.email}","firstname": "${NuevoPaciente.firstname}","gender": "${NuevoPaciente.gender}","lastname": "${NuevoPaciente.lastname}","phone": "${NuevoPaciente.phone}",
      "usRegistered":"${NuevoPaciente.usRegistered}"}`;
    NuevoPaciente.age=Number(NuevoPaciente.age)
    let data=JSON.stringify(NuevoPaciente)
    console.log(data)

    let promise = axios.post("http://localhost:59290/api/pacients",NuevoPaciente,{auth: {
      username: 'bily98',
      password: '123'
    }});

    promise
      .then(e => {
        NuevoPaciente.id=e.data.id;
        this.props.crearNuevoPaciente(NuevoPaciente);
        this.setState({ error: false });
      })
      .catch(e => {
        console.log(e);
        console.log(data);
        console.log(e.message);
        this.setState({ error: true });
      });

    this.setState({ ...stateInicial });
  };
  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Datos del Paciente</h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              No hay conexion con el servidor
            </div>
          ) : null}
          ;
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Primer Nombre
              </label>
              <div className="col-sm-8 col-lg-9">
                <input
                  id="firstname"
                  type="text"
                  className="form-control"
                  placeholder="Primer Nombre*"
                  name="firstname"
                  required
                  onChange={this.handleChange}
                  value={this.state.paciente.firstname}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Apellido
              </label>
              <div className="col-sm-8 col-lg-9">
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Apellido*"
                  name="lastname"
                  required
                  onChange={this.handleChange}
                  value={this.state.paciente.lastname}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Identificacion
              </label>
              <div className="col-sm-8 col-lg-9">
                <input
                  id="dni"
                  type="text"
                  className="form-control"
                  placeholder="Identificacion*"
                  required
                  name="dni"
                  onChange={this.handleChange}
                  value={this.state.paciente.dni}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Telefono
              </label>
              <div className="col-sm-8 col-lg-2">
                <input
                  id="phone"
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Telefono*"
                  onChange={this.handleChange}
                  value={this.state.paciente.phone}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Email</label>
              <div className="col-sm-8 col-lg-2">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email*"
                  onChange={this.handleChange}
                  value={this.state.paciente.email}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Edad</label>
              <div className="col-sm-8 col-lg-1">
                <input
                  id="age"
                  type="number"
                  className="form-control"
                  name="age"
                  onChange={this.handleChange}
                  value={this.state.paciente.age}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Genero</label>
              <div className="col-sm-8 col-lg-2">
                <input
                  id="gender"
                  type="text"
                  className="form-control"
                  placeholder="M/F*"
                  name="gender"
                  required
                  onChange={this.handleChange}
                  value={this.state.paciente.gender}
                />
              </div>
            </div>
            {/* form-group */}

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Paciente"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Pacient;
