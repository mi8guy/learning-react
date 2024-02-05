import { useEffect, useState } from "react";

// Standardized naming conventions for hooks. useHookName()

// useEffect(), a hook that runs when component is mounted, when its life cycle gets started.

function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url)
            .then((res) => res.json() )
            .then((res) => setData(res[currency]) )
    }, [currency])

    console.log(data)
    return data
}

export default useCurrencyInfo

//That is it about designing custom hooks.