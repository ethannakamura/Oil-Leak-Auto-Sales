import React, { useEffect } from "react";

const Home = props => {

    useEffect(() => { console.log(`Home component rendererd or rerendered.`); });

    return (
        <div className='Home'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="leadtitle col-6 ">
                        <p>We Take Red Cards So You Don't Have To</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
