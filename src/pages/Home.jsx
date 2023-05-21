import { useState, useEffe, useEffect } from "react";

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`


        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div className="container">
        <h2 className="title">
            Melhores Filmes:
        </h2>
        <div className="movies-container">
            {topMovies.length === 0 && <p>carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <p>{movie.title}</p>)}
        </div>
    </div>
    )
};

export default Home;