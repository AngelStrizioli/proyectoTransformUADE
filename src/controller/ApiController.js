import {Component} from 'react';
import { Feather } from '@expo/vector-icons';

const url ="https://sipi-transform.herokuapp.com/";
//const url = "https//127.0.0.1:8080/";
const urlLocal = "http://192.168.0.8:8080/"

const urlBuscarProductos="transform/buscarProductos"; //Needs wowrk
const urlGetProductsByTagName="getProductsByTagName";

const urlGetPosteos="transform/getPosteos"; //Anda
const urlGetPosteosByProd="transform/getPosteosByProd?id="; //Anda
const urlGetMateriales="transform/getMateriales"; //Anda
const urlGetProductosByMaterial="transform/getProductosByMaterial?id="; //Anda
const urlGetEventos="transform/getEvents" //Anda

//Work on this
const urlGetPopularProd = "transform/getPopularProducts"

const urlPushCommentEvent = "/api/addCommentToEvent"
const urlPushCommentPost = "transform/commentPost"
const urlGetCommentsEvent = "transform/getEventComments"
const urlGetCommentsPost = "transform/getPostComments"


class ApiController extends Component
{
    getProductosByNombre(data,DevolverDatos)
    {
        const endpoint = `${url}${urlBuscarProductos}`;
        fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then((response) => {
            return response.json();
        }).then(responseData => {
            DevolverDatos(responseData);
        }).catch(err => {
            throw err;
        });
    }

    getTagsByName(data) {
        const endpoint = `${url}${urlGetProductsByTagName}`;
        fetch(endpoint, {
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
        }).catch(err => {
            throw err;
        })
    }

    getPosteos(okBusqueda)
    {
        const endpoint = `${url}${urlGetPosteos}`;
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
            return response.json();
        }).then (responseData => {
            devolverDatos(responseData);
        });
    }

    getPopularProducts(devolverDatos){
        const endpoint = `${url}${urlGetPopularProd}`;
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            return response.json();
        }).then (responseData => {
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
            DevolverDatos(responseData);
    });
    }

    pushCommentPost(data,DevolverDatos){
        const endpoint = `${urlLocal}${urlPushCommentPost}`;
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
            DevolverDatos(responseData);
        });
    }


}

export default new ApiController();