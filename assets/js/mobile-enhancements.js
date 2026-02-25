// Mobile Enhancement JavaScript for Astrology Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    function initMobileMenu() {
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('change', function() {
                if (this.checked) {
                    navLinks.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
        
        if (closeBtn && navLinks) {
            closeBtn.addEventListener('change', function() {
                if (this.checked) {
                    navLinks.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    // Uncheck menu button
                    if (menuBtn) menuBtn.checked = false;
                }
            });
        }
        
        // Close menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
                if (menuBtn) menuBtn.checked = false;
                if (closeBtn) closeBtn.checked = true;
            });
        });
    }
    
    // Touch-friendly interactions
    function initTouchEnhancements() {
        // Add touch feedback to buttons
        const buttons = document.querySelectorAll('.btn, .as_btn, button');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Improve form inputs for mobile
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            // Prevent zoom on iOS
            if (input.type === 'email' || input.type === 'tel' || input.type === 'number') {
                input.setAttribute('autocomplete', 'on');
                input.setAttribute('autocapitalize', 'off');
                input.setAttribute('autocorrect', 'off');
            }
            
            // Add focus/blur effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Lazy loading for images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
    
    // Mobile-specific modal improvements
    function initMobileModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('show.bs.modal', function() {
                document.body.style.overflow = 'hidden';
            });
            
            modal.addEventListener('hide.bs.modal', function() {
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    // Swipe gestures for carousels
    function initSwipeGestures() {
        const carousels = document.querySelectorAll('.slick-slider');
        
        carousels.forEach(carousel => {
            let startX = 0;
            let startY = 0;
            let endX = 0;
            let endY = 0;
            
            carousel.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });
            
            carousel.addEventListener('touchend', function(e) {
                endX = e.changedTouches[0].clientX;
                endY = e.changedTouches[0].clientY;
                
                const deltaX = endX - startX;
                const deltaY = endY - startY;
                
                // Check if it's a horizontal swipe
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                        // Swipe right - previous slide
                        $(carousel).slick('slickPrev');
                    } else {
                        // Swipe left - next slide
                        $(carousel).slick('slickNext');
                    }
                }
            });
        });
    }
    
    // Optimize performance for mobile
    function initPerformanceOptimizations() {
        // Debounce scroll events
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(function() {
                // Handle scroll events here
                handleScroll();
            }, 16); // ~60fps
        });
        
        // Debounce resize events
        let resizeTimeout;
        window.addEventListener('resize', function() {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            resizeTimeout = setTimeout(function() {
                // Handle resize events here
                handleResize();
            }, 250);
        });
    }
    
    function handleScroll() {
        // Add scroll-based animations or effects here
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show/hide back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (scrollTop > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        }
    }
    
    function handleResize() {
        // Handle responsive adjustments here
        const width = window.innerWidth;
        
        // Reinitialize sliders if needed
        if (width <= 768) {
            // Mobile specific adjustments
            $('.slick-slider').slick('setOption', 'arrows', false, true);
        } else {
            // Desktop specific adjustments
            $('.slick-slider').slick('setOption', 'arrows', true, true);
        }
    }
    
    // Add back to top button
    function addBackToTopButton() {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--secondary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        `;
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(backToTop);
    }
    
    // Improve form validation for mobile
    function initMobileFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('error');
                        
                        // Show error message
                        let errorMsg = input.parentElement.querySelector('.error-message');
                        if (!errorMsg) {
                            errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            errorMsg.style.color = 'red';
                            errorMsg.style.fontSize = '12px';
                            errorMsg.style.marginTop = '5px';
                            input.parentElement.appendChild(errorMsg);
                        }
                        errorMsg.textContent = 'This field is required';
                    } else {
                        input.classList.remove('error');
                        const errorMsg = input.parentElement.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.remove();
                        }
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    }
    
    // Initialize all mobile enhancements
    initMobileMenu();
    initTouchEnhancements();
    initSmoothScrolling();
    initLazyLoading();
    initMobileModals();
    initSwipeGestures();
    initPerformanceOptimizations();
    addBackToTopButton();
    initMobileFormValidation();
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            handleResize();
        }, 500);
    });
    
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    console.log('Mobile enhancements initialized successfully!');
});

// Service Worker for PWA functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}