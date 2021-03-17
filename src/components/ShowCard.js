import React from 'react'

function ShowCard({show}) {
    return (
        <article className="anime-card">

            <a href={show.url} target="_blank" rel="noreferrer">
                <figure>
                    <img src={show.image_url} alt="Anime Image" />
                </figure>
                <h3>{show.title}</h3>
            </a>

        </article>
    )
}

export default ShowCard
