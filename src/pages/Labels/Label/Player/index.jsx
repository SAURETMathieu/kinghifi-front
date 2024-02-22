/* eslint-disable react/prop-types */
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Player({ trackData }) {
  return (

    trackData

          && (
          <AudioPlayer
            className="audio-player"
            autoPlay
            src={trackData.url_sound}

          />
          )

  );
}

export default Player;
