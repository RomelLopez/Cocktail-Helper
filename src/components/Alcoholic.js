import React, { useState, useEffect } from 'react'
import AlcoholicCocktail from '../api/AlcoholicCocktail';
import './Alcohol.css';
const Alcoholic = () => {

    const [drinks, updateDrinks] = useState([]);
    const [image, updateImage] = useState('')

    useEffect(() => {
        getDrinks()
    }, [])

    const getDrinks = async () => {
        const res = await AlcoholicCocktail.get('');
        updateDrinks(res.data.drinks);
        updateImage(res.data.drinks[0].strDrinkThumb);
    }

    return (
        <div>
            <select onChange={(e) => updateImage(e.target.value)}>
                {drinks.map((cocktail) => (
                    <option value={cocktail.strDrinkThumb} key={cocktail.idDrink}>
                        {cocktail.strDrink}
                    </option>
                ))}
            </select>
            <img src={image} className='imagedrink' />

        </div>
    )
}

export default Alcoholic