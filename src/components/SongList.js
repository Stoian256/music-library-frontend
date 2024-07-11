import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SongList = ({albumId}) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get(`songs/albums/${albumId}`);
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        if (albumId) {
            fetchSongs();
        }
    }, [albumId]);

    return (
        <div>
            <h2>Songs</h2>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>
                        {song.title} - {song.length}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
