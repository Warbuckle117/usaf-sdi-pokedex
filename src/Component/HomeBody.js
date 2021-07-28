import { filter } from "async";
import EntryItem from "./EntryItem";
import React, { useState } from 'react';

function HomeBody ({pokemonList  }) {
  let filterType = 'grass';
  let filterList = [];
  let [pokemonType1, setPokemonType1] = useState('')
  let [pokemonType2, setPokemonType2] = useState('')

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


function filter(){
  let pokeList = pokemonList;

    if(filter === 'none'){
      filterList = pokeList;
    }
    else{
      for(let i=0;i<pokeList.length;i++){
        if(getPokemonType1() === filter || getPokemonType2() === filter){
          filterList.push(pokeList[i])
        }
      }
    }

  console.log(filterList)
}

// {filter(pokemonList, filterType)}

    return (
        <div>
            <div>
                dropdown type filter
                

                
            </div>
            <div className="poke-list">
            {
                pokemonList.map((pokemonList, index) => {
                  
                  return (<EntryItem pokemonList={pokemonList} key={index} />)
                })

            }
            </div>
        </div>
    )
}




export default HomeBody;