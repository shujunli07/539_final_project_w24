document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const videos = this.nextElementSibling;
            videos.style.display = videos.style.display === 'none' ? 'block' : 'none';
        });
    });
});