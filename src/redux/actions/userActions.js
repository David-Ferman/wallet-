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
    Monedas
};
function login(email, password, history, callback) {
    //return dispatch => {
    //dispatch(request({ username }))

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
                /* localStorage.setItem('currency', 'btc');
                localStorage.setItem('coinName', 'bitcoin');
                history.push('/app/transactions'); */

                // get all wallets
                api.wallets.get().then(response => {
                    let wallets = response.data.payload;
                    console.log(wallets);
                    // take wallet
                    let wallet = wallets[5];
                    // get information from wallet
                    api.coin[wallet['currency']]('0x80cb37F45e1f3781C0c848C77abc2a7850f883eB').then(data => {
                        console.log(data);
                        // set coin to core
                        core.setCoin(wallet['currency']);
                        // get transactions
                        let address = core.format(data, wallet['addresses'][0]);
                        // address contains {balance, txs}
                        console.log(address)
                    }).catch(console.log)
                }).catch(console.log);
                history.push('/app/transactions');
            },
            error => {
                callback();
                swal("Ocurrio un error intenta de nuevo mas tarde").then(r => history.push('/login'));
                /*dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));*/

            }
        );
    //};

    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    // function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
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
