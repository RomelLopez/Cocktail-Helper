import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import './Homepage.css'
import cocktailsthumb from '../images/cocktailsthumb.jpg';
import soberimageupdated from '../images/soberimageupdated.png';
import wineimage from '../images/wineimage.jpg';
import virgincocktail from '../images/virgincocktail.png';
const Homepage = () => {
    return (

        <div className="container">
            <div className="heading">
                <h1 className="headerwords">Welcome, please pick your preference to get started</h1>
            </div>
            <div className="main">
                <div className='card bounce'>
                    <NavLink className='divlink' to='/NonAlcoholic' >
                        <p> FUN AND CAREFUL</p>
                        <img className="choicespic1"
                            src={virgincocktail}
                            alt='drink'
                        />
                        <div className="Choices nonalcoholic" to='/NonAlcoholic'> NON-ALCOHOLIC </div>
                    </NavLink>
                </div>
                <div className='card bounce'>
                    <NavLink to='/Alcoholic' className='divlink'>
                        <p> PARTY ANIMAL</p>
                        <img className="choicespic"
                            src={cocktailsthumb}
                            alt='drink'
                        />
                        <div className="Choices alcoholic" to='/Alcoholic' >ALCOHOLIC </div>
                    </NavLink>
                </div>

                <div className='card bounce'>
                    <NavLink to='/Surprise' className='divlink'>
                        <p> SOMETHING NEW</p>
                        <img className="choicespic"
                            src={wineimage}
                            alt='drink'
                        />
                        <div className="Choices surprise" to='/Surprise' >SURPRISE </div>
                    </NavLink>
                </div>

            </div>
        </div >

    )
}

export default Homepage;