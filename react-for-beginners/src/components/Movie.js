import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="cover" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      {summary.length < 200 ? (
        <p>{summary}</p>
      ) : (
        <p>{summary.split(" ").slice(0, 30).join(" ")}... </p>
      )}
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
