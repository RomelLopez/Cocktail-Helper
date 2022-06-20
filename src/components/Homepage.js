import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './Homepage.css'
import cocktailsthumb from '../images/cocktailsthumb.jpg';

const Homepage = () => {
    return (
        <div className="container">
            <div className="heading">
                <h1 className="headerwords">Welcome, please pick your preference to get started</h1>
            </div>
            <div className="main">
                <div className='card bounce'>
                    <p> FUN AND CAREFUL</p>
                    <div
                        className="Choices">
                        <img className="choicespic"
                            src={cocktailsthumb}
                            alt='drink'
                        />
                        <div className="Choices"> <Link className="nonalcoholic" to='/NonAlcoholic' >NON-ALCOHOLIC</Link> </div>
                    </div>
                </div>
                <div className='card bounce'>
                    <p> PARTY ANIMAL</p>
                    <div
                        className="Choices">
                        <img className="choicespic"
                            src={cocktailsthumb}
                            alt='drink'
                        />
                        <div className="Choices"> <Link className="alcoholic" to='/Alcoholic' >ALCOHOLIC</Link> </div>
                    </div>
                </div>

                <div className='card bounce'>
                    <p> SOMETHING NEW</p>
                    <img className="choicespic"
                        src={cocktailsthumb}
                        alt='drink'
                    />
                    <div className="Choices">
                        <Link className="surprise" to='/Surprise' >SURPRISE</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Homepage;