import React from "react";

function RellenarTabla(row) {
  let html = "";
  html += `
    <tr>
        <th scope="row">${row.pacientId}</th>
        <td>${row.firstName + " " + row.lastName}</td>
        <td>${row.dni}</td>
        <td>${row.phone}</td>
        <td>${row.email}</td>
        <td>${row.age}</td>
        <td>${row.gender}</td>
    <tr>
    `;
  return html;
}

const viewpacients = ({ paciente, eliminaPaciente }) => (
  <tr dangerouslySetInnerHTML={{ __html: RellenarTabla(paciente) }}></tr>
);
/**<h3 className="mt-0">{paciente.firstName}</h3>
      <p className="card-text">
        <span>Nombre Completo:</span>
        {paciente.firstName+' '+paciente.lastName}
      </p>
      <p className="card-text">
        <span>Identificacion:</span>
        {paciente.dni}
      </p>
      <p className="card-text">
        <span>Telefono:</span>
        {paciente.phone}
      </p>
      <p className="card-text">
        <span>Email:</span>
      </p>
      <p>{paciente.email}</p>
      <p className="card-text">
        <span>Edad:</span>
      </p>
      <p>{paciente.age}</p>
      <p className="card-text">
        <span>Genero:</span>
      </p>
      <p>{paciente.gender}</p>
      <button className="btn btn-danger" onClick={() => eliminaPaciente(paciente.pacientId)}>
        Borrar &times;
      </button> */
export default viewpacients;
