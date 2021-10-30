import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '7149d9ba';
  const APP_KEY = 'ebef06467ea811869945fba7ab5b6211';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

    let accordeon = document.querySelectorAll('.accordeon');
    for (let i = 0; i < accordeon.length; i++) {
      accordeon[i].addEventListener("click", function() {
        accordeon[i].nextElementSibling.classList.toggle("active");
      });
    }
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch} 
         />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.url} 
            title={recipe.recipe.label} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;