import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
    return (
        <div className="home-div">
        <img 
        className="home-banner"
        src="Assets/Pizza.jpg"
        alt="Pizza Image"
        ></img>
        <button>
            Order Pizza!
        </button>
        </div>
    )
}

export default Home