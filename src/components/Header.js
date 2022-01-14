import React, { useEffect } from "react";

const Header = prop => {

    // useEffect() runs a callback func. each time comp. is rendered/reredered (by default)
    useEffect(() => { console.log('Embed component rendered or rerendered') })

    return (
        <div className="Embed bg-dark">
            <h4 className="Let">LET US</h4>
            <header>
                <iframe width="560" height="315"
                    src= "https://www.youtube.com/embed/01aV_PbiT30" 
                    frameBorder="0" allow="autoplay; encrypted-media"
                    allowFullScreen/>
            <h4 className="Not">LET US</h4>
            </header>
        </div>
    )
}

export default Header;
