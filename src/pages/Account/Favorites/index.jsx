/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import fetchData from '../../../services/api/call.api';

function Favorites() {
  const token = localStorage.getItem('authApiToken');
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken;
  const [likesDetails, setLikesDetails] = useState([]);

  const fetchLikesData = async (id) => {
    const fetchedLikesData = await fetchData('GET', `users/${id}/likes`, null, true);
    const likesData = fetchedLikesData;
    console.log(likesDetails);
    setLikesDetails(likesData);
  };

  useEffect(() => {
    fetchLikesData(userId);
  }, [userId]);

  return (
    <div className="account-likes">
      <span>
        {likesDetails.map((track) => (
          <div key={track.user_id}>
            <p>
              Titre de la piste :
              {track.name}
              Album :
              {track.album_name}
              Année :
              {track.album_year}
            </p>
          </div>
        ))}
      </span>
    </div>
  );
}

export default Favorites;
