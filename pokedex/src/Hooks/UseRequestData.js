import axios from "axios";
import React, { useEffect } from "react";
import { useState, useEffect } from "react";

export const  UseRequestData = (url) => {
    const [data, setData] = useState();

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{ 
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error);
            alert("Ocorreu um erro, tente novamente");
        })
    },[url])
    return [data]
}