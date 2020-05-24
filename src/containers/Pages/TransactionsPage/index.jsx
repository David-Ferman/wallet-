import React from 'react';
import { Link } from "react-router-dom";
//import { userService } from "../../../Services/user.service";
import moment from "moment";

class TransactionsPage extends React.Component {

    state = {
        transactions: [],
        currentCurrency: '',
        loading: false

    };

    componentDidMount() {
        /*this.setState({loading: true, currentCurrency: localStorage.getItem( 'currency' ) || 'btc'});
        userService.getTransactions( localStorage.getItem( "user" ) ).then( transactions => {
            this.setState( { transactions, loading: false } );
        } );*/

    }

    render() {
        const getCurrentDate = moment().locale( 'es' ).format( 'LLLL' );
        return (
           
            <div className="componente_primario">
                <div className="fecha">
                <h1>Account {this.state.currentCurrency.toUpperCase()}</h1>
                <div>{getCurrentDate}</div> 
                </div>
                <div className="data_transaccion">
                <h1>Transacciones</h1>
                <div className="search_transaccion">
                            
                                <input  className="seach" type="text" placeholder="Buscar Direcciones, transacciones, block"/>
                                        
                            <Link to="/transactions">
                                <button className="button  is-rounded is-small"><span className="btn-text">Export</span>
                                </button>
                            </Link>
                </div>
                </div>
                <div className="results_transaction">

                </div>
            </div>
        );
    }
}

export default TransactionsPage;
