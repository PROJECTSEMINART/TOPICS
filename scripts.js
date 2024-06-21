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
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 150, // Number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FFFFFF" // Particle color
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
                "value": 0.7, // Opacity of particles
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 6, // Increase particle size
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
                "opacity": 0.6, // Opacity of lines
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3, // Slow down the speed
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
  
    });

    document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const branch = document.getElementById('branch').value;
        const college = document.getElementById('college').value;
        const semester = document.getElementById('semester').value;
        const referral = document.getElementById('referral').value;
        const requirements = document.getElementById('requirements').value;
        const topic = document.getElementById('topic').value;

        if (name && branch && college && semester && topic) {
            const message = `Name: ${name}%0ABranch: ${branch}%0ACollege: ${college}%0ASemester: ${semester}%0AReferral Code: ${referral}%0ARequirements: ${requirements}%0ATopic Name: ${topic}`;
            const whatsappURL = `https://wa.me/9745745513?text=${message}`;
            window.open(whatsappURL, '_blank');
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
