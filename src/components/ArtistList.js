import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const ArtistList = ({onArtistClick}) => {
    const [artists, setArtists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await axios.get('/artists');
                setArtists(response.data);
            } catch (error) {
                console.error('Error fetching artists:', error);
            }
        };

        fetchArtists();
    }, []);

    const handleSearchChange = async (event, value) => {
        setSearchTerm(value);

        try {
            const response = await axios.get(`/search?name=${encodeURIComponent(value)}`);
            setArtists(response.data);
        } catch (error) {
            console.error('Error searching artists:', error);
        }
    };

    return (
        <div>
            <h2>Artists</h2>
            <Autocomplete
                id="artist-search"
                options={artists}
                getOptionLabel={(artist) => artist.name}
                onChange={(event, value) => {
                    if (value) {
                        onArtistClick(value.id);
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search artists"
                        variant="outlined"
                        onChange={(event) => handleSearchChange(event, event.target.value)}
                    />
                )}
            />
        </div>
    );
};

export default ArtistList;