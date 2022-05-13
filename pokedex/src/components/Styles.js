import styled from 'styled-components'

export const PokemonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 65vh;
`

export const PokemonCard = styled.div`
    box-shadow: rgb(0 0 0 / 70%) 0px 8px 16px 0px;
    border: 1px solid black;
    display: grid;
    justify-content: space-between;
    justify-items: center;
    margin: 10px 5px 10px 5px;
    padding: 15px 15px 15px;
    img {
        width: 100px;
        height: 100px;
    }
`