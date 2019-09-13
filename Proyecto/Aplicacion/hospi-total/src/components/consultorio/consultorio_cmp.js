import React, { Component } from "react";

const stateinicial = {
  Consultorio: {
    name: "",
    code: "",
    idSpecialty: "",
    usRegistered:"cacevedo"
  },
  error: false
};
const axios = require("axios");

class Consultorio_cmp extends Component {
  state = {
    ...stateinicial
  };

  handleChange = e => {
    console.log(e.target.name + ":" + e.target.value);
    this.setState({
      Consultorio: {
        ...this.state.Consultorio,
        [e.target.name]: e.target.value
      }
    });
  };

componentDidMount(){
  let promise = axios.get("http://localhost:59290/api/Specialties",{auth: {
    username: 'bily98',
    password: '123'
  }});
  let dataSelect;
  promise
    .then(d => {
      console.log(d.data);
      dataSelect = d.data;
      let select = document.getElementsByTagName("select")[0];
      for (var value in dataSelect) {
        let options = document.createElement("option");
        options.text = dataSelect[value].name;
        options.value=dataSelect[value].id;
        console.log(value)
        select.add(options);
      }
    })
    .catch(d => {
      console.log(d.message);
      this.setState({ error: true });
    });
}


  handleSubmit = e => {
    e.preventDefault();

    const { name, code, specialty } = this.state.Consultorio;
    if (name.trim() === "" || code.trim() === "") {
      this.setState({
        error: true
      });
      return;
    }

    const Nuevoconsultorio = { ...this.state.Consultorio };
    Nuevoconsultorio.id=0;
    this.props.crearNuevoConsultorio(Nuevoconsultorio);

    this.setState({ ...stateinicial });
  };
  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Consultorios</h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Ha ocurrido un error
            </div>
          ) : null}
          ;
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Consultorio
              </label>
              <div className="col-sm-8 col-lg-9">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.Consultorio.name}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Código</label>
              <div className="col-sm-8 col-lg-9">
                <input
                  id="code"
                  type="text"
                  className="form-control"
                  placeholder="Código"
                  name="code"
                  onChange={this.handleChange}
                  value={this.state.Consultorio.code}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Especialidad
              </label>
              <div className="col-sm-8 col-lg-4" >
                <select className="custom-select" name="idSpecialty"  onChange={this.handleChange}>
                  <option></option>
                </select>
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
export default Consultorio_cmp;
