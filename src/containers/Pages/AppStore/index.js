import React from 'react';
import iphone from '../../assets/iphoneWallet.png';
import appStoreLogo from '../../assets/app_store.svg'
import googleStoreLogo from '../../assets/google_store.svg'

const AppStorePage = () => {
    return (
        <section className="section is-medium">
            <div className="container app-wrapper">
                <div className="columns is-vcentered">
                    <div className="column has-text-centered">
                        <h1 className="title">Descarga la aplicación put EyeWallet</h1>
                        <p className="subtitle">Obten la mejor experiencia optimizada para dispositivos móviles </p>
                        <a href="https://apps.apple.com/co/app/eyewallet/id1338756423"
                           target='_blank' rel='noopener noreferrer'><img src={appStoreLogo} alt="applogo" className="app-store-logo-responsive"/></a>
                        <a href="https://play.google.com/store/apps/details?id=com.eyewallet.io&hl=es_MX"
                           target='_blank' rel='noopener noreferrer'><img src={googleStoreLogo} alt="googlelogo" className="app-store-logo-responsive"/></a>
                    </div>
                    <div className="column has-text-centered">
                        <img src={iphone} alt="iphone" style={{ width: 200 }}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppStorePage;
