import styled from 'styled-components'

export const PokemonList = styled.div`
    grid-area: main;
    display: grid;
    grid-template-columns: 4fr 4fr 4fr 4fr 4fr;
`

export const PokemonCard = styled.div`
    border: 1px solid black;
    display: grid;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    margin: 10px 5px 10px 5px;
    padding: 10px 130px 30px;
    img {
        width: 100px;
        height: 100px;
    }
`