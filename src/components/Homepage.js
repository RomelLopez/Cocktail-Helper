import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './Homepage.css'
import cocktailsthumb from '../images/cocktailsthumb.jpg';
const Homepage = () => {
    return (
        <div className="main">
            <div className="heading">
                <h1 className="headerwords">Welcome, please pick your preference to get started</h1>
            </div>
            <div className="container">
                <div className="Choices"> <Link className="nonalcoholic" to='/NonAlcoholic' >NON-ALCOHOLIC</Link> </div>
                <div
                    className="Choices">
                    <img className="choicespic"
                        src={cocktailsthumb}
                        alt='drink'
                    />
                    <h1 className="somethingnew">OR TRY SOMETHING NEW</h1>
                    <Link className="surprise" to='/Surprise'>Surprise Me</Link>
                </div>
                <div className="Choices"> <Link className="alcoholic" to='/Alcoholic'>ALCOHOLIC</Link></div>
            </div>
        </div>
    )
}

export default Homepage;