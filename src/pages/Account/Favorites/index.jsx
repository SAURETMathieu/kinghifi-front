/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import fetchData from '../../../services/api/call.api';

function Favorites() {
  const token = localStorage.getItem('authApiToken');
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken;
  const [likesDetails, setLikesDetails] = useState([]);

  const fetchLikesData = async (id) => {
    const fetchedLikesData = await fetchData('GET', `users/${id}/likes`, null, true);
    const likesData = fetchedLikesData;

    setLikesDetails(likesData);
  };

  useEffect(() => {
    fetchLikesData(userId);
  }, [userId]);

  return (
    <div className="account-likes">
      <div className="tracks-list">
        {likesDetails && likesDetails.map((track) => (
          <div key={track.name}>
            <p>
              Titre de la piste :
              {track.name}
              Album :
              {track.album_name}
              Année :
              {track.album_year}
              <FontAwesomeIcon icon={faTrashCan} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
