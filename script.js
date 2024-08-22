function generatePlaylist(mood) {
    const playlistContainer = document.getElementById('playlist');
    playlistContainer.innerHTML = ''; // Clear previous playlist

    const playlists = {
        happy: [
            'Song 1 - Artist A',
            'Song 2 - Artist B',
            'Song 3 - Artist C',
        ],
        sad: [
            'Song 4 - Artist D',
            'Song 5 - Artist E',
            'Song 6 - Artist F',
        ],
        relaxed: [
            'Song 7 - Artist G',
            'Song 8 - Artist H',
            'Song 9 - Artist I',
        ],
        energetic: [
            'Song 10 - Artist J',
            'Song 11 - Artist K',
            'Song 12 - Artist L',
        ],
    };

    if (playlists[mood]) {
        playlists[mood].forEach((song) => {
            const songElement = document.createElement('div');
            songElement.className = 'playlist-item';
            songElement.textContent = song;
            playlistContainer.appendChild(songElement);
        });
    } else {
        playlistContainer.textContent = 'No playlist available for this mood.';
    }
}
