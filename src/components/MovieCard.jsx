
const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  
export const MovieCard = ({ movieInfo }) => {
    const { poster_path, title, vote_average, overview, genres, release_date } =
        movieInfo;
    const date = new Date(release_date);
    const userScore = Math.round((vote_average * 100) / 10)
    
    return (
        <>
        <img src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
                alt="poster" />
            <h2>{title}({date.getFullYear()})</h2>
            <p>User Score: {userScore}%</p>
            <p>Overview: {overview }</p>
            <p>Genres:</p>
            <ul>
                {genres.map(({ id, name }) => {
                    return (
                        <li key={id}>
                              {name}  
                        </li>
                    )
                })}
            </ul>
                

        </>
    )
    
}