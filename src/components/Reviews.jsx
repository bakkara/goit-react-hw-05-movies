import { fetchReviewsById } from "helpers/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
    if (!movieId) {
      return;
    }

    const getReviewsList = async () => {
        try {
        const { results } = await fetchReviewsById(movieId);
            setReviews(results);
      } catch (error) {
        console.log(error.message)
      } finally {
        
      }
    };

    getReviewsList();
    }, [movieId, reviews]);
  
    return (
    <div>
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
        </ul>
    </div>
  )
}

export default Reviews