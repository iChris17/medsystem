import React from 'react';
import Personal from '../personal/personal_view';

const personal_list_cmp = ({Personals}) => {
  const Mensaje =
    Object.keys(Personals).length === 0
      ? "No hay Pacientes"
      : "Administra el personal aqui";
  return (
<div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{Mensaje}</h2>
        <div className="lista-citas">
          <div className="media mt-3">
            <div className="media-body table-responsive" >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" >ID</th>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">Identificacion</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {Personals.map(personals => (
                    <Personal
                      key={personals.personalId}
                      Personals={personals}
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

export default personal_list_cmp;
