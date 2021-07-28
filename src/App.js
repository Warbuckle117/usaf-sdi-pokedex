
import './App.css';
import NavBar from './Component/NavBar';
import HomeBody from './Component/HomeBody';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
let [pokemonList, setPokemonList] = useState( [] );


useEffect(() => {
  //if(pokemonList === [])
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(result => result.json())
    .then(data => setPokemonList(data.results))
}, [])



  return (
    <div className="App">
      <nav>
      <NavBar/>
      </nav>
      <div>
      <HomeBody pokemonList={pokemonList}/>  
      </div>
      
    </div>
  );
}

export default App;
