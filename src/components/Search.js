import React from "react";

function Search({ searchPokemon }) {

//when an onChange event is triggered, it will invoke the handleChange function which will fire off the searchPokemon() function that was passed down and being passed back up to the Parent Component <PokemonPage />
  const handleChange = (e) => {
    console.log(e.target.value) //in order to access the user input we need the (e) which is passed in a param in the our func and as our anonymous function for the sythenic event onChange
    searchPokemon(e.target.value) //now the cb function has access to the param (e)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        {/* Must have a param of (e) in order to access the user input and to pass into our cb func */}
        <input className="prompt" onChange={(e) => handleChange(e)}/> 
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
