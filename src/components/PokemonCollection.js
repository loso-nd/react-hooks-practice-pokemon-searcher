import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";


//Step 4: Pass in a param that allows us to access the props passed down and console.log it to ensure it is being received.
function PokemonCollection({ filteredPokemon }) {
  console.log(filteredPokemon)

  return (
    <Card.Group itemsPerRow={6}>
      {filteredPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
