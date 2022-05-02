import React from "react";
import { useNavigate } from "react-router-dom";

export const Detalhes = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return(
        <div>
            <h1>Detalhes</h1>
            <button onClick={goBack}>voltar</button>
        </div>
    )
}