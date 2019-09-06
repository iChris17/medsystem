import React, { Component } from "react";
import uuid from "uuid";

const stateinicial = {
  personal: {
    middlename: "",
    lastname: "",
    dni: "",
    phonenumber: "",
    email: "",
    gender: ""
  },
  error: false
};

class Personal_cmp extends Component {
  state = {
    ...stateinicial
  };

  handleChange = e => {
    //console.log(e.target.name + ":" + e.target.value);
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      middlename,
      lastname,
      dni,
      phonenumber,
      email,
      gender
    } = this.state.personal;
    if (
      middlename.trim() === "" ||
      lastname.trim() === "" ||
      dni.trim() === "" ||
      phonenumber.trim() === "" ||
      email.trim() === "" ||
      gender.trim() === ""
    ) {
      this.setState({
        error: true
      });
      return;
    }

    const Nuevopersonal = { ...this.state.personal };
    Nuevopersonal.id = uuid();

    this.props.crearNuevaCita(Nuevopersonal);

    this.setState({ ...stateinicial });
  };
  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Personal</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Primer Nombre
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="mascota"
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="firstname"
                  onChange={this.handleChange}
                  value={this.state.personal.firstname}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Segundo nombre
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="middlename"
                  type="text"
                  className="form-control"
                  placeholder="Segundo nombre"
                  name="middlename"
                  onChange={this.handleChange}
                  value={this.state.personal.middlename}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Apellido
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  id="apellido"
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="lastname"
                  onChange={this.handleChange}
                  value={this.state.personal.lastname}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">
                Identificación
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  id="dni"
                  type="text"
                  className="form-control"
                  name="dni"
                  placeholder="Identificación"
                  onChange={this.handleChange}
                  value={this.state.personal.dni}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">E-mail</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  id="sintomas"
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={this.handleChange}
                  value={this.state.personal.email}
                ></textarea>
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Telefono
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  id="telefono"
                  className="form-control"
                  name="phonenumber"
                  placeholder="Teléfono"
                  onChange={this.handleChange}
                  value={this.state.personal.phonenumber}
                ></textarea>
              </div>
            </div>
            {/* form-group */}

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Personal_cmp;
