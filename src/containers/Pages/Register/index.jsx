import React from 'react';
import '../../../css/login.css'

import ilustration from '../../assets/version-noche.png';
import RegisterForm from "./components/RegisterForm";

const LogIn = () => (
    <header className="site-header ">
            <div className="form">
                <RegisterForm/>
            </div>
            <div className="img">
                <img src={ilustration} alt="ilustration" />
            </div>
    </header>
);

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
