import React, { Component } from 'react';

import SongQueryDisplay from './SongQueryDisplay.jsx';

class SongsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      saveSong, searchSongs, songField, songQueryResults, updateSongField, savedSongs, cancelSearchSongs, savedFriends
    } = this.props;
    const songQueryArray = [];

    if (songQueryResults.length) {
      songQueryResults.forEach((songQueryResultDetail, i) => {
        songQueryArray.push(
          <SongQueryDisplay 
            key={i} 
            saveSong={saveSong} 
            songQueryResultDetail={songQueryResultDetail}
          />
        )
      });
    }
    const songList = [];

    // console.log(savedSongs);
    if (savedSongs.length) {
      savedSongs.forEach((savedSongDetail, i) => songList.push(
        <SongQueryDisplay 
          key={i} 
          savedSongDetail={savedSongDetail} 
          savedFriends={savedFriends}
        />
      ));
    }

    return (
      <div>

        <div className="songs-header-container">
          <div className="songs-header">
            <strong>Search Songs: </strong>
            <input className="song-search-field" name="songSearchField" onChange={updateSongField} type="text" value={songField} />
            <input className="song-search-submit" name="songSearchSubmit" onClick={searchSongs} type="submit" />
          </div>
        </div>

        <div className="songs-list">
          <strong>Your Songs: </strong>
          <button onClick={cancelSearchSongs}>Cancel</button>
          { songQueryArray.length ? songQueryArray : songList}
        </div>

      </div>
    );
  }
}

export default SongsComponent;
