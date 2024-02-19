/* eslint-disable react/prop-types */
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Player({ trackData }) {
  console.log(trackData);

  return (

    trackData

          && (
          <AudioPlayer
            src={trackData.url_sound}
            onPlay={() => { console.log('onPlay'); }}
          />
          )

  );
}

export default Player;
