import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <p className={style.title}>{title}</p>
      <img className={style.image} src={image} alt=""/>
      <p className="accordeon">More</p>
      <ol className={style.ingredient}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
      </ol>
    </div>
  );
}

export default Recipe;