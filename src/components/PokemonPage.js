import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  //Step 2: define my state and pass as props into the PokemonCollection
  let [pokeCollection, setPokeCollection] = useState([]) 
  let [filteredPokemon, setFilteredPokemon] = useState([])

//Step 1
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(pokeData => {
      setPokeCollection(pokeData)
      setFilteredPokemon(pokeData)
    })
       //grab the data and store it into state
  }, []) //Adding the bracket ensures that it only runs once


  const searchPokemon = (searchTerm) =>{
    console.log(searchTerm) //We have access to the user input from the <search />'
    //by adding includes checks if the letters are included in the user input
    console.log(pokeCollection.filter(pokemon => pokemon.name.includes === searchTerm))

    //we what to the be able to set the pokemen search input to the updated state, but a filtered one. Since the search doesnt get updated into the orginal state, we want create a filteredPokemon state and replace the pokeCollection props being passed down.
    //This way the setFilteredPokemon will always check the original state pokeCollection and compare to the user input
    // setFilteredPokemon(pokeCollection.filter(pokemon => pokemon.name.includes === searchTerm))
    return setFilteredPokemon(pokeCollection.filter(pokemon => pokemon.name.includes(searchTerm)))
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchPokemon={searchPokemon}/>
      <br />
      <PokemonCollection 
      // pokeCollection={pokeCollection}
        filteredPokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
