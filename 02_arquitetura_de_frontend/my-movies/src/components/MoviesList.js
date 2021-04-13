import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies}) => {
  return (
    <section>
      <ul>
        {movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie}  />
        })}
      </ul>
    </section>
  );
};