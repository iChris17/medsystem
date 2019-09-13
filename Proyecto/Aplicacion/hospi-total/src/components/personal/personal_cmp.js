import React, { Component } from "react";
import GlobalConfig from '../../variables/configuration';

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
  async componentDidMount() {    
    let promise = axios.get(`http://${GlobalConfig.IP}:${GlobalConfig.PORT}/api/TpPersonals`, {
      auth: {
        username: GlobalConfig.USER,
        password: GlobalConfig.PASS
      }
    });
    let dataSelect;
    promise.then(d => {
      console.log(d.data);
      dataSelect = d.data;
      let select = document.getElementsByTagName("select")[0];
      for (var value in dataSelect) {
        let options = document.createElement("option");
        options.text = dataSelect[value].name;
        options.value=dataSelect[value].id;  
        console.log(options);
        select.add(options);
      }
    });
  }
  handleChange = e => {
    console.log(e.target.name + ":" + e.target.value);
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
      firstname,
      middlename,
      lastname,
      dni,
      phonenumber,
      email,
      gender,
      tppersonal
    } = this.state.personal;
    if (
      firstname.trim()==="" ||
      middlename.trim() === "" ||
      lastname.trim() === "" ||
      dni.trim() === "" ||
      phonenumber.trim() === "" ||
      email.trim() === "" ||
      gender.trim() === "" ||
      tppersonal === null
    ) {
      this.setState({
        error: true
      });
      return;
    }

    const Nuevopersonal = { ...this.state.personal };
    Nuevopersonal.id = 0;

    const DataJson={
      idTpPersonal:Number(Nuevopersonal.tppersonal),
      firstname:Nuevopersonal.firstname,
      middlename:Nuevopersonal.middlename,
      lastname:Nuevopersonal.lastname,
      dni:Nuevopersonal.dni,
      phonenumber:Nuevopersonal.phonenumber,
      email: Nuevopersonal.email,
      gender:Nuevopersonal.gender,
      enabled:Number(Nuevopersonal.status),
      dtRegistered: new Date(),
      usRegistered: ''
    };
  console.log(DataJson);
    let promise = axios.post(`http://${GlobalConfig.IP}:${GlobalConfig.PORT}/api/Personals`, DataJson, {
      auth: {
        username: GlobalConfig.USER,
        password: GlobalConfig.PASS
      }
    });

    promise
      .then(e => {
        Nuevopersonal.id=e.data.id;
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
                  type="tel"
                  className="form-control"
                  name="phonenumber"
                  placeholder="Teléfono"
                  onChange={this.handleChange}
                  value={this.state.personal.phonenumber}
                ></textarea>
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
                  value={this.state.personal.gender}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Tipo Personal
              </label>
              <div className="col-sm-8 col-lg-4">
                <select className="custom-select"
                name="tppersonal"
                onChange={this.handleChange}>
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

export default Personal_cmp;
