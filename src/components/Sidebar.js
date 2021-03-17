import React from 'react'

function Sidebar({topShows}) {

    return (
        <aside>
            <nav>
                <h3>Top Shows</h3>
                {topShows.map((show) => (

                <a href={show.url} target="_blank" key={show.mal_id} rel="noreferrer">
                    {show.title}
                </a>

                ))}
                

            </nav>
        </aside>
    )
}

export default Sidebar
