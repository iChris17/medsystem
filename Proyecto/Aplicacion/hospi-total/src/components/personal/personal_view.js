import React from "react";

function RellenarTabla(row) {
  let html = "";
  html += `
      <tr>
          <th scope="row">${row.id}</th>
          <td>${row.firstname + " " + row.lastname}</td>
          <td>${row.dni}</td>
          <td>${row.phonenumber}</td>
          <td>${row.email}</td>
      <tr>
      `;
  return html;
}

const personal_view = ({ Personals }) => {
  return (
    <tr dangerouslySetInnerHTML={{ __html: RellenarTabla(Personals) }}></tr>
  );
};

export default personal_view;
