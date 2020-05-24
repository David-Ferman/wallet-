import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './store';
import Notifications from 'react-notify-toast';
//import logo from '../assets/logo/logoBlack.svg'
//import { func } from 'prop-types';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            loaded: false,
        };
    }

    componentDidMount() {
       
        document.addEventListener('DOMContentLoaded',function(){
            var hamburgerButton = document.querySelector('.hamburger__button');
            var mobileNav = document.querySelector('.mobile');
            function openMobile() {
                mobileNav.classList.toggle('open');
            }
            if(hamburgerButton){
                        hamburgerButton.addEventListener('click', openMobile);   
    
            }
        });
       
        
          
        window.addEventListener( 'load', () => {

            this.setState( { loading: true } );
            this.setState( { loaded: true } );
        } );


    }

    render() {
        
        return (
            <Provider store={store}>
                <Notifications/>
                
                <div>
                    <Router/>
                </div>
            </Provider>
        );
    }
}

export default App;
