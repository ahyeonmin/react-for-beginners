import './MovieDetail.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function MovieDetail({ title, bgImage, coverImage, rating, genres, description }) {
    return(
        <div className='body' style={{backgroundImage: `url(${bgImage})`}}>
            <div className='home'>
                <div>
                    <Link to="/"><button><FontAwesomeIcon icon={faX} /></button></Link>
                </div>
            </div>
            <div className='content'>
                <div className='title'>{title}</div>
                <img src={coverImage} alt={title} className='coverImage'/>
                <div className='rating'><FontAwesomeIcon icon={faStar} /> {rating}</div>
                <ul className='genres'>
                    {genres ? genres.map((genre) => <li key={genre} className='genre'>{genre}</li>) : null}
                </ul>
                <div className='description'>{description}</div>
            </div>
        </div>
    );
}

export default MovieDetail;