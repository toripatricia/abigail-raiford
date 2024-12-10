/* main gallery page */

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.getElementById('close-modal');

    // Show modal with full-size image on thumbnail click
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            modalImage.src = thumbnail.src;
            modalCaption.textContent = thumbnail.alt;
            modal.classList.remove('hidden');
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modalImage.src = '';
        modalCaption.textContent = '';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modalImage.src = '';
            modalCaption.textContent = '';
        }
    });
});
