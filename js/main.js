// // Wait for document to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
    
//     // Smooth scrolling for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);
            
//             window.scrollTo({
//                 top: targetElement.offsetTop - 70, // Adjust for header height
//                 behavior: 'smooth'
//             });
//         });
//     });
    
//     // Add active class to nav items on scroll
//     window.addEventListener('scroll', function() {
//         const sections = document.querySelectorAll('section');
//         const navLinks = document.querySelectorAll('.nav-link');
        
//         let currentSection = '';
        
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
            
//             if (pageYOffset >= sectionTop - 150) {
//                 currentSection = section.getAttribute('id');
//             }
//         });
        
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href') === `#${currentSection}`) {
//                 link.classList.add('active');
//             }
//         });
//     });
    
//     // Project cards hover effect enhancement
//     const projectCards = document.querySelectorAll('.project-card');
    
//     projectCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-15px)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//         });
//     });
// });