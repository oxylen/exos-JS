async function fetchPokemon(){
    const data = await fetch('https://pokeapi.co/api/v2/pokemon');
    const result = await data.json();
    // console.log(result);

    const tab=[];
    for(let i=0; i<20; i++){
        tab.push(result.results[i].name);
        let pokemon = document.createElement("p");
        pokemon.innerText=tab[i];
        document.body.appendChild(pokemon);
    }
    // console.log(tab);
}

fetchPokemon();