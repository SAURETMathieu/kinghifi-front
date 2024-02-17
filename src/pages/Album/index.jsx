function Album({ oneAlbumSongs }) {
  return (
    // check if there are elements in oneAlbumSongs and if the first album has tracks.
    oneAlbumSongs.length && oneAlbumSongs[0].tracks.length
    // true: map over the tracks array of the first album
      ? (oneAlbumSongs[0].tracks.map((track) => (
        <div key={track.id}>
          {track.name}
          {track.url_image}
        </div>
      )))
      // false: tell this at the user.
      : ('Aucun sons dans cet album')
  );
}
export default Album;
