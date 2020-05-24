import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { notify } from 'react-notify-toast';


class FreshAddress extends React.Component {

    render() {
        
        const { wallet } = this.props;
            return(
            <div className="cotizacion">
                <h1><b>Receive Bitcoin</b></h1>
                <div className="cotizacion_data">
                <div className="address">
                <p className="m-r">Fresh Address</p>
                <input className="input-value m-r opacidad_input" type="text" readOnly defaultValue={wallet.address} onChange={( { target: { value } } ) => this.setState( { value, copied: false } )}/>
                </div>
                <div className="address">
                <CopyToClipboard text={wallet.address}
                onCopy={() => { this.setState( { copied: true } );
                                notify.show(
                                <div>
                                <i className="fa fa-copy " style={{ marginRight: '10px' }}/>
                                Copiado al portapapeles
                                <i className="fa fa-close" style={{ marginLeft: '20px' }}
                                onClick={notify.hide}/>
                                </div>,
                                "success", 5000 );} }>
                        <button className="botton_formato m-r ">Copiar</button>
                </CopyToClipboard>
                <button className="botton_formato m-r ">Compartir</button>
                </div>
                </div>
            </div>
        );
    }
}

export default FreshAddress;
