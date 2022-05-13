import React from "react";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


const DivGeral = styled.div`
    height:250px;
    width:200px;
    padding: 10px;
`
const Fotinha = styled.img`
    width:100%;
    height:60%;
    border-radius: 10px;
`
const DivButton = styled.div`
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        height: 20%;   
`   

const ButtonAdd = styled.button`
        width: 40%;
        border-radius: 10px;
        border: none;
        :hover{
            cursor: pointer;
        }
`
const DetalhesButton = styled.button`
        width: 40%;
        border-radius: 10px;
        border: none;
        :hover{
            cursor: pointer;
        }
`

export const Card = () => {
    const navigate = useNavigate()

    

    const irDetalhes = () => {
        navigate('/Detalhes')
    }



    return(     
        <div>
            <DivGeral>
                <div>
                    <Fotinha src="https://hiperideal.vteximg.com.br/arquivos/ids/167660-1000-1000/27502.jpg?v=636615816147030000" alt='banana' />
                </div>
                <DivButton>
                    <ButtonAdd>Adicionar a Pokedex</ButtonAdd>
                    <DetalhesButton className="Detalhes" onClick={irDetalhes}>Ver Detalhes</DetalhesButton>
                </DivButton>
            </DivGeral>
        </div>       
    )
}