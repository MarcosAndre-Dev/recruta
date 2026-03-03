document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-card');

    // Efeito de entrada suave nos links
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    console.log("Página do Recruta pronta para voar! 🦜");
});