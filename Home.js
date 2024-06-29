document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://www.shutterstock.com/image-photo/hipster-client-getting-haircut-hands-600nw-1898206819.jpg',
        'https://img.freepik.com/premium-photo/hairdresser-man-washes-client-s-head-barbershop-black-white-photo_629665-118.jpg',
        'https://www.bocaratonbarber.com/uploads/4/3/7/5/4375560/image05_1_orig.jpg',
        'https://img.freepik.com/premium-photo/classic-haircut-barbershop-curve-hair-styling-hair-health-care-barbershop-men-s-haircut_217333-407.jpg',
        'https://lh3.googleusercontent.com/p/AF1QipNCB5DhQeja5Zqv4BgSwzIyhSwoWAoEwJyAEvy5=w1080-h608-p-no-v0'
    ];

    const gallery = document.querySelector('.image-gallery');

    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });
});