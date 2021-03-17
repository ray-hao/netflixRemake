import React from 'react'
import ShowCard from "./ShowCard"

function MainContent(props) {
    return (
        <div>
            <main>
                <div className="main-head">
                    <form className="search-box"
                          onSubmit={props.HandleSearch}>
                        <input 
                        type="search" 
                        placeholder="Looking for a show...?" 
                        required
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)} />
                    </form>
                </div>

                <div className="anime-list">
                    {props.showList.map(show => (
                        <ShowCard show={show} key={show.mal_id} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default MainContent
