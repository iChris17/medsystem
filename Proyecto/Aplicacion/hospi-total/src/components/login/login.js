import React from "react";
import "../styles/login.css";

import Logo from "../../images/genral.png";
import user from "../../images/icons8-contactos-26.png";
import lock from "../../images/icons8-candado-2-26.png";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import MedSystem from "../../layout/medsystem";
import * as serviceWorker from "../../serviceWorker";
const axios = require("axios");
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { User: { userName: "", userPass: "" } };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange= this.onChange.bind(this);
  }
  onChange = e => {
      this.setState({
        User: {
            ...this.state.User,
            [e.target.name]: e.target.value
          }
        });
        console.log(this.state.User);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");

    let promise= axios.get("http://localhost:59290/api/user",{  auth: {
      username: 'bily98',
      password: '123'
    }});

    promise.then(e=>{
      console.log(e.data);
      let validuser=false;
      e.data.forEach(user=>{
          if(this.state.User.userName===user.userName && this.state.User.userPass===user.userPass){
            validuser=true;
          }
      });
      if(validuser){
        const hist = createBrowserHistory();
        ReactDOM.render(
          <Router history={hist}>
            <Switch>
              <Route path="/medsystem" component={MedSystem} />
              <Redirect from="/" to="/medsystem/citas" />
            </Switch>
          </Router>,
          document.getElementById("root")
        );
    
        serviceWorker.unregister();
      }else{
        alert('Credenciales invalidas');
        this.setState({
        User: { userName: "", userPass: "" }
        });
      }
    }).catch(e=>{console.log(e.message)});


  };

  render() {
    return (
      <div className="divFondo">
        <div className="CuadroLogin">
          <div className="Logo">
            <img src={Logo} alt="Vara"></img>
            <h1>Clinica Vida</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="Form">
              <label>
                <img src={user}></img>
                Usuario
              </label>
              <input
                id="userName"
                type="text"
                className="form-control"
                placeholder="Usuario*"
                name="userName"
                required
                value={this.state.User.userName}
                onChange={this.onChange}
              />
              <label>
                <img src={lock}></img>
                Contraseña
              </label>
              <input
                type="password"
                id="userPass"
                placeholder="Contraseña*"
                className="form-control"
                name="userPass"
                required
                onChange={this.onChange}
                value={this.state.User.userPass}
              ></input>
            </div>
            <div className="buttons">
              <input
                type="submit"
                value="Ingresar"
                className="btn"
                id="ingresar"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
