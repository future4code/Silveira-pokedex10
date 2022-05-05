import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { PokedexContext } from "../contexts/PokedexContext";
import { getPokemons } from "../request/requests";

export const Pokedex = () => {
    const navigate = useNavigate()
    const [image , setImage] = useState("")
    const { states, setters } = useContext(GlobalContext)
    const { pokemonsPokedex, pokemonsHome } = states
    const { setPokemons, setPokemonPokedex , setPokemonsHome } = setters
    const [ imageContainer, setImageContainer ] = useState('')

    const goBack = () => {
        navigate(-1)
    }

    const renderPokemonsList = pokemonsPokedex.map((pokemon) => {
        return (
            <div key={pokemon.name}>
                <div onClick={() => onClickImage(pokemon)}>
                    <img src={pokemon.sprites.versions["generation-viii"].icons.front_default} alt='Pokemon Icone'/>
                    <p>{pokemon.name}</p>
                </div>
            </div>
        )
    })

    const removeFromPokedex = (pokemon) => {
        const newPokemonsPokedex = [...pokemonsPokedex]
        const index = pokemonsPokedex.findIndex(
            (item) => item.name === pokemon.name);

        newPokemonsPokedex.splice(index, 1)
        setPokemonPokedex(newPokemonsPokedex)

        const newPokemons = [...pokemonsHome, pokemon];
        const orderedPokemons = newPokemons.sort((a, b) => 
        {return a.id - b.id; })
        setPokemonsHome(orderedPokemons)
        setImageContainer('')
    }

    const CleanPokedex = () => {
        setPokemonPokedex([])
        getPokemons(setPokemons)
        setImageContainer('')
    }

    const onClickImage = (pokemon) => {
        setImageContainer(
            <div>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    <button onClick={() => removeFromPokedex(pokemon)}>Remover</button>
                    <button>Detalhes</button> 
            </div>
        )
    }

    return (
        <PokedexContext.Provider value={{image , setImage}}>
        <div>
            <button onClick={goBack}>Voltar</button>
            <h2>Pokedex</h2>
        </div>
        <div>
            <div>
                <button onClick={CleanPokedex}>Limpar Tela</button>
            </div>
            <div>
                <div>
                    {imageContainer}
                </div>
                <div>
                    {renderPokemonsList}
                </div>
            </div>
        </div>
    </PokedexContext.Provider>
    )
}