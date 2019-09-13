import React from "react";
const axios = require("axios");
 function RellenarTabla(row) {
  let html = "";
  /*let promise=  axios.get("http://localhost:59290/api/specialties/"+row.idSpecialty+"",{  auth: {
      username: 'bily98',
      password: '123'
    }});
         
    promise.then(e=>{
      html += `
      <tr>
          <th scope="row">${row.id}</th>
          <td>${row.name}</td>
          <td>${row.code}</td>
          <td>${e.data.name}</td>
      <tr>
      `;    
    }).catch(e=>{console.log(e.message)});*/

    html += `
    <tr>
        <th scope="row">${row.id}</th>
        <td>${row.name}</td>
        <td>${row.code}</td>
        <td>${row.idSpecialty}</td>
    <tr>
    `;   
    return html;
}

const viewconsultorio = ({ consultorios }) => (
  <tr dangerouslySetInnerHTML={{ __html: RellenarTabla(consultorios) }}></tr>
);

export default viewconsultorio;