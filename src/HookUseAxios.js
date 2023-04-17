import axios from 'axios'
import React, { useEffect, useState } from 'react'

const defaultAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    })

    useEffect(() => {
        if (!opts.url) {
            return
        }

        axiosInstance(opts)
            .then((response) => {
                setState((state) => {
                    ...state,
                    loading: false,
                    data: response.data
                })
    })
        .catch((error) => {
            setState((state) => {
                    ...state,
                loading: false,
                error
                })
})
    }, [axiosInstance, opts])

return
}

const HookUseAxios = () => {
    const { loading, error, data } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json"
    })
    console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`)

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default HookUseAxios