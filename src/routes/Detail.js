import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import './Loading.scss';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    useEffect(() => {
        const getMovieDetail = async() => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setMovieDetail(json.data.movie);
            setLoading(false);
        };
        getMovieDetail();
    }, [id]);
    return(
        <>
            {loading ?
                <div className="loadingDetail">
                    <div>Loading...</div>
                </div> : 
                <MovieDetail
                bgImage={movieDetail.background_image}
                title={movieDetail.title_long}
                coverImage={movieDetail.medium_cover_image}
                rating={movieDetail.rating}
                genres={movieDetail.genres}
                description={movieDetail.description_full}
                />
            }
        </>
    );
}

export default Detail;