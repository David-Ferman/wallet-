import { apiUrl } from '../config';
import { authHeader } from '../Helpers/auth-header';
import swal from "sweetalert";

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    balance,
    wallet,
    getTransactions,
    getAllWallets,
    delete: _delete
};

export function login( email, password ) {
    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { email, password } )
    };
    return fetch( `${apiUrl}/sessions`, requestOptions )
        .then( handleResponse )
        .then( response => {
            const payload = response.payload;
            localStorage.setItem( 'user', payload );
            return payload;
        } ).catch( e => console.error( e ) );
}

export function getTransactions( token ) {

    const currency = localStorage.getItem( 'currency' ) || 'btc';
    const requestOptions = {
        crossDomain: true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    };
    return fetch( `${apiUrl}/transactions/${currency}`, requestOptions )
        .then( handleResponse )
        .then( response => {
            return response.payload;
        } ).catch( e => []);
}

export function wallet( token ) {
    const currency = localStorage.getItem( 'currency' ) || 'btc';
    const requestOptions = {
        crossDomain: true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    };
    return fetch( `${apiUrl}/wallets/${currency}`, requestOptions )
        .then( handleResponse )
        .then( response => {
            return {
                address: response.payload,
                currency
            };
        } ).catch( e => console.error( e ) );
}

export function getAllWallets(  ) {

    const token = localStorage.getItem('user');
    const requestOptions = {
        crossDomain: true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    };
    return fetch( `${apiUrl}/wallets`, requestOptions )
        .then( handleResponse )
        .then( response => {
            return response.payload;
        } ).catch( e => console.error( e ) );
}


export function balance( token ) {
    const currency = localStorage.getItem( 'currency' ) || 'btc';
    const requestOptions = {
        crossDomain: true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    };
    return fetch( `${apiUrl}/wallets/${currency}/balance`, requestOptions )
        .then( handleResponse )
        .then( response => {
            return response.payload;
        } ).catch( e => console.error( e ) );
}


export function send( address, amount  ) {
    const currency = localStorage.getItem( 'currency' ) || 'btc';
    const token = localStorage.getItem( "user" );
    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
        body: JSON.stringify( {
            "currency": currency,
            "to": address,
            "amount": amount
        } )
    };
    return fetch( `${apiUrl}/transactions/send`, requestOptions )
        .then( handleResponse )
        .then( response => {
            return response.payload;
        } ).catch( e => {
            swal({
                title: "Error!",
                text: "We could not proccess the transaction, please try again later",
                icon: "error",
            });
            console.error( e ) ;
        });



}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem( 'user' );
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch( `${apiUrl}/users`, requestOptions ).then( handleResponse );
}

function getById( id ) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch( `${apiUrl}/users/${id}`, requestOptions ).then( handleResponse );
}

function register( user ) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( user )
    };

    return fetch( `${apiUrl}/users/register`, requestOptions ).then( handleResponse );
}

function update( user ) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify( user )
    };

    return fetch( `${apiUrl}/users/${user.id}`, requestOptions ).then( handleResponse );
    ;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete( id ) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch( `${apiUrl}/users/${id}`, requestOptions ).then( handleResponse );
}

function handleResponse( response ) {
    return response.text().then( text => {
        const data = text && JSON.parse( text );
        if( !response.ok ) {
            if( response.status === 401 ) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload( true );
            }

            const error = ( data && data.message ) || response.statusText;
            return Promise.reject( error );
        }

        return data;
    } );
}

