import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"

// EDITAR, ADICIONAR ou APAGAR dados - POST na api

// const URL_API = ''

const postData = async (data) => {
    return await axios.get(URL_API + '/', data);
}

const useFetchMutate = () => {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries(['data-api'])
        }
    })

    return mutate       
}

export default useFetchMutate;