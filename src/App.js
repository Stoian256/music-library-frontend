import React, {useState} from 'react';
import ArtistList from './components/ArtistList';
import AlbumList from './components/AlbumList';
import SongList from './components/SongList';

const App = () => {
    const [selectedArtistId, setSelectedArtistId] = useState(null);
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);

    const handleArtistClick = (artistId) => {
        setSelectedArtistId(artistId);
        setSelectedAlbumId(null);
    };

    const handleAlbumClick = (albumId) => {
        setSelectedAlbumId(albumId);
    };

    return (
        <div>
            <h1>Music Library</h1>
            <div style={{display: 'flex'}}>
                <div style={{flex: '0 0 30%'}}>
                    <ArtistList onArtistClick={handleArtistClick}/>
                </div>
                <div style={{flex: '0 0 30%'}}>
                    {selectedArtistId && <AlbumList artistId={selectedArtistId} onAlbumClick={handleAlbumClick}/>}
                </div>
                <div style={{flex: '0 0 40%'}}>
                    {selectedAlbumId && <SongList albumId={selectedAlbumId}/>}
                </div>
            </div>
        </div>
    );
};

export default App;
