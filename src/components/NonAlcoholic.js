import React, { useEffect, useState } from 'react'
import VanillaCocktail from '../api/VanillaCocktail';
import { NavLink } from "react-router-dom";
const NonAlcoholic = () => {
    const [drinks, setDrinks] = useState([]);
    const [image, setImage] = useState('');

    useEffect(() => {
        GetDrink();
    }, []);

    const GetDrink = async () => {
        const res = await VanillaCocktail.get('')
        setDrinks(res.data.drinks);
        setImage(res.data.drinks[0].strDrinkThumb);
    }





    return (
        <div>
            <NavLink className='goback' to="/" >Go Back</NavLink>
            <select onChange={(e) => setImage(e.target.value)}>
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

export default NonAlcoholic;