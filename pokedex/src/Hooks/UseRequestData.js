import axios from "axios";
import React, { useEffect, useState } from "react";

export const  useRequestData = (url, inicialState) => {
    const [data, setData] = useState(inicialState);


  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  }, [url]);

  return [data];
};