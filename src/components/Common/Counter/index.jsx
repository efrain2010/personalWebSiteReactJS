import React from 'react';

const Counter = () => (
    <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
        <div className="container">
            <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text">
                            <strong className="number" data-number="{100}">0</strong>
                            <span>Awards</span>
                        </div>
                    </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text">
                            <strong className="number" data-number="{1200}">0</strong>
                            <span>Complete Projects</span>
                        </div>
                    </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text">
                            <strong className="number" data-number="{1200}">0</strong>
                            <span>Happy Customers</span>
                        </div>
                    </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text">
                            <strong className="number" data-number="{500}">0</strong>
                            <span>Cups of coffee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Counter;
