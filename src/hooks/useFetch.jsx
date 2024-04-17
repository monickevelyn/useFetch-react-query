import { useQuery } from "@tanstack/react-query";
import axios from "axios"

// GET na api

const URL_API = 'https://pokeapi.co/api/v2';

const fecthData = async () => {
    const response = await axios.get(URL_API + '/pokemon');
    return response;
}

const useFetch = () => {
    const query = useQuery({
        queryFn: fecthData,
        queryKey: ['data-api'],
        refetchInterval: 60 * 5 * 1000,
    })
    return{
        ...query,
        data: query.data?.data
    }
}

export default useFetch;