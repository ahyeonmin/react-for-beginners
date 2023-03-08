import React, { useState, useEffect } from 'react';
import Movie from "../components/Movie";
import './Home.scss';
import './Loading.scss';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => getMovies(), []);
    return (
        <div className='body'>
            <div className='logo'>Movie</div>
            {loading ? <div className='loading'>Loading...</div> :
                <div>
                    <div className='items'>
                        {movies.map((movie) =>
                            <div key={movie.id}>
                                <Movie
                                    id={movie.id}
                                    coverImage={movie.medium_cover_image}
                                    title={movie.title}
                                    rating={movie.rating}
                                />
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;