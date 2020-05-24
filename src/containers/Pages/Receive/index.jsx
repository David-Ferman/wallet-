import React from 'react';
import FreshAddress from "./components/FreshAddress";
import QRComponent from "./components/QRComponent";
import queryString from "query-string";
import { userService } from "../../../Services/user.service";

class ReceivePage extends React.Component {

    state = {
        wallet: ''
    };

    componentDidMount() {
        const query = queryString.parse( this.props.location.search );
        const currency = query.currency || this.state.currentCurrency;
        userService.wallet( localStorage.getItem( "user" ), currency ).then( wallet => {
            this.setState( { wallet } );
        } );
    }

    render() {
        
        return (
            <div className="componente_primario">
                <FreshAddress wallet={this.state.wallet}/>
                <QRComponent wallet={this.state.wallet}/>
            </div>

            
        );
    }
}

export default ReceivePage;
