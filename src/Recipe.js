import React from 'react'
import style from './recipes.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    
    return(
        <div className={style.recipes}>
            <h1 className={style.title}>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li className={style['recipe-list']}>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;