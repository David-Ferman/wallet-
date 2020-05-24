import React from 'react';
import notFound from '../../assets/404-large.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="section is-full-height">
            <div className="container">
                <div className="columns ">
                    <div className="column has-text-centered is-center-content">
                        <img src={notFound} style={{width:200}} alt="not Found"/>
                        <h1 className="title">404 Page Not Found</h1>
                        <p className="subtitle">The page requested does not exist!.</p>
                        <Link to={'/app/transactions'} className="button is-info">Go Home</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
