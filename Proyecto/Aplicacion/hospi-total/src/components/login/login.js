import React from 'react';
import "../styles/login.css"

import Logo from '../../images/genral.png';
import user from '../../images/icons8-contactos-26.png';
import lock from '../../images/icons8-candado-2-26.png';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'señor desconocido' }
    }
    changeName() {
        let n = document.getElementsByClassName('input')[0].value
        this.setState({ name: n })
    }
    render() {
        return (
            <div className="divFondo">
                <div className="CuadroLogin">
                    <div className="Logo">
                        <img src={Logo} alt="Vara" ></img>
                        <h1>Clinica Vida</h1>
                    </div>
                    <form>
                    <div className="Form">
                        <label>
                            <img src={user}>
                            </img>
                            Usuario</label>
                        <input type="name" className="input" placeholder="Tu nombre" onChange={this.changeName.bind(this)} />
                        <label>
                            <img src={lock}>
                            </img>
                            Contraseña</label>
                        <input type="password" className="input" id="pss" placeholder="Contraseña"></input>

                        <a href="" id="tag">Recuperar contraseña</a>

                    </div>
                    <div className="buttons">
                        <input type="submit" value="Ingresar" className="btn" id="ingresar"></input>
                        <input type="submit" value="Registrarse" className="btn" id="registro"></input>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;