function displayImage(imageSrc) {
    const displayedImage = document.getElementById("displayed-image");

    // Réinitialiser l'animation en supprimant la classe 'show'
    displayedImage.classList.remove("show");

    // Changer la source de l'image
    setTimeout(() => {
        displayedImage.src = imageSrc;

        // Attendre que la source soit changée avant d'appliquer l'animation
        setTimeout(() => {
            displayedImage.classList.add("show");
        }, 100); // Un léger délai pour permettre le changement de source
    }, 500); // Délai pour l'animation de l'image précédente
}