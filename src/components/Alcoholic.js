import React, { useState, useEffect } from 'react'
import AlcoholicCocktail from '../api/AlcoholicCocktail';
import './Alcohol.css';
import { NavLink } from 'react-router-dom';

const Alcoholic = () => {

    const [drinks, updateDrinks] = useState([]);
    const [image, updateImage] = useState('');
    const [numDrink, updateNumDrink] = useState('')

    useEffect(() => {
        getDrinks()
    }, [])

    const getDrinks = async () => {
        const res = await AlcoholicCocktail.get('');
        updateDrinks(res.data.drinks);
        updateImage(res.data.drinks[0].strDrinkThumb);
        updateNumDrink(res.data.drinks[0].idDrink);
    }

    return (
        <div>
            <NavLink className='goback' to="/" >Go Back</NavLink>
            <select onChange={(e) => updateImage(e.target.value)}>
                {drinks.map((cocktail) => (
                    <option value={cocktail.strDrinkThumb} key={cocktail.idDrink}>
                        {cocktail.strDrink}
                    </option>
                ))}
            </select>
            <img src={image} className='imagedrink' />
            <h1>{numDrink}</h1>
        </div>
    )
}

export default Alcoholic