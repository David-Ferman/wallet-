import React from 'react';
import developer from '../../assets/developer.png'

const ComingSoonPage = () => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="card-image">
                            <figure className="">
                                <img src={developer}
                                     alt="" style={{height:300}}/>
                            </figure>
                    </div>
                    <h1 className="title">
                        Coming Soon
                    </h1>
                    <h2 className="subtitle">
                        This section will be available shortly!
                        Sorry for the inconvenience
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default ComingSoonPage;
