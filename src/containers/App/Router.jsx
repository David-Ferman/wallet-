import React from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import { PrivateRoute } from '../Components/PrivateRoute';

import LogIn from '../Pages/LogIn/index';
import Register from '../Pages/Register/index';
import PaswordRecovery from '../Pages/Forgot/index';
import TransactionsPage from '../Pages/TransactionsPage/index';
import ExchangePage from '../Pages/Exchange/index';
import Buy from '../Pages/Buy/index';
import Send from '../Pages/Send/index';
import Receive from '../Pages/Receive/index';
import NotFound from '../Pages/404/index'

import HomePage from '../Pages/Home/index';
import Sidebar from "../Layout/sidebar/Sidebar";
import SettingsPage from "../Pages/Settings";
import ComingSoonPage from "../Pages/ComingSoon";

import transacciones from '../assets/Iconos/transacciones.svg';
import exchange from '../assets/Iconos/Exchange.svg';
import tdc from '../assets/Iconos/TDC.svg';
import buy from '../assets/Iconos/Buy.svg';
import enviar from '../assets/Iconos/enviar.svg';
import recibir from '../assets/Iconos/Recibir.svg';
import salida from '../assets/Iconos/salida.svg';
import { logout } from "../../redux/actions/userActions";







const Pages = () => (
    
        <Switch>
            <PrivateRoute exact path="/app/home" component={HomePage}/>
            <PrivateRoute exact path="/app/transactions" component={TransactionsPage}/>
            <PrivateRoute exact path="/app/exchange" component={ExchangePage}/>
            <PrivateRoute exact path="/app/buy" component={Buy}/>
            <PrivateRoute exact path="/app/send" component={Send}/>
            <PrivateRoute exact path="/app/receive" component={Receive}/>
            <PrivateRoute exact path="/app/settings" component={SettingsPage}/>
            <PrivateRoute exact path="/app/soon" component={ComingSoonPage}/>
            <PrivateRoute exact path="/app/404" component={NotFound}/>
            <Redirect from='*' to='/app/404' />
        </Switch>
   
);

const wrappedRoutes = (props) => (
   
    <div className="contenedor_compuesto">
        <Layout/>
        <div className="contenedor_componenetes">
                <div className="sidebar_componentes">
                    <Sidebar {...props}/>
                </div>
                <div className="rutas_componentes">
                <Route path="/" component={Pages}/>
                </div>
                
            
        </div>
        <button className="flotante hamburger__button"><p>+</p></button>
        <nav className="mobile">
            <ul className="mobile__items">
            <li ><img src={transacciones} alt="transaccionesimg"  /><Link to="/app/transactions" className="white" >Transacciones</Link></li>
            <li><img src={exchange} alt="transaccionesimg "/><Link to="/app/exchange" className="white">Exchange</Link></li>
            <li><img src={tdc} alt="transaccionesimg"  /><Link to="/app/tdc" className="white">TDC</Link></li>
            <li><img src={buy} alt="transaccionesimg"  /><Link to="/app/buy" className="white">Comprar</Link></li>
            <li><img src={enviar} alt="transaccionesimg " /><Link to="/app/send" className="white">Enviar</Link></li>
            <li><img src={recibir} alt="transaccionesimg"  /><Link to="/app/receive" className="white">Recibir</Link></li>
            <li><img src={salida} alt="transaccionesimg"  /><Link to="/login" className="white" onClick={() => logout()}>Salida</Link></li>            
            </ul>
        </nav>
    </div>

);

const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route exact path="/" component={LogIn}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/passwordRecovery" component={PaswordRecovery}/>
                <Route path="/app" component={wrappedRoutes}/>
                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
