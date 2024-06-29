document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentMessage = document.getElementById('comment-message');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(commentForm);
        const name = formData.get('name');
        const comment = formData.get('comment');

        // For demonstration, just displaying the comment
        commentMessage.innerHTML = `<p>Thank you, ${name}! Your comment "${comment}" has been submitted.</p>`;
        commentForm.reset(); // Reset form after submission
    });
});