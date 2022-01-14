import React, { useEffect, useState } from "react";
import axios from "axios";
// install axios

const Shop = props => {

    useEffect(() => { console.log(`Shop component rendererd or rerendered.`); });

    // Build an API call to get our player data from our API
    const getPlayerData = async () => {
        let response = await axios.get('https://foxes78api.herokuapp.com/api/players')
    // if you dno't control the API or prepping it for prod. environ you should
    // build error handling into the api call AKA check for 200 response code
    // have a backup plan if you don't get a 200 response code
    // because we control this api and are still dvlping this call we can ignore
    // error handling/hearders/message--
        return response.data
    }

    // use api data as a state var
    // dont make function name with use like userPlayerData in react
    // react assume any func starting with use is a hook and treat it diff.
    const loadPlayerData = async () => {
        let data = await getPlayerData();
        console.log(data, typeof data);
        setPlayers(data);
    }
    

    // new state var for shop comp.
    // rather than be asw app comp. it'lls be asw Shop comp to cause a rerender
    // of the shop comp.
    // cont [statename, settervarname] = usestate(['set', 'value', 'for', 'statename'])
    const [players, setPlayers] = useState(() => loadPlayerData()); 

    // func to run when 'go somewhere button gets clicked
    // modplayers changes order of players array
    // uses the setter to mutate the state/change the value of the players variable
    // takes an element and moves the value to the end
    // we're mutating shop component so that it re-renders when clicked
    // state contains an array of players
    const modifyPlayers = () => { 
        let newPlayers = [...players];
        newPlayers.splice(0, 1);
        newPlayers.push(players[0]);
        setPlayers(newPlayers);
    }

    // func attached to execute when button is clicked
    return (
        <div className="Shop">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h3 className="mt-3 bg-dark">Sign our clients to your team, they're qualified in 
                    getting red cards to secure a win!</h3>
                </div>
                <div className="row justify-content-center">
                    {/* if no player data, show a loading item, if player data, show player cards */}
                    {   typeof players == 'object' // initial condition, players don't exist
                        ? // ternary operator
                        Object.values(players).map((player, index) => {
                            return <div key ={index} className="card m-3" style={{ width: 18 + 'rem' }}>
                                <img src={player.image} className="card-img-top" alt={`${player.first_name} ${player.last_name}`} />
                                <div className="card-body bg-dark">
                                    <h5 className="card-title">{`${player.first_name} ${player.last_name}`}</h5>
                                    <p className="card-text">{`${player.number} ${player.position} ${player.team} ${player.nationality}`}</p>
                                    <button className="btn btn-primary btn-danger" onClick={modifyPlayers}><strong>{`${player.transfer_cost}`}</strong></button>
                                </div>
                            </div>
                        })
                        : // ternary operator - else
                        <h1>Loading players...</h1>
                    }
                </div>
            </div>  
        </div>
    )
};

export default Shop;
