import { fetchCastById } from "helpers/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const defaultImg =
  'https://png.pngitem.com/pimgs/s/508-5087257_clip-art-hd-png-download.png';

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
    if (!movieId) {
      return;
    }

    const getActorsList = async () => {
        try {
        const { cast } = await fetchCastById(movieId);
          setActors(cast);
          console.log(actors)
      } catch (error) {
        console.log(error.message)
      } finally {
        
      }
    };

    getActorsList();
    }, [movieId, actors]);
    

  return (
      <div>
          
          {actors.map(({ profile_path, name, character, id }) => {
            return (
              <li key={id}>
                <div>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : defaultImg
                    }
                    alt={name}
                    width={200}
                  />
                </div>
                <div>
                  <p>{name}</p>
                  <p>
                    Character: {character ? character : 'not mentioned'}
                  </p>
                </div>
              </li>
            );
          })}
    </div>
  )
}

export default Cast