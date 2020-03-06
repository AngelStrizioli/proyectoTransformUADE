import {Component} from 'react';

//const url ="https://sipi-transform.herokuapp.com/";
//const url = "https//127.0.0.1:8080/";
const url = "http://192.168.0.11:8080/"

const urlGetProductosByNombre="transform/getProductosByTagAndName";
const urlGetPosteos="transform/getPosteos";
const urlGetPosteosByProd="transform/getPosteosByProd?id=";
const urlGetMateriales="transform/getMateriales";
const urlGetProductosByMaterial="transform/getProductosByMaterial?id=";
const urlGetEventos="transform/getEvents"
const urlGetPopularProd = "transform/getPopularProducts"
const urlPushCommentEvent = "transform/commentEvent"
const urlPushCommentPost = "transform/commentPost"
const urlGetCommentsEvent = "transform/getEventComments"
const urlGetCommentsPost = "transform/getPostComments"


class ApiController extends Component
{
    getProductosByNombre(data,DevolverDatos)
    {
        const endpoint = `${url}${urlGetProductosByNombre}`;
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {
            return response.json();
        }).then (responseData => {
            DevolverDatos(responseData);
        }).catch(err => {
            throw err;
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
            return response.json();
        }).then (responseData => {
                okBusqueda(responseData);
        });
    }

    getPosteosByProd(okBusqueda2, data)
    {
        const endpoint = `${url}${urlGetPosteosByProd}`;
        console.log("buscando posteos", JSON.stringify(data))
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
       }).then ((response) => {
            return response.json();
        }).then (responseData => {
                okBusqueda2(responseData);
        });
    }

    getMateriales(okBusqueda3)
    {
        const endpoint = `${url}${urlGetMateriales}`;
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            return response.json();
        }).then (responseData => {
                okBusqueda3(responseData);
        });
    }

    getProductosByMaterial(data,DevolverDatos)
    {
        const endpoint = `${url}${urlGetProductosByMaterial}`;
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {
            return response.json();
        }).then (responseData => {
                DevolverDatos(responseData);
        });
    }

    getEventos(devolverDatos){
        const endpoint = `${url}${urlGetEventos}`;
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            console.log("responseData", response);
            return response.json();
        }).then (responseData => {
                console.log("responseData", responseData);
                devolverDatos(responseData);
        });
    }

    getPopularProducts(devolverDatos){
        const endpoint = `${url}${urlGetPopularProd}`;
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
    
    pushCommentEvent(data,DevolverDatos){
        const endpoint = `${url}${urlPushCommentEvent}`;
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

    pushCommentPost(data,DevolverDatos){
        const endpoint = `${url}${urlPushCommentPost}`;
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

    getCommentsEvents(data,DevolverDatos)
    {
        const endpoint = `${url}${urlGetCommentsEvent}`;
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

    getCommentsPost(data,DevolverDatos)
    {
        const endpoint = `${url}${urlGetCommentsPost}`;
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


}

export default new ApiController();