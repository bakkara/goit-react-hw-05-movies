import React from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const params = useParams();
    // useEffect(() => {
//   //HTTP запрос

// //   return () => {
// //     second
// //   }
// }, [])
    console.log(params)
  return (
    <div>MovieDetails</div>
  )
}
export default MovieDetails;