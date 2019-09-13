import Personal_cmp from "../components/personal/personal_cmp";
import React, { Component } from "react";
import ListPersonals from "../components/personal/personal_list_cmp";

const axios = require("axios");
class Personal extends Component {
  state = {
    personals: []
  };
  async componentDidMount() {
    await axios
      .get("http://localhost:59290/api/Personals", {
        auth: {
          username: 'bily98',
          password: '123'
        }
        })
      .then(e => {
        console.log(e.data);
        this.setState({
          personals: e.data
        });
      })
      .catch(e => {
        console.log(e.message);
      });
  }
  crearNuevoPersonal = datos => {
    const Personals = [...this.state.personals, datos];
    this.setState({
      personals: Personals
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <Personal_cmp crearNuevoPersonal={this.crearNuevoPersonal} />
          </div>
          <div className="mt-5 col-md-12 mx-auto">
            <ListPersonals Personals={this.state.personals} />
          </div>
        </div>
      </div>
    );
  }
}
export default Personal;
