import React, {useState, useEffect} from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

function App() {

  const [showList, setList] = useState([])
  const [topShows, setTop] = useState([])
  const [search, setSearch] = useState("")

  const gettopShows = async () => {
    const temp = await fetch (`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json())

    setTop(temp.top.slice(0, 5));
  }

  const HandleSearch = e => {
    e.preventDefault()

    Fetchshow(search)
  }

  const Fetchshow = async (query) => {
    const temp = await fetch (`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json())

    setList(temp.results)
  }

  useEffect(() => {
    gettopShows()
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topShows={topShows} />
        <MainContent HandleSearch = {HandleSearch} setSearch = {setSearch} Search = {search} showList = {showList} />
      </div>
    </div>
  )

}

export default App