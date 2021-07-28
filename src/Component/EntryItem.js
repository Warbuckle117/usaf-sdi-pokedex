import React, { useState } from 'react';

var EntryItem = ({pokemonList, index}) => {
    let [imageSource, setImageSource] = useState('');
    let [pokemonType, setPokemonType] = useState('')
    let pokemonName = pokemonList.name;
    //console.log("this is this current pokemon name: ", pokemonName)
    
    
    
    function getPokemonImage(){
        
        fetch(pokemonList.url)
        .then(result => result.json())
        .then(data => setImageSource(data.sprites.front_default))
        
        //console.log('this is the image source: ', imageSource )
        return imageSource
    
    }

    // function getPokemonImage(){
        
    //     fetch(pokemonList.url)
    //     .then(result => result.json())
    //     .then(data => setPokemonType(data.types))
        
    //     console.log('this is the image source: ', pokemonType )
    //     return pokemonType;
    
    // }
   

    // [
    //     {
    //         "name": "bulbasaur",
    //         "url": "https://pokeapi.co/api/v2/pokemon/1/"
    //     }
    // ]


    return(
    <div className="PokeEntry">
              <div className="picture">
                  <img src={getPokemonImage()} alt={pokemonName}/>
              </div>
              <div className='PokeName'> 
              {pokemonName} 
              </div>
              <div className='battleType'>
              </div>
    </div>
    );
     
    } 
    
    export default EntryItem;