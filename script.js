function ouvrirCV() {
    window.open('fichiers/Timothee_Imaho_CV.pdf', '_blank');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        // Faire défiler jusqu'à la section avec un effet de transition
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}