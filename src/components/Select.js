import React, { useState, useEffect } from 'react'
import Cocktailapi from '../api/Cocktailapi';

const initialCocktails = [
    {
        id: 1,
        name: 'boxer'
    },
    {
        id: 2,
        name: 'husky'
    }
]

const Select = () => {
    const [cocktails, setCocktails] = useState(initialCocktails)

    useEffect(() => {
        updateCocktails();
    }, []);

    const updateCocktails = async () => {
        const response = await Cocktailapi.get('')
        setCocktails(response.data.drinks)
    }


    return (
        <>
            <select onChange={(e) => updateCocktails(e.target.value)}>
                {cocktails.map(cocktail => (
                    <option value={cocktail.id} key={cocktail.id}>{cocktail.strDrink}</option>
                ))}
            </select>
        </>
    );
};

export default Select