import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
                    <Link className='divlink' to='/NonAlcoholic' >
                        <p> FUN AND CAREFUL</p>
                        <div
                            className="Choices">
                            <img className="choicespic1"
                                src={virgincocktail}
                                alt='drink'
                            />
                            <div className="Choices"> <Link className="nonalcoholic" to='/NonAlcoholic' >NON-ALCOHOLIC</Link> </div>
                        </div>
                    </Link>
                </div>
                <div className='card bounce'>
                    <Link to='/Alcoholic' className='divlink'>
                        <p> PARTY ANIMAL</p>
                        <div
                            className="Choices">
                            <img className="choicespic"
                                src={cocktailsthumb}
                                alt='drink'
                            />
                            <div className="Choices"> <Link className="alcoholic" to='/Alcoholic' >ALCOHOLIC</Link> </div>
                        </div>
                    </Link>
                </div>

                <div className='card bounce'>
                    <Link to='/Surprise' className='divlink'>
                        <p> SOMETHING NEW</p>
                        <img className="choicespic"
                            src={wineimage}
                            alt='drink'
                        />
                        <div className="Choices">
                            <Link className="surprise" to='/Surprise' >SURPRISE</Link>
                        </div>
                    </Link>
                </div>

            </div>
        </div >

    )
}

export default Homepage;