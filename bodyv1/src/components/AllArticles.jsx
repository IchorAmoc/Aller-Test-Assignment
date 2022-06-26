import React, { useState, useEffect } from 'react';

// Components
import { Column } from './Column';
import { Loading } from './Loading';

export const AllArticles = () => {
    let [data, setData] = useState(null)

    // Fetch all data
    // For each column, column component -> Full width 12 grid width
    // For each article, article component
    useEffect(() => {
        fetch("https://storage.googleapis.com/aller-structure-task/test_data.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data[0]) // Columns
                // console.log(data[0].map(item => console.log('---', item))) // Columns

                setData(data[0])
            })
            .catch(err => console.log(err))
    }, [])

    if (!data) <Loading />

    return (
        <section id="articleSection">
            {data && data.map((data, x) => (
                <Column data={data} key={`column ${x}`} />
            ))}
        </section>
    )
}