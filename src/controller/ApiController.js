import {Component} from 'react';

const url ="https://sipi-transform.herokuapp.com/";
//const urlLocal = "http://192.168.0.10:8080/"

const urlSql = "https://transform-ceeef.appspot.com/"

//Heroku
const urlGetProductosByNombre="transform/getProductosByTagAndName";
const urlGetPosteos="transform/getPosteos";
const urlGetPosteosByProd="transform/getPosteosByProd?id=";
const urlGetMateriales="transform/getMateriales";
const urlGetProductosByMaterial="transform/getProductosByMaterial?id=";
const urlGetEventos="transform/getEventos"
const urlGetPopularProd = "transform/getPopularProducts"
const urlPushCommentEvent = "transform/commentEvent"
const urlPushCommentPost = "transform/commentPost"
const urlGetCommentsEvent = "transform/getEventComments"
const urlGetCommentsPost = "transform/getPostComments"

//Sql
const urlGetEvents = "api/getEvents"
const urlGetMaterials = "api/getMaterials"
const urlGetCategories = "api/getCategories"
const urlGetTags = "api/getTags"
const urlGetProductsByName = "api/getProductsByName"
const urlGetPostsByProduct = "api/getPostsByProduct"
const urlGetPosts = "api/getPosts"
const urlAddCommentEvent = "api/addCommentToEvent"
const urlGetEventComments = "api/getEventComments"
const urlAddCommentPost = "api/addCommentToPost"
const urlGetPostComments = "api/getPostComments"

class ApiController extends Component
{
   
    getProductosByNombre(data,DevolverDatos)
    {
        const endpoint = `${urlSql}${urlGetProductsByName}`;
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
        const endpoint = `${urlSql}${urlGetPosts}`;
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
        const endpoint = `${urlSql}${urlGetPostsByProduct}`;
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
        const endpoint = `${urlSql}${urlGetMaterials}`;
        console.log("Buscando materiales")
       fetch(endpoint,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            //console.log("response",response);
            return response.json();
        }).then (responseData => {
                console.log(responseData);
                console.log("Recibi datos");
                okBusqueda3(responseData);
        });
    }

    /*
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
*/
    getEventos(devolverDatos){
        const endpoint = `${urlSql}${urlGetEvents}`;
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

    getCategories(devolverDatos){
        const endpoint = `${urlSql}${urlGetCategories}`;
        console.log("Buscando categorías")
       fetch(endpoint,{
            method: 'GET',
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

    getTags(devolverDatos){
        const endpoint = `${urlSql}${urlGetTags}`;
        console.log("Buscando tags")
       fetch(endpoint,{
            method: 'GET',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
       }).then ((response) => {
            //console.log("response",response);
            return response.json();
        }).then (responseData => {
                console.log(responseData);
                console.log("Recibi datos");
                devolverDatos(responseData);
        });
    }

    /*
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
    */
    
    pushCommentEvent(data, DevolverDatos){
        const endpoint = `${urlSql}${urlAddCommentEvent}`;
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
        const endpoint = `${urlSql}${urlAddCommentPost}`;
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
        const endpoint = `${urlSql}${urlGetEventComments}`;
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
        const endpoint = `${urlSql}${urlGetPostComments}`;
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