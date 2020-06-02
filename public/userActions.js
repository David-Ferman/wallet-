import { userConstants } from '../../constants/user.constants';
import { userService } from '../../Services/user.service';
import { alertActions } from '../../redux/actions/alertActions';
//import { history } from '../../Helpers/history';
import swal from 'sweetalert';
import api from '../../Services/eye.services';
import Core from '../../Services/eye.core';

let core = new Core()
export {
    login,
    logout,
    register,
    getAll,
    remove,
    Monedas,
    Salir,
    Obtener_Transacciones
};
function login(email, password, history, callback) {
    if (!password || !email) return;

    api.user.post({ email, password })
        .then(
            response => {
                callback();
                let user = response.data.payload;
                console.log(user);
                if (!user) {
                    return swal({
                        text: "Usuario o contraseña no válido!",
                        icon: "error",
                    });
                }
                localStorage.setItem('user', user);
                history.push('/app/transactions');
            },
            error => {
                callback();
                swal("Ocurrio un error intenta de nuevo mas tarde").then(r => history.push('/login'));
                

            }
        );
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    //history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function remove(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
//OBTIENE LA CRIPTOMONEDAS DEL USUARIO
function Monedas() {
    
    return async (dispatch)=>{
        api.wallets.get().then(response => {
            let wallets = response.data.payload;
            dispatch(monedero(wallets));
        }).catch(console.log);
    }
  }

  

const monedero=(wallet)=>({
    type:userConstants.MONEDAS,
    payload:wallet
});
//SALIR DE LA SESION
function Salir() {
    return async (dispatch)=>{            
        dispatch(salir());
             
    }
}
const salir=()=>({
    type:userConstants.SALIR,
});

//FUNCION DONDE SE OBTIENEN LAS TRANSACCIONES SEGUN LA MONEDA SELECCIONADA
function Obtener_Transacciones(moneda) {
    return async (dispatch)=>{
        try{
             await api.coin[moneda['currency']](moneda.addresses[0]).then(data => {
                
                 core.setCoin(moneda['currency']);
                 let address = core.format(data, moneda['addresses'][0]);
                 dispatch(transacciones(address.txs));
                 dispatch(moneda_actual(moneda));
             })
            }catch(error){
                dispatch(transacciones("error"))
            }
            
        
    }
}
const transacciones=(trans)=>({
    type:userConstants.OBTENIENDO_TRANSACCIONES,
    payload:trans
});
const moneda_actual=(blc)=>({
    type:userConstants.OBTENIENDO_MONEDA_SELECCIONADA,
    payload:blc
});





