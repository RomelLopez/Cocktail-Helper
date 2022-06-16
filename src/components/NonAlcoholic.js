import React, { useEffect, useState } from 'react'
import './NonAlcoholic.css'
import VanillaCocktail from '../api/VanillaCocktail';
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
        console.log(drinks)
    }





    return (
        <div>
            <a className='goback' href="javascript:history.back()">Go Back</a>
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