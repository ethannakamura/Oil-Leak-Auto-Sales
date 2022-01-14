import React, { useEffect } from "react";

const Sponsorships = props => {
  

    // data, props, state are what we use to control components lifecycle
    // comp. lifecycle is rendered/shown/not shown screen or a changed state
    // attempt to redefine Makes -> add another
    // setMakes causes Home to re render which causes app to re-render
    
    // props.setMakes(['Volvo']); #bad --> causes infinite renders

    // can't use setMakes anywhere, put it in a func tied to an event
    let addMakes = () =>{
    // addMakes is a func. to mutate Makes state, lets us modify our makes
    // array then it will use setMakes to mutate that state
    // we need to run an out of place process use setState to update and
    // re render
        let newMakes = [...props.makes]; // spread operator ... allows us to make a copy of props.makes
        newMakes.push('T-Mobile');
        props.setMakes(newMakes); // update our state and force a re-render
    }
    // when our state mutates our component re-renders, changing the value
    // of our state property
    
    // useEffect() HOOK runs tis callback func run ea. time a compo. re/renders (extra option to use)
    // switching between home/shop page causes rerenders in the react app
    // this runs the useEffect hook for each page
    useEffect(() => {
        console.log(`Rendered or rerendered Sponsorships! Number of makes: ${props.makes.length}.`);});
    // signing in--adding to a cart happen at this top section, things the user 
    // doesn't see
    // inside function stuff happens user doesn't see, working with states, hooks, databases

    // what is shown on the screen when the comp is loaded is after the return
    // inside return : what are we going to render/show on screen etc.

    return (
        <div className='Sponsorships'>
            <p className="text-white">Red Card Talent Management is not liable for contract cancellations</p>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <table className="sponsortitle table">
                            <thead>
                                <tr>
                                    <th className="text-white">Our Clients Are Sponsored By:</th>
                                </tr>
                                <tr>
                                    <th><button className="btn btn-large btn-info btn-danger fonbold" onClick={addMakes}><strong>Pending Sponsorships</strong></button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // map takes each element from the array and gives back an array 
                                    // of the returned values from that map for each make in makes
                                    // we're returning those makes
                                    props.makes.map((makes, index) => {
                                        return <tr key={index}><td>{makes}</td></tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sponsorships;