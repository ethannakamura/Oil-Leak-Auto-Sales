import React, { useEffect, useState } from "react";

const Shop = props => {

    useEffect(() => { console.log(`Shop component rendererd or rerendered.`); });

    // new state var for shop comp.
    // rather than be asw app comp. it'lls be asw Shop comp to cause a rerender
    // of the shop comp.
    // cont [statename, settervarname] = usestate(['set', 'value', 'for', 'statename'])
    const [models, setModels] = useState(['Mustang', 'Civic', 'Mazda6', 'Lancer', 'LaFerrari']);

    // func to run when 'go somewhere button gets clicked
    // modmodels changes order of models array
    // uses the setter to mutate the state/change the value of the models variable
    // takes an element and moves the value to the end
    // we're mutating shop component so that it re-renders when clicked
    // state contains an array of models
    const modifyModels = () => { 
        let newModels = [...models];
        newModels.splice(0, 1);
        newModels.push(models[0]);
        setModels(newModels);
    }

    // func attached to execute when button is clicked
    return (
        <div className="Shop">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1>This will be the shop.</h1>
                </div>
                <div className="row justify-content-center">
                    {
                        models.map((model, index) => {
                            return <div key ={index} className="card m-3" style={{ width: 18 + 'rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{model}</h5>
                                    <p className="card-text">This content is created from the models state of the Shop component.</p>
                                    <button className="btn btn-primary btn-danger" onClick={modifyModels}>modifyModels</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>  
        </div>
            )
        };
            export default Shop;
