import React from "react";
import Paciente from "./viewpacients";

const listpacients = ({ pacientes}) => {
  const Mensaje =
    Object.keys(pacientes).length === 0
      ? "No hay Pacientes"
      : "Administra los pacientes aqui";
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{Mensaje}</h2>
        <div className="lista-cpaciente">
          <div className="media mt-3">
            <div className="media-body table-responsive" >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="ocultarID" >ID</th>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">Identificacion</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Genero</th>
                  </tr>
                </thead>
                <tbody>
                  {pacientes.map(pacientes => (
                    <Paciente
                      key={pacientes.id}
                      paciente={pacientes}
                      
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default listpacients;
