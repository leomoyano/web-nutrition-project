import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {

const APP_ID = 'cfeeb493';
const APP_KEY = '59c36bf8176ad6043253f8aec99fa50d';

useEffect(() =>{
  getRecipes();
},[])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  
}

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}
export default App;
