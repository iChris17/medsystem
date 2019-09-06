import React from 'react';


function RellenarTabla(row) {
    let html = "";
    html += `
      <tr>
          <th scope="row">${row.personalId}</th>
          <td>${row.firstName + " " + row.lastName}</td>
          <td>${row.identification}</td>
          <td>${row.phoneNumber}</td>
          <td>${row.email}</td>
      <tr>
      `;
    return html;
  }

const personal_view = ({Personals}) => {
    return (
        <tr dangerouslySetInnerHTML={{ __html: RellenarTabla(Personals) }}></tr>
    );
};

export default personal_view;