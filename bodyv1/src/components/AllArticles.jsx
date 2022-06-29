import React, { useState, useEffect } from 'react';

// Components
import { Column } from './Column';
import { Loading } from './Loading';

export const AllArticles = () => {
    let [data, setData] = useState(null)
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    // Rerender content when viewport changes. Taken from Stackoverflow -- https://stackoverflow.com/questions/62846043/react-js-useeffect-with-window-resize-event-listener-not-working
    // console.log(dimensions)
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
      }, [])

    // Fetch data (all articles)
    useEffect(() => {
        fetch("https://storage.googleapis.com/aller-structure-task/test_data.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data[0])
                // console.log(data[0].map(row => {
                //     console.log('Row |', row)
                //     console.log('With columns/articles: ')
                //     row.columns.map(column => console.log(column))
                //     console.log('---------')
                // }
                // ))

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