function Album({ oneAlbumSongs }) {
  // songsOffAlbums.tracks.map((tracks) => console.log(tracks));
  console.log(oneAlbumSongs[0].tracks.length);
  return (oneAlbumSongs.length && oneAlbumSongs[0].tracks.length
    ? (oneAlbumSongs[0].tracks.map((track) => (
      <div key={track.id}>
        {track.name}
        {track.url_image}
      </div>
    ))) : ('Aucun sons dans cet album')
  );
}
export default Album;
