document.addEventListener('DOMContentLoaded', function () {
    // Get the buttons and the target sections
    var scrollAboutMeButton = document.getElementById('scrollAboutMe');
    var aboutMeSection = document.getElementById('aboutMeSection');
    var scrollHobbiesButton = document.getElementById('scrollHobbies');
    var hobbiesSection = document.getElementById('hobbiesSection');

    // Add click event listener to the About Me button
    scrollAboutMeButton.addEventListener('click', function () {
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Add click event listener to the Hobbies button
    scrollHobbiesButton.addEventListener('click', function () {
        hobbiesSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.image-buttons .tab-button-image');
    const urls = [
        'https://www.instagram.com/notmuapple/',
        'https://github.com/chuanchuanchuanchuan'
    ];
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            window.open(urls[index], '_blank');
        });
    });
});