import axios from "axios";
import { url } from "../constants/url";

export const getPokemons = (saveData) => {
    axios
    .get(url)
    .then((res) => {
        saveData(res.data.results)
    })
    .catch((err) => {
        console.log(err)
    })
}