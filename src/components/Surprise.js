import React, { useEffect, useState } from 'react'
import CocktailRandom from '../api/CocktailRandom';
import './Surprise.css';


const Surprise = () => {
    const [surprise, setSurprise] = useState([])
    const [image, setImage] = useState('')

    useEffect(() => {
        updateSurprise();
    }, [])


    const updateSurprise = async () => {
        const response = await CocktailRandom.get('')
        setSurprise(response.data.drinks);
        setImage(response.data.drinks[0].strDrinkThumb);
        console.log(response.data)
        const list = document.querySelector('#ingredientList')
        for (let i = 1; i < 16; i++) {
            if (response.data.drinks[0][`strIngredient${i}`] == null) {
                break;
            }
            let ingredient = document.createElement('li')
            ingredient.innerHTML = response.data.drinks[0][`strMeasure${i}`] + ':' + response.data.drinks[0][`strIngredient${i}`]
            list.append(ingredient);
        }
        const card = document.querySelector('#instructions');
        let info = document.createElement('p')
        info.innerHTML = response.data.drinks[0].strInstructions;
        card.append(info)
    }





    return (
        <div>
            <a className='goback' href="javascript:history.back()">Go Back</a>
            <select onChange={(e) => updateSurprise(e.target.value)}>
                {surprise.map(cocktail => (
                    <option value={cocktail.idDrink} key={cocktail.idDrink}>{cocktail.strDrink}</option>
                ))}
            </select>
            <img src={image} className='drinkimage' />

            <div>
                <ul id='ingredientList'>

                </ul>
                <div id='instructions'>

                </div>
            </div>
        </div>
    )
}

export default Surprise;