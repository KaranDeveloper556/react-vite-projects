import React, { useEffect, useMemo, useState } from 'react'

function CWH_api_prac() {
    let [FetchedData, SetFetchedData] = useState([])
    let FetchingData;
    useMemo(() => {
        FetchingData = async () => {
            let BrowserData = await fetch('https://jsonplaceholder.typicode.com/posts')
            let Data = await BrowserData.json()
            SetFetchedData(Data)
        }
    }, [FetchingData])

    useEffect(() => {
        FetchingData()
    }, [])

    return (
        <section className="Cards_container">
            {FetchedData.map(
                (element) => {
                    return (
                        <div className="card" key={element.id}>
                            <h2>{element.title}</h2>
                            <h4>Discrption{element.body}</h4>
                            <p>Card ID :-- {element.userId}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default CWH_api_prac
