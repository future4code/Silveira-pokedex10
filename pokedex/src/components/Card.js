import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    width: 250px;
    height: 300px;
    border: solid black;
    img{
        border:solid red;
        width: 100%;
        height: 80%;
    }
    div{
        display: flex;
        justify-content: space-between;
        border:solid green;
        width: 100%;
        height: 20%;
    }
    button{
        width: 50%;
        :hover{
            cursor: pointer;
        }       
    }
`

export const Card = () => {
    
    return(     
        <Container>
            <img src="https://hiperideal.vteximg.com.br/arquivos/ids/167660-1000-1000/27502.jpg?v=636615816147030000" alt='banana' />
            <div>
                <button>Adicionar a Pokedex</button>
                <button>Ver Detalhes</button>
            </div>
        </Container>       
    )
}