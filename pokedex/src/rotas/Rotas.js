import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../components/Home'
import { Pokedex } from "../components/Pokedex"; 
import { Detalhes } from "../components/Detalhes";

export const Rotas = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Pokedex' element={<Pokedex/>} />
                <Route path='/Detalhes' element={<Detalhes/>} />
            </Routes>
        </BrowserRouter>
    )
}