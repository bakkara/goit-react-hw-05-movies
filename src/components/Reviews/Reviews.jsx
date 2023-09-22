import { fetchReviewsById } from "helpers/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
    if (!movieId) {
      return;
    }

    const getReviewsList = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchReviewsById(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getReviewsList();
    }, [movieId]);
  
    return (
      <div>
        {loading && <Loader />}
        {error && !loading && toast.error(`OOPS! THERE WAS AN ERROR!`)}
          
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <div>
                    <p>{author}</p>
                    <p>
                      Character: {content}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>) :
          (<p>We don't have any reviews for this movie</p>)
        }
        <Toaster position="top-right"/>
    </div>
  )
}

export default Reviews