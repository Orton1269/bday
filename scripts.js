// scripts.js
// Updated JavaScript for Faster Blowout
document.getElementById('candle-button').addEventListener('click', function() {
    const candle = document.getElementById('candle');
    candle.style.display = 'block';
    setTimeout(() => {
        candle.querySelector('.flame').style.display = 'none';
    }, 1500); // Flame goes off after 1.5 seconds
});


document.getElementById('cake-button').addEventListener('click', function() {
    const cake = document.getElementById('cake');
    cake.style.display = 'block';
    setTimeout(() => {
        cake.querySelector('img').src = 'cut_cake.png'; // Assume this image shows a cut cake
    }, 2000); // Cake is cut after 2 seconds
});

document.getElementById('song-button').addEventListener('click', function() {
    const song = document.getElementById('birthday-song');
    song.play();
});
