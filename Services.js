document.addEventListener('DOMContentLoaded', () => {
    const images = [
        {
            src: 'https://img.freepik.com/premium-photo/hands-barber-with-hair-clipper-barber-works-with-hair-clipper-hipster-client-getting-haircut-haircut-concept-man-visiting-hairstylist-barbershop-black-white_293990-960.jpg',
            description: 'Experience the quintessential grooming service with our Regular Haircut, priced at $35. Meticulously crafted to suit your personal style, this service ensures a precise and clean cut that enhances your natural look. Our skilled barbers use premium tools and techniques to deliver a haircut that is both stylish and easy to maintain. Whether you prefer a classic or contemporary style, our regular haircut provides the foundation for a sharp and polished appearance.'
        },
        {
            src: 'https://main-cdn.grabone.co.nz/goimage/fullsize/55ccdedee4f5111aee050acb5dfe0001bdd9d6fe.jpg',
            description: 'Elevate your beard game with our Beard Trim & Design service, available for $25. This premium offering combines the meticulous trimming of your beard with artistic and creative design elements. Our barbers are adept at crafting unique patterns and styles that enhance your beard’s natural shape. Whether you want a subtle enhancement or a bold and striking design, our Beard Trim & Design service provides a personalized grooming experience that showcases your individuality and style.'
        },
        {
            src: 'https://img.freepik.com/premium-photo/hairdresser-man-washes-client-s-head-barbershop-black-white-photo_629665-118.jpg',
            description: 'Indulge in a refreshing and rejuvenating experience with our Shampoo & Conditioner Wash service, priced at $25. Our skilled stylists begin with a thorough cleansing of your hair using high-quality shampoo to remove dirt and impurities, followed by a nourishing conditioner to hydrate and soften your hair. This service not only leaves your hair feeling clean and revitalized but also includes a relaxing scalp massage to enhance your overall sense of well-being. Perfect for maintaining healthy, vibrant hair, our Shampoo & Conditioner Wash is a luxurious addition to your grooming routine.'
        },
        {
            src: 'https://static.wixstatic.com/media/05ec7f_7222d9e727ea427eb5e1ba62cb82da48~mv2.jpg/v1/fill/w_560,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/entourage_hottowelshave.jpg',
            description: 'Treat yourself to the ultimate relaxation with our Hot Towel Facial Massage, offered at $30. This premium service begins with the application of a warm, soothing towel to your face, opening pores and preparing your skin for a gentle and invigorating massage. Our expert therapists use precise techniques to relieve tension and promote circulation, leaving your skin feeling refreshed and rejuvenated.'
        }
    ];

    const gallery = document.querySelector('.image-gallery');

    images.forEach((imageData, index) => {
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = `Image ${index + 1}`;
        img.addEventListener('click', () => {
            img.classList.toggle('rotated');
            showModal(imageData.description);
        });
        gallery.appendChild(img);
    });

    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalDescription = document.getElementById('modalDescription');
    const span = document.getElementsByClassName('close')[0];

    function showModal(description) {
        modalDescription.textContent = description;
        modal.style.display = 'flex';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});