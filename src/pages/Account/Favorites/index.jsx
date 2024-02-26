/* eslint-disable react/no-unescaped-entities */
import './index.css';
import { useState, useEffect } from 'react';

import fetchData from '../../../services/api/call.api';

function Favorites({ userId }) {
  const [likesDetails, setLikesDetails] = useState([]);
  // Fetch likes data from the API
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
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
