import React, { useState, useEffect } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import { getPokemons } from "./request/requests";
import { url } from "./constants/url";
import axios from "axios";
import { Rotas } from './rotas/Rotas'
import { Header, WebSite } from './HeaderFooter/Header'
import { Footer } from './HeaderFooter/Footer'


const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonsPokedex, setPokemonPokedex] = useState([])
  const [pokemonsHome, setPokemonsHome] = useState([])

  const states = { pokemons, pokemonDetails, pokemonsPokedex, pokemonsHome }
  const setters = { setPokemons, setPokemonDetails, setPokemonPokedex, setPokemonsHome }


  useEffect(() => {
    getPokemons(setPokemons)
  }, [])


  useEffect(() => {
    const newList = [];

    pokemons.forEach((item) => {
      axios
        .get(`${url}${item.name}`)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemonsHome(orderedList);
          }
        })
        .catch((err) => console.log(err.message));
    });
  }, [pokemons]);

  return (
    <GlobalContext.Provider value={{ states, setters }}>
      <WebSite>
      <Header />
      <Rotas />
      <Footer />
      </WebSite>
    </GlobalContext.Provider>
  );
}

export default App;
