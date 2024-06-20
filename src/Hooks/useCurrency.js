import { useEffect, useState } from "react";

function useCurrency(currency) {
    let [Fetched_Data, setFetched_Data] = useState({})
    useEffect(
        ()=>{
            let Fetching = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
            Fetching.then((res)=>res.json()).then((data)=>{setFetched_Data(data)})

        }
    ,[currency])
    
}