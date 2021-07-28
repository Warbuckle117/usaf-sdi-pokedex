import React, { useState } from 'react';

var EntryItem = ({pokemonList, index, filterType}) => {
    let [imageSource, setImageSource] = useState('');
    let [pokemonType1, setPokemonType1] = useState('')
    let [pokemonType2, setPokemonType2] = useState('')
    let pokemonName = pokemonList.name;
    //console.log("this is this current pokemon name: ", pokemonName)
    
    
    
    function getPokemonImage(){
        
        fetch(pokemonList.url)
        .then(result => result.json())
        .then(data => setImageSource(data.sprites.front_default))
        
        //console.log('this is the image source: ', imageSource )
        return imageSource
    
    }

    function getPokemonType1(){

        fetch(pokemonList.url)
        .then(result => result.json())
        .then((data) => setPokemonType1(data.types[0].type.name))
      


        return pokemonType1;
    }

    function getPokemonType2(){
        
        fetch(pokemonList.url)
        .then(result => result.json())
        .then((data) => {
            
            if(data.types.length === 2){
                setPokemonType2(", " + data.types[1].type.name)
            } else {
                return setPokemonType2(' ')
            }
        })

        return pokemonType2;
    }


    return(
    <div className="PokeEntry">
        <div>
            <div className="picture">
                <img src={getPokemonImage()} alt={pokemonName}/>
            </div>
            <div className='PokeName'> 
                Name: {pokemonName} 
            </div>
            <div className='battleType'>
                Type: {getPokemonType1()}{getPokemonType2()}
            </div>
        </div>
    </div>
    );
     
    } 
    
    export default EntryItem;