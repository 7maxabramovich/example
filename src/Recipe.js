import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <p className={style.title}>{title}</p>
      <ol className={style.ingredient}>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p className="">{calories}</p>
      <img className={style.image} src={image} alt=""/>
    </div>
  );
}

export default Recipe;