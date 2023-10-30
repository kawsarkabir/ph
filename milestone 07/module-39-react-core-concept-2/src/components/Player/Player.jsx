import React, { useState } from 'react';



const Player = () => {
    const [team, setTeam] = useState(0)

    const handleAdd = () =>{
        setTeam(team + 1)
    }
    const handleRemove = () =>{
        setTeam(team - 1)
    }
    return (
        <div>
            <h1>Team: {team}</h1>
            <button onClick={handleAdd}>Add Team</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Player;