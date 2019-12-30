import {Component} from 'react';

const url ="https://sipi-transform.herokuapp.com/";
const urlLocal = "http://192.168.0.10:8080/"

const urlGetProductosByNombre="transform/getProductosByTagAndName";
const urlGetPosteos="transform/getPosteos";
const urlGetPosteosByProd="transform/getPosteosByProd?id=";
const urlGetMateriales="transform/getMateriales";
const urlGetProductosByMaterial="transform/getProductosByMaterial?id=";
const urlGetEventos="transform/getEventos"
const urlGetPopularProd = "transform/getPopularProducts"

class ApiController extends Component
{
   
    getProductosByNombre(data,DevolverDatos)
    {
        const endpoint = `${url}${urlGetProductosByNombre}`;
        console.log("Buscando", data.name)
        //console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {
            return response.json();
        }).then (responseData => {
                console.log("Recibi datos"); 
                DevolverDatos(responseData);
        });
    }

    getPosteos(okBusqueda)
    {
        const endpoint = `${url}${urlGetPosteos}`;
        console.log("Buscando posteos")
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            //console.log("response",response);
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
                console.log("Recibi datos");
                okBusqueda(responseData);
        });
    }

    getPosteosByProd(okBusqueda2, data)
    {
        const endpoint = `${url}${urlGetPosteosByProd}`;
        console.log("Buscando posteos")
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
       }).then ((response) => {
            //console.log("response",response);
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
                console.log("Recibi datos");
                okBusqueda2(responseData);
        });
    }

    getMateriales(okBusqueda3)
    {
        const endpoint = `${url}${urlGetMateriales}`;
        console.log("Buscando materiales")
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            //console.log("response",response);
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
                console.log("Recibi datos");
                okBusqueda3(responseData);
        });
    }

    getProductosByMaterial(data,DevolverDatos)
    {
        const endpoint = `${url}${urlGetProductosByMaterial}`;
        console.log("Buscando", data.id)
        //console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {
            return response.json();
        }).then (responseData => {
                console.log("Recibi datos"); 
                DevolverDatos(responseData);
        });
    }

    getEventos(devolverDatos){
        const endpoint = `${url}${urlGetEventos}`;
        console.log("Buscando eventos")
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            //console.log("response",response);
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
                console.log("Recibi datos");
                devolverDatos(responseData);
        });
    }

    getPopularProducts(devolverDatos){
        const endpoint = `${urlLocal}${urlGetPopularProd}`;
        console.log("Buscando productos")
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            //console.log("response",response);
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
                console.log("Recibi datos");
                devolverDatos(responseData);
        });
    }

}

export default new ApiController();