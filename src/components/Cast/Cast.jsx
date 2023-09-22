import { fetchCastById } from "helpers/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";

const defaultImg =
  'https://png.pngitem.com/pimgs/s/508-5087257_clip-art-hd-png-download.png';

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
    if (!movieId) {
      return;
    }

    const getActorsList = async () => {
      try {
        setLoading(true);
        setError(false);
        const { cast } = await fetchCastById(movieId);
        setActors(cast);
          
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getActorsList();
    }, [movieId]);
    

  return (
      <div>
        {loading && <Loader/> }
        {error && !loading && toast.error(`OOPS! THERE WAS AN ERROR!`)}
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
                  <p>{character}</p>
                </div>
              </li>
            );
          })}
        <Toaster position="top-right"/>
    </div>
  )
}

export default Cast