import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Movie.scss";

function Movie({ id, coverImage, title, rating }) {
    return(
        <div className='item'>
            <div className='itemImg'>
                <Link to={`/movie/${id}`}><img src={coverImage} alt={title}/></Link>
            </div>
            <div className='itemInfo'>
                <div>{title}</div>
                <div><FontAwesomeIcon icon={faStar} className='ratingIcon'/> {rating}</div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default Movie;