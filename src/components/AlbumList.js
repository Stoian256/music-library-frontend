import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AlbumList = ({artistId, onAlbumClick}) => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(`albums/artists/${artistId}`);
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        if (artistId) {
            fetchAlbums();
        }
    }, [artistId]);

    return (
        <div>
            <h2>Albums</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        <button onClick={() => onAlbumClick(album.id)}>{album.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
