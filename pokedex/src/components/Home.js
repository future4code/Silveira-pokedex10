import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { Detalhes } from "./Detalhes";
import { getPokemons } from "../request/requests";
import { PokemonList, PokemonCard } from './Styles'

export const Home = () => {
    const navigate = useNavigate()
    const { states, setters } = useContext(GlobalContext)
    const { pokemonsPokedex, pokemonsHome } = states
    const { setPokemonPokedex, setPokemonsHome } = setters

    useEffect(() => {
        getPokemons()
    }, [])

    const goPokedex = () => {
        navigate('/Pokedex')
    }

    const addToPokedex = (poke) => {
        const newPokemonsPokedex = [...pokemonsPokedex];
        const newPokemons = [...pokemonsHome]
        const index = pokemonsHome.indexOf(poke)
        const position = pokemonsPokedex.findIndex((item) => {
            return item.name === poke.name;
        })
        if (position === -1) {
            newPokemonsPokedex.push(poke)
            setPokemonPokedex(newPokemonsPokedex)
        }
        if (index > -1) {
            newPokemons.splice(index, 1)
            setPokemonsHome([...newPokemons])
        }
    }

    const renderPokemons = pokemonsHome.map((pokemon) => {
            return (
                <PokemonCard key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    <div>
                        <button onClick={() => addToPokedex(pokemon)}>Adicionar Pokedex</button>
                        <button onClick={() => Detalhes()}>Ir para Detalhes</button>
                    </div>
                </PokemonCard>
            )
        })

    return (
        <div>
            <div>
                <h1>Lista de Pokemons</h1>
                <button onClick={goPokedex}> Ir para Pokedex </button>
                <PokemonList>
                    {renderPokemons}
                </PokemonList>
            </div>
        </div>

    )
}