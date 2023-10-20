import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Introduction from "../components/Introduction";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      setLoading(false);
      setMovie(json.data.movie);
    };

    getMovie();
  }, [id]);

  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Introduction
          title={movie.title}
          coverImg={movie.medium_cover_image}
          year={movie.year}
          genres={movie.genres}
          runtime={movie.runtime}
          rating={movie.rating}
        />
      )}
    </div>
  );
}

export default Detail;
