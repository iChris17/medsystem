import React, { Component } from "react";
import uuid from "uuid";

const stateinicial = {
  personal: {
    middlename: "",
    lastname: "",
    dni: "",
    phonenumber: "",
    email: "",
    gender: "M",
    status:1,
    firstname:"",
    tppersonal:1
  },
  error: false
};
const axios = require("axios");
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
    Nuevopersonal.id = 0;

    const DataJson={
      "email":Nuevopersonal.email,
      "firstName":Nuevopersonal.firstname,
      "gender":Nuevopersonal.gender,
      "identification":Nuevopersonal.dni,
      "lastName":Nuevopersonal.lastname,
      "middleName":Nuevopersonal.middlename,
      "personalId":Number(Nuevopersonal.id),
      "phoneNumber":Nuevopersonal.phonenumber,
      "status":Number(Nuevopersonal.status),
      "tpPersonalId":Number(Nuevopersonal.tppersonal)
    };
  

    let promise = axios.post("http://localhost:9090/api/personal/saveOrUpdate",DataJson);

    promise
      .then(e => {
        this.props.crearNuevoPersonal(Nuevopersonal);
        this.setState({ error: false });
        console.log(e.data);
      })
      .catch(e => {
        console.log(e);
        console.log(e.message);
        this.setState({ error: true });
      });

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
                  id="firstname"
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
                  id="lastname"
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
                  id="email"
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
                  id="phonenumber"
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
