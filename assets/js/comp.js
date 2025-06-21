document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    // First, load the HTML content from projects2.html
    fetch("components/projects2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("projects2").innerHTML = data;

            // Now that the HTML is loaded, proceed to populate projects
            const projects = [
                { name: "Vrakshaya", url: "https://vrakshaya.in" },
                { name: "Shree Balaji Nursing Home", url: "https://shreebalajinursinghome.com" },
                { name: "Shaikh Associates", url: "https://shaikh-associates.com" },
                { name: "Relife Ambulance", url: "https://relifeambulance.in" },
                { name: "PEMS", url: "https://pemss.in" },
                { name: "New Panacea Hospital", url: "https://newpanaceahospital.com" },
                { name: "NBC Celebration", url: "https://nbcelebration.in" },
                { name: "Kanchanjunga View Homestays", url: "https://kanchanjungaviewhomestays.in" },
                { name: "Hardik Health Point", url: "https://hardikhealthpoint.in" },
                { name: "GEINCA", url: "https://geinca.com" },
                { name: "Dr. Suresh Bajoria", url: "https://drsureshbajoria.in" },
                { name: "Dr. Koushik Dasgupta", url: "https://drkoushikdasgupta.in" },
                { name: "Dr. Biaus Samanta", url: "https://drbiaussamanta.in" },
                { name: "Dr. Avijit Mukherjee", url: "https://dravijitmukherjee.in" },
                { name: "Dr. Aditya Verma", url: "https://dradityaverma.in" },
                { name: "Paaprika", url: "https://paaprika.com" },
                { name: "Celestial Go Web", url: "https://celestialgoweb.com" },
                { name: "NXSG", url: "https://nxsg.in" },
                { name: "Dr. Puspak Samal", url: "https://drpuspaksamal.com" },
                { name: "A4 Trading", url: "https://a4trading.net" },
                { name: "Twin Twozz", url: "https://twintwozz.com" },
                { name: "Modern SA", url: "https://modern-sa.com" },
                { name: "Alahmadi KSA", url: "https://alahmadi-ksa.com" },
                { name: "Protech KSA", url: "https://protechksa.com" },
                { name: "Asdaf", url: "https://asdaf.net" },
                { name: "Ecomish", url: "https://ecomish.com" },
                { name: "Udaan Society", url: "https://udaansociety.org" },
                { name: "UK People Choice", url: "https://ukpeoplechoice.co.uk" },
                { name: "Adventure Rocks", url: "https://adventurerocks.in" },
                { name: "Mudita Jewels", url: "https://muditajewels.com" },
                { name: "Women's Fashion Mart", url: "https://womensfashionmart.com" },
                { name: "Money Can Roll", url: "https://moneycanroll.com" },
                { name: "Projexel KSA", url: "https://projexelksa.com" },
                { name: "JRAFA Care", url: "https://jrafacare.com" },
                { name: "Dr sutpan samanta", url: "https://drsutapansamanta.in/" },
                { name: "Dyuti Elderly Care", url: "https://www.dyutielderlycare.in/" }
            ];

            const container = document.querySelector('.projects-container');
            const closeBtn = document.querySelector('.close-btn');

            if (container) {
                projects.forEach(project => {
                    const projectItem = document.createElement('div');
                    projectItem.className = 'project-item';

                    const icon = document.createElement('div');
                    icon.className = 'project-icon';
                    icon.textContent = project.name.charAt(0);

                    const name = document.createElement('div');
                    name.className = 'project-name';
                    name.textContent = project.name;

                    projectItem.appendChild(icon);
                    projectItem.appendChild(name);

                    projectItem.addEventListener('click', () => {
                        window.open(project.url, '_blank');
                    });

                    container.appendChild(projectItem);
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    document.querySelector('.window').style.display = 'none';
                });
            }
            // Get the search input and projects container
const searchInput = document.querySelector('.search-bar');
const projectsContainer = document.querySelector('.projects-container');
const projectItems = document.querySelectorAll('.project-item');

// Add event listener for search input
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    projectItems.forEach(item => {
        const projectName = item.querySelector('.project-name').textContent.toLowerCase();
        
        if (projectName.includes(searchTerm)) {
            item.style.display = 'flex'; // Show matching projects
        } else {
            item.style.display = 'none'; // Hide non-matching projects
        }
    });
});
        })
        .catch(error => console.error("Error loading the project HTML:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    // Load navigation component
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
            
            // Initialize menu functionality after nav is loaded
            initMenuFunctionality();
        })
        .catch(error => console.error("Error loading the header:", error));

    // Initialize menu functionality
    function initMenuFunctionality() {
        // Toggle sidebar menu
        function toggleNexusMenu() {
            const sidebar = document.getElementById('nexusSidebarMenu');
            const overlay = document.getElementById('nexusMenuOverlay');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
        }

        // Set up event listeners for menu toggle
        const menuToggle = document.querySelector('.nexus-menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event from bubbling up
                toggleNexusMenu();
            });
        }

        // Set up event listener for close button
        const closeBtn = document.querySelector('.nexus-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleNexusMenu();
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('nexusSidebarMenu');
            const overlay = document.getElementById('nexusMenuOverlay');
            
            if (sidebar && overlay) {
                // If click is outside sidebar and overlay is active, close it
                if (!sidebar.contains(event.target)) {
                    if (overlay.classList.contains('active')) {
                        toggleNexusMenu();
                    }
                }
            }
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.nexus-header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });

        // Animate elements when they come into view
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.nexus-hero-left, .nexus-hero-right, .nexus-floating-project, .nexus-floating-center-image, .nexus-about-content');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = element.style.transform.includes('translate(-50%') 
                        ? 'translate(-50%, -50%)' 
                        : 'translateY(0)';
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Only open dropdown when clicking the arrow
        document.querySelectorAll('.nexus-sidebar-menu details summary').forEach(summary => {
            summary.addEventListener('click', function(e) {
                // Check if click was on the arrow (the ::after pseudo-element doesn't count)
                const arrowClicked = e.offsetX > this.offsetWidth - 30;
                if (!arrowClicked) {
                    e.preventDefault();
                }
            });
        });
    }
});













document.addEventListener("DOMContentLoaded", function () {
    // Load navigation component
    fetch("components/hero1.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("hero1").innerHTML = data;
            
            // Initialize menu functionality after nav is loaded
            initMenuFunctionality();
        })
        .catch(error => console.error("Error loading the header:", error));

    // Initialize menu functionality
    function initMenuFunctionality() {
        // Toggle sidebar menu
        function initMenuFunctionality() {
        // Toggle sidebar menu
        function toggleNexusMenu() {
            const sidebar = document.getElementById('nexusSidebarMenu');
            const overlay = document.getElementById('nexusMenuOverlay');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
        }

        // Set up event listeners for menu toggle
        const menuToggle = document.querySelector('.nexus-menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleNexusMenu();
            });
        }

        // Set up event listener for close button
        const closeBtn = document.querySelector('.nexus-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleNexusMenu();
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('nexusSidebarMenu');
            const overlay = document.getElementById('nexusMenuOverlay');
            
            if (sidebar && overlay) {
                if (!sidebar.contains(event.target)) {
                    if (overlay.classList.contains('active')) {
                        toggleNexusMenu();
                    }
                }
            }
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.nexus-header');
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 50);
            }
        });

        // Immediately animate hero section on load
        const heroSection = document.querySelector('.nexus-hero');
        if (heroSection) {
            heroSection.classList.add('animate-in');
        }

        // Animate other elements immediately
        const elementsToAnimate = document.querySelectorAll(
            '.nexus-hero-left, .nexus-hero-right, .nexus-floating-project, .nexus-floating-center-image'
        );
        
        elementsToAnimate.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = element.style.transform.includes('translate(-50%') 
                ? 'translate(-50%, -50%)' 
                : 'translateY(0)';
        });

        // Set up Intersection Observer for elements that might come into view later
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = entry.target.style.transform.includes('translate(-50%') 
                        ? 'translate(-50%, -50%)' 
                        : 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        // Observe all animatable elements
        document.querySelectorAll(
            '.nexus-hero-left, .nexus-hero-right, .nexus-floating-project, .nexus-floating-center-image, .nexus-about-content'
        ).forEach(element => {
            observer.observe(element);
        });

        // Dropdown arrow functionality
        document.querySelectorAll('.nexus-sidebar-menu details summary').forEach(summary => {
            summary.addEventListener('click', function(e) {
                const arrowClicked = e.offsetX > this.offsetWidth - 30;
                if (!arrowClicked) {
                    e.preventDefault();
                }
            });
        });
    }

    // Initialize all functionality
    initMenuFunctionality();
    }
});





























// hero
document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/hero.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("hero").innerHTML = data;
            initheroc();  // Initialize carousel after loading hero section
        });
});

function initheroc() {
    const mobileTrigger = document.getElementById('holeyMobileTrigger');
    const mobileNav = document.getElementById('holeyMobileNav');
    const closeMobile = document.getElementById('holeyCloseMobile');
    
    mobileTrigger.addEventListener('click', () => {
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    closeMobile.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Mobile Dropdown Toggles
    const mobileServicesToggle = document.getElementById('mobileServicesToggle');
    const mobileServicesDropdown = document.getElementById('mobileServicesDropdown');
    const mobilePagesToggle = document.getElementById('mobilePagesToggle');
    const mobilePagesDropdown = document.getElementById('mobilePagesDropdown');
    
    mobileServicesToggle.addEventListener('click', (e) => {
      e.preventDefault();
      mobileServicesToggle.classList.toggle('active');
      mobilePagesToggle.classList.remove('active');
    });
    
    mobilePagesToggle.addEventListener('click', (e) => {
      e.preventDefault();
      mobilePagesToggle.classList.toggle('active');
      mobileServicesToggle.classList.remove('active');
    });
    
    // Close mobile menu when clicking outside
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Floating Image Effect
    const floatingImg = document.getElementById('holeyFloatingImg');
    
    document.addEventListener('mousemove', (e) => {
      if (window.innerWidth > 992) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const moveX = (x - 0.5) * 30;
        const moveY = (y - 0.5) * 20;
        
        floatingImg.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)`;
      }
    });
    
    // Scroll effect for header
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.holey-desktop-nav');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Animation on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.holey-hero-content, .holey-hero-image, .holey-stats, .holey-project-cta');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Initialize animations
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
}



document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/service1.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("service1").innerHTML = data;
         inits();   // Initialize carousel after loading hero section
        });
});





document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/service2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("service2").innerHTML = data;
       const cards = document.querySelectorAll('.geinca-service-card');
      const phoneMockup = document.querySelector('.geinca-phone-mockup');
      const header = document.querySelector('.geinca-services-header');
      
      // Initial animations
      header.classList.add('geinca-section-entrance');
      
      // Intersection Observer for cards
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };
      
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add delay based on index for staggered effect
            entry.target.style.transitionDelay = `${index * 0.1}s`;
            entry.target.classList.add('geinca-fade-in');
            
            // Start phone animation when first card is visible
            if (index === 0) {
              phoneMockup.classList.add('geinca-phone-animate');
            }
            
            // Optional: Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      // Observe each card
      cards.forEach(card => {
        observer.observe(card);
      });
      
      // Re-animate when scrolling back up
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const container = document.querySelector('.geinca-services-container');
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        
        // If we're within the container
        if (scrollPosition > containerTop - 300 && 
            scrollPosition < containerTop + containerHeight - 300) {
          cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.75) {
              card.style.transitionDelay = `${index * 0.1}s`;
              card.classList.add('geinca-fade-in');
            }
          });
        }
      });
    });
        });










function inits(){
     const animateOnScroll = function() {
            const elements = document.querySelectorAll('.ds-section-header, .ds-service-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('in-view');
                } else {
                    element.classList.remove('in-view');
                }
            });
        };

        // Run on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
}










document.addEventListener("DOMContentLoaded", function () {
    fetch("components/project.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("project").innerHTML = data;
            const projectFrames = document.querySelectorAll('.project-frame');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const progressDots = document.getElementById('progressDots');
      const projectTitle = document.getElementById('project-title');
      const projectDesc = document.getElementById('project-description');
      const visitBtn = document.getElementById('visit-btn');
      
      const projects = [
        {
          title: "shreebalajinursinghome",
          description: "Professional healthcare website with responsive design",
          url: "https://shreebalajinursinghome.com/"
        },
        {
          title: "vrakshaya",
          description: "Modern website with elegant design elements",
          url: "https://vrakshaya.in/"
        },
        {
          title: "projexel",
          description: "Business website with clean corporate aesthetic",
          url: "https://projexelksa.com/"
        },
        {
          title: "celestialgoweb",
          description: "Creative web design showcasing portfolio work",
          url: "https://celestialgoweb.com/"
        },
        {
          title: "dradityaverma",
          description: "Professional medical practitioner website",
          url: "https://dradityaverma.in/"
        }
      ];
      
      let currentIndex = 0;
      let isAnimating = false;
      let autoRotateInterval;
      
      // Create progress dots
      projects.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToProject(index));
        progressDots.appendChild(dot);
      });
      
      // Initialize iframes
      projectFrames.forEach(frame => {
        const iframe = frame.querySelector('iframe');
        const loadingScreen = frame.querySelector('.loading-screen');
        
        iframe.onload = () => {
          loadingScreen.style.display = 'none';
        };
        
        iframe.onerror = () => {
          loadingScreen.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>Could not load preview</p>';
        };
      });
      
      // Navigation functions
      function goToProject(index) {
        if (isAnimating || index === currentIndex) return;
        
        isAnimating = true;
        currentIndex = (index + projects.length) % projects.length;
        
        // Update active frame
        projectFrames.forEach(frame => {
          frame.classList.remove('active');
        });
        projectFrames[currentIndex].classList.add('active');
        
        // Update project info
        updateProjectInfo();
        
        // Update active dot
        document.querySelectorAll('.dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
        
        // Reset animation lock
        setTimeout(() => {
          isAnimating = false;
        }, 800);
      }
      
      function updateProjectInfo() {
        const project = projects[currentIndex];
        projectTitle.textContent = project.title;
        projectDesc.textContent = project.description;
        visitBtn.onclick = () => window.open(project.url);
      }
      
      // Event listeners
      prevBtn.addEventListener('click', () => goToProject(currentIndex - 1));
      nextBtn.addEventListener('click', () => goToProject(currentIndex + 1));
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToProject(currentIndex - 1);
        else if (e.key === 'ArrowRight') goToProject(currentIndex + 1);
      });
      
      // Auto-rotation (optional)
      // function startAutoRotate() {
      //   autoRotateInterval = setInterval(() => {
      //     goToProject(currentIndex + 1);
      //   }, 5000);
      // }
      
      function stopAutoRotate() {
        clearInterval(autoRotateInterval);
      }
      
      // Start auto-rotation
      startAutoRotate();
      
      // Pause on hover
      document.querySelector('.laptop-container').addEventListener('mouseenter', stopAutoRotate);
      document.querySelector('.laptop-container').addEventListener('mouseleave', startAutoRotate);
    });
});







document.addEventListener("DOMContentLoaded", function () {
    fetch("components/blog.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("blog").innerHTML = data;
                   const slider = document.querySelector('.hs-slider-container');
            const prevBtn = document.querySelector('.hs-prev-btn');
            const nextBtn = document.querySelector('.hs-next-btn');
            const blogCards = document.querySelectorAll('.hs-blog-card');
            const indicators = document.querySelectorAll('.hs-indicator');
            
            let currentIndex = 0;
            let cardsToShow = 1;
            let interval;
            let isAnimating = false;
            const animationDuration = 600;

            // Initialize slider
            function initSlider() {
                updateCardsToShow();
                updateSlider();
                updateIndicators();
                startAutoSlide();
            }

            // Update number of cards to show based on screen size
            function updateCardsToShow() {
                if (window.innerWidth >= 992) {
                    cardsToShow = 3;
                } else if (window.innerWidth >= 768) {
                    cardsToShow = 2;
                } else {
                    cardsToShow = 1;
                }
            }

            // Update slider position
            function updateSlider() {
                const cardWidth = blogCards[0].offsetWidth + 40; // Include margin
                const translateX = -currentIndex * cardWidth;
                
                slider.style.transition = `transform ${animationDuration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
                slider.style.transform = `translateX(${translateX}px)`;
                
                // Add active class to visible cards
                blogCards.forEach((card, index) => {
                    if (index >= currentIndex && index < currentIndex + cardsToShow) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });
            }

            // Update indicator dots
            function updateIndicators() {
                indicators.forEach((indicator, index) => {
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }

            // Go to next slide
            function goToNext() {
                if (isAnimating) return;
                isAnimating = true;
                
                currentIndex++;
                if (currentIndex > blogCards.length - cardsToShow) {
                    currentIndex = 0;
                }
                
                updateSlider();
                updateIndicators();
                
                setTimeout(() => {
                    isAnimating = false;
                }, animationDuration);
            }

            // Go to previous slide
            function goToPrev() {
                if (isAnimating) return;
                isAnimating = true;
                
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = blogCards.length - cardsToShow;
                }
                
                updateSlider();
                updateIndicators();
                
                setTimeout(() => {
                    isAnimating = false;
                }, animationDuration);
            }

            // Start auto sliding
            function startAutoSlide() {
                clearInterval(interval);
                interval = setInterval(goToNext, 5000);
            }

            // Event listeners
            nextBtn.addEventListener('click', function() {
                clearInterval(interval);
                goToNext();
                startAutoSlide();
            });

            prevBtn.addEventListener('click', function() {
                clearInterval(interval);
                goToPrev();
                startAutoSlide();
            });

            // Click on indicator dots
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function() {
                    if (currentIndex !== index) {
                        clearInterval(interval);
                        currentIndex = index;
                        updateSlider();
                        updateIndicators();
                        startAutoSlide();
                    }
                });
            });

            // Handle window resize
            window.addEventListener('resize', function() {
                updateCardsToShow();
                currentIndex = Math.min(currentIndex, blogCards.length - cardsToShow);
                updateSlider();
                updateIndicators();
            });

            // Initialize slider
            initSlider();
        })
        .catch(error => console.error("Error loading the header:", error));
});


 













    document.addEventListener("DOMContentLoaded", function () {
    fetch("components/aboutbanner.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("aboutbanner").innerHTML = data;
            toggleNexusMenu();
            initheroo();
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/blogbanner.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("blogbanner").innerHTML = data;
            toggleNexusMenu();
            initheroo();
        })
        .catch(error => console.error("Error loading the header:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("components/contactbanner.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contactbanner").innerHTML = data;
            toggleNexusMenu();
            initheroo();
        })
        .catch(error => console.error("Error loading the header:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("components/servicebanner.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("servicebanner").innerHTML = data;
            toggleNexusMenu();
            initheroo();
        })
        .catch(error => console.error("Error loading the header:", error));
});




document.addEventListener("DOMContentLoaded", function () {
    fetch("components/testimonials.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("testimonial").innerHTML = data;
             const floatingBg = document.getElementById('geincaFloatingBg');
            
            // Social media icons
            const socialIcons = [
                'fab fa-facebook', 'fab fa-twitter', 'fab fa-instagram',
                'fab fa-linkedin', 'fab fa-youtube', 'fab fa-tiktok',
                'fab fa-pinterest', 'fab fa-reddit', 'fab fa-whatsapp',
                'fab fa-snapchat', 'fab fa-discord', 'fab fa-twitch'
            ];
            
            // Device icons
            const deviceIcons = [
                '💻', '📱', '🖥️', '⌨️', '🖱️', '📷',
                '🎮', '📸', '🖨️', '🖲️', '💾', '📠'
            ];
            
            // Emojis
            const emojis = [
                '🚀', '🌟', '🔥', '💡', '🎯', '🌈',
                '✨', '🎨', '📊', '📈', '💎', '🏆'
            ];
            
            // Create floating social media icons
            for (let i = 0; i < 30; i++) {
                const icon = document.createElement('i');
                icon.className = `geinca-floating-icon ${socialIcons[Math.floor(Math.random() * socialIcons.length)]}`;
                icon.style.left = `${Math.random() * 100}%`;
                icon.style.top = `${Math.random() * 100}%`;
                icon.style.fontSize = `${Math.random() * 2 + 1}rem`;
                icon.style.animationDelay = `${Math.random() * 5}s`;
                floatingBg.appendChild(icon);
            }
            
            // Create floating device icons
            for (let i = 0; i < 20; i++) {
                const device = document.createElement('div');
                device.className = 'geinca-floating-device';
                device.textContent = deviceIcons[Math.floor(Math.random() * deviceIcons.length)];
                device.style.left = `${Math.random() * 100}%`;
                device.style.top = `${Math.random() * 100}%`;
                device.style.fontSize = `${Math.random() * 3 + 1}rem`;
                device.style.animationDelay = `${Math.random() * 10}s`;
                floatingBg.appendChild(device);
            }
            
            // Create floating emojis
            for (let i = 0; i < 25; i++) {
                const emoji = document.createElement('div');
                emoji.className = 'geinca-floating-emoji';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = `${Math.random() * 100}%`;
                emoji.style.top = `${Math.random() * 100}%`;
                emoji.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
                emoji.style.animationDelay = `${Math.random() * 7}s`;
                floatingBg.appendChild(emoji);
            }
        })
        .catch(error => console.error("Error loading the header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/social.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("social").innerHTML = data;
            const widget = document.getElementById('socialWidget');
            const toggle = document.getElementById('socialWidgetToggle');
            const icons = document.getElementById('socialWidgetIcons');
            
            // Toggle social icons on click
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                widget.classList.toggle('social-widget-active');
            });
            
            // Close when clicking outside
            document.addEventListener('click', function() {
                widget.classList.remove('social-widget-active');
            });
            
            // Prevent closing when clicking inside the widget
            icons.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            // Add slight delay to animation for each icon
            const socialButtons = document.querySelectorAll('.social-widget-btn');
            socialButtons.forEach((btn, index) => {
                btn.style.transitionDelay = `${index * 0.05}s`;
            });
        })
        .catch(error => console.error("Error loading the header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/chatbot.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("chatbot").innerHTML = data;
           const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotHeader = document.getElementById('chatbotHeader');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.remove('hidden');
        if (chatbotContainer.classList.contains('collapsed')) {
            chatbotContainer.classList.remove('collapsed');
            // Add welcome message if first time opening
            if (chatbotMessages.children.length === 0) {
                addBotMessage("Hello! I'm your assistant Geinca. How can I help you today?");
                showSuggestions();
            }
        } else {
            chatbotContainer.classList.add('collapsed');
        }
    });

    // Close chatbot
    chatbotClose.addEventListener('click', function() {
        chatbotContainer.classList.add('hidden');
    });

    // Toggle expand/collapse when header is clicked
    chatbotHeader.addEventListener('click', function() {
        chatbotContainer.classList.toggle('collapsed');
    });

    // Send message when button is clicked
    sendButton.addEventListener('click', sendMessage);

    // Send message when Enter is pressed
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send a message
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            showTypingIndicator();
            
            // Process the message after a short delay to simulate thinking
            setTimeout(() => {
                removeTypingIndicator();
                processUserMessage(message);
            }, 1000);
        }
    }

    // Function to add a user message to the chat
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Function to add a bot message to the chat
    function addBotMessage(text, isInfo = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot-message');
        if (isInfo) {
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('info-text');
            infoDiv.textContent = text;
            messageDiv.appendChild(infoDiv);
        } else {
            messageDiv.textContent = text;
        }
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Function to show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('typing-indicator');
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatbotMessages.appendChild(typingDiv);
        scrollToBottom();
    }

    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Function to scroll to the bottom of the messages
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to show suggestion chips
    function showSuggestions() {
        const suggestions = [
            "What is this website about?",
            "How do I contact support?",
            "Where can I find pricing?",
            "What are your features?"
        ];
        
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot-message');
        
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.classList.add('suggestions');
        
        suggestions.forEach(suggestion => {
            const chip = document.createElement('div');
            chip.classList.add('suggestion-chip');
            chip.textContent = suggestion;
            chip.addEventListener('click', () => {
                userInput.value = suggestion;
                sendMessage();
            });
            suggestionsDiv.appendChild(chip);
        });
        
        messageDiv.appendChild(suggestionsDiv);
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Enhanced knowledge base with different question phrasings
    const knowledgeBase = {
        "website purpose": {
            answer: "Geinca provides end-to-end digital solutions including website & software development, SEO, and digital marketing to enhance online visibility. Their services also cover Google Business Profile optimization, social media growth, and PPC advertising to drive targeted traffic and business growth.",
            questions: [
                "what is this website about",
                "what does this site do",
                "purpose of this website",
                "what's this platform for"
            ]
        },
        "contact support": {
            answer: "You can contact our support team by emailing info@geinca.com or calling +91 63702 62470. opens Everyday",
            questions: [
                "how do i contact support",
                "support contact info",
                "how to reach customer service",
                "where can i get help"
            ]
        },
        "pricing": {
            answer: "You can contact us to know more about our pricing range. We offer several plans to suit different needs and budgets.",
            questions: [
                "where can i find pricing",
                "how much does it cost",
                "what are your prices",
                "do you have free plan"
            ]
        },
        "features": {
            answer: "Geinca offers expert services in website development, SEO, social media marketing, and Google Business optimization to help businesses grow online. Their client-focused approach ensures tailored digital strategies with measurable results across India.",
            questions: [
                "what are your features",
                "what can this platform do",
                "key functionalities",
                "main capabilities"
            ]
        },
        "greetings": {
            answer: "Hello! I'm your assistant Geinca. How can I help you today?",
            questions: [
                "hello",
                "hi",
                "hey",
                "good morning"
            ]
        },
        "thanks": {
            answer: "You're welcome! Is there anything else I can help with?",
            questions: [
                "thanks",
                "thank you",
                "appreciate it",
                "that helps"
            ]
        }
    };

    // Function to process user messages with better matching
    async function processUserMessage(message) {
        const lowerMessage = message.toLowerCase().trim();
        
        // First check knowledge base
        const kbMatch = findInKnowledgeBase(lowerMessage);
        
        if (kbMatch) {
            addBotMessage(kbMatch);
            if (chatbotMessages.querySelectorAll('.message').length < 6) {
                showSuggestions();
            }
        } else {
            // If no match in knowledge base, get answer from AI
            addBotMessage("Let me check that for you...");
            
            try {
                // In a real implementation, you would call your AI API here
                // For this example, we'll simulate getting an answer from the AI
                const aiAnswer = await getAIAnswer(lowerMessage);
                addBotMessage(aiAnswer);
                
                // Suggest adding to knowledge base
                addBotMessage("Was this helpful? If this is a common question, we can add it to our knowledge base.", true);
            } catch (error) {
                addBotMessage("I'm having trouble finding an answer. Please try rephrasing your question or contact support for help.");
            }
        }
    }

    // Improved knowledge base matching
    function findInKnowledgeBase(message) {
        for (const category in knowledgeBase) {
            const { answer, questions } = knowledgeBase[category];
            
            // Check if message exactly matches any question
            if (questions.includes(message)) {
                return answer;
            }
            
            // Check if message contains any question keywords
            for (const question of questions) {
                if (message.includes(question) || question.includes(message)) {
                    return answer;
                }
            }
        }
        return null;
    }

    // Simulated AI response (in real implementation, replace with actual API call)
    async function getAIAnswer(question) {
        // This is where you would call your actual AI API
        // For demonstration, we'll return a simulated response
        
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate different types of responses based on question
                if (question.includes("how") || question.includes("do i")) {
                    resolve(`To ${question},you would typically need to follow a few basic steps such as logging in, accessing the dashboard, and navigating to the relevant section. For specific instructions, our support team can assist you further.`);
                } 
                else if (question.includes("what") || question.includes("meaning")) {
                    resolve(`"${question}" refers to a common concept in our services. In our context, this means a feature or process designed to help users achieve better results through our platform.`);
                }
                else if (question.includes("why")) {
                    resolve(`The reason for ${question} is often to ensure optimal performance, security, or user experience. Our approach to this is based on best practices and user needs.`);
                }
                else {
                    resolve(`Regarding "${question}", this depends on several factors such as project scope, budget, and timelines. Generally, we offer flexible solutions tailored to your goals. For your specific case, you might want to schedule a free consultation with our team.`);
                }
            }, 1500); // Simulate API delay
        });
    }
        })
        .catch(error => console.error("Error loading the header:", error));
});