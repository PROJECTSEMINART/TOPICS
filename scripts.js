document.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.getElementById('side-nav');
    const sideNavToggle = document.getElementById('side-nav-toggle');

    sideNavToggle.addEventListener('click', () => {
        sideNav.classList.toggle('show');
    });

    const animatedBoxes = document.querySelectorAll('.animated-box');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedBoxes.forEach(box => {
        observer.observe(box);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 150, // Increase the number of particles
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FFFFFF" // Customize particle color to match your theme
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#FFFFFF"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.7, // Increase opacity for better visibility
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4, // Increase particle size for better visibility
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#FFFFFF",
                    "opacity": 0.6, // Increase line opacity for better visibility
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }
    );
});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    });
});


    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.review-carousel');
        const cards = document.querySelectorAll('.review-card');
        let currentIndex = 0;

        function updateCarousel() {
            cards.forEach((card, index) => {
                card.classList.remove('center');
                if (index === currentIndex) {
                    card.classList.add('center');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        }

        setInterval(nextSlide, 3000); // Change slide every 3 seconds

        updateCarousel();
    });




    document.addEventListener('DOMContentLoaded', function () {
        const track = document.querySelector('.review-track');
        const cards = document.querySelectorAll('.review-card');
        let currentIndex = 0;

        function moveCarousel() {
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${currentIndex * 20}%)`;

            if (currentIndex >= cards.length / 2) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    track.style.transform = 'translateX(0)';
                    currentIndex = 0;
                }, 500);
            }
        }

        setInterval(() => {
            currentIndex++;
            moveCarousel();
        }, 2000); // Change slide every 2 seconds
    });


    document.addEventListener('DOMContentLoaded', function () {
        const track = document.querySelector('.review-track');
        const cards = document.querySelectorAll('.review-card');
        let currentIndex = 0;

        function updateCarousel() {
            cards.forEach((card, index) => {
                card.classList.remove('center');
                if (index === currentIndex) {
                    card.classList.add('center');
                }
            });
        }

        function moveCarousel() {
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${currentIndex * 20}%)`;

            if (currentIndex >= cards.length / 2) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    track.style.transform = 'translateX(0)';
                    currentIndex = 0;
                    updateCarousel();
                }, 500);
            } else {
                updateCarousel();
            }
        }

        setInterval(() => {
            currentIndex++;
            moveCarousel();
        }, 2000); // Change slide every 2 seconds

        updateCarousel();
    });
    document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const branch = document.getElementById('branch').value;
        const college = document.getElementById('college').value;
        const semester = document.getElementById('semester').value;
        const report = document.getElementById('report').value;
        const referral = document.getElementById('referral').value;
        const requirements = document.getElementById('requirements').value;
        const topic = document.getElementById('topic').value;

        const message = `Name: ${name}%0ABranch: ${branch}%0ACollege: ${college}%0ASemester: ${semester}%0AReport Type: ${report}%0AReferral Code: ${referral}%0ARequirements: ${requirements}%0ATopic Name: ${topic}`;

        const whatsappURL = `https://wa.me/9745745513?text=${message}`;
        window.open(whatsappURL, '_blank');
    });

    document.addEventListener('DOMContentLoaded', function () {
        const messageWrapper = document.querySelector('.message-wrapper');
        const messages = Array.from(messageWrapper.getElementsByClassName('message'));
        
        // Clone the messages to create an infinite scroll effect
        messages.forEach((message) => {
            const clone = message.cloneNode(true);
            messageWrapper.appendChild(clone);
        });
    });
    