import React, { Component } from "react";
import uuid from "uuid";

const stateinicial = {
  Consultorio: {
    name: "",
    roomcode: "",
    specialty: 0
  },
  error: false
};
class Consultorio_cmp extends Component {
  state = {
    ...stateinicial
  };

  handleChange = e => {
    //console.log(e.target.name + ":" + e.target.value);
    this.setState({
      Consultorio: {
        ...this.state.Consultorio,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, roomcode, specialty } = this.state.Consultorio;
    if (name.trim() === "" || roomcode.trim() === "" || specialty === -1) {
      this.setState({
        error: true
      });
      return;
    }

    const Nuevoconsultorio = { ...this.state.Consultorio };
    Nuevoconsultorio.id = uuid();

    this.props.crearNuevaCita(Nuevoconsultorio);

    this.setState({ ...stateinicial });
  };
  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Consultorios</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Consultorio
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="mascota"
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
              <div className="col-sm-8 col-lg-10">
                <input
                  id="middlename"
                  type="text"
                  className="form-control"
                  placeholder="Código"
                  name="roomcode"
                  onChange={this.handleChange}
                  value={this.state.Consultorio.roomcode}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Especialidad
              </label>
              <div className="col-sm-8 col-lg-4">
                <select>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
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
