import React from "react";

function RellenarTabla(row) {
  let html = "";
  html += `
    <tr>
        <th scope="row">${row.id}</th>
        <td>${row.firstname + " " + row.lastname}</td>
        <td>${row.dni}</td>
        <td>${row.phone}</td>
        <td>${row.email}</td>
        <td>${row.age}</td>
        <td>${row.gender}</td>
    <tr>
    `;
  return html;
}

const viewpacients = ({ paciente }) => (
  <tr dangerouslySetInnerHTML={{ __html: RellenarTabla(paciente) }}></tr>
);

export default viewpacients;
