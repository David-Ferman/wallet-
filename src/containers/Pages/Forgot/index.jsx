import React from 'react';
import '../../../css/login.css'
import coin1 from '../../assets/Monedas/coin1.png';
import coin2 from '../../assets/Monedas/coin2.png';
import coin3 from '../../assets/Monedas/coin3.png';
import ilustration from '../../assets/version-noche.png';
import ForgotForm from "./components/ForgotForm";

const LogIn = () => (
    <section className="hero is-success is-fullheight">
        <div className="columns">
            <div>
                <div className="coin1">
                    <img src={coin1} alt="coin 1"  />
                </div>
                <div className="coin2 is-hidden-mobile">
                    <img src={coin2} alt="coin2" />
                </div>
                <div className="coin3">
                    <img src={coin3} alt="coin3" />
                </div>
                <ForgotForm/>
                <p className="copyright">2019 Exchange By LabSatoshi</p>
            </div>
            <div className="column is-hidden-mobile ">
                <img src={ilustration} alt="ilustration" />
            </div>
        </div>
    </section>
);

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
