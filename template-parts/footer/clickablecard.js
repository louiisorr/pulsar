document.querySelectorAll('.wp-block-post-template').forEach(function (post) {
    const link = post.querySelector('a'); // Find the first link inside the post
    if (link) {
        post.style.cursor = 'pointer';
        post.addEventListener('click', function () {
            window.location.href = link.href; // Redirect on click
        });
    }
});
