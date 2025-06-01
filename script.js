document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner la carte et ajouter un événement pour déplacer l'élément au clic
    const card = document.querySelector('.card');  // Sélectionner la carte (assurer qu'il n'y en a qu'une)
    
    if (card) { // Vérifier si l'élément .card existe
        card.addEventListener('click', () => {
            // Calculer la position aléatoire
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;

            // Déplacer la carte
            card.style.left = `${randomX}px`;
            card.style.top = `${randomY}px`;
        });
    }

    // Sélectionner tous les GIFs et leurs éléments audio
    const gifs = document.querySelectorAll('.gif');  // Sélectionner tous les GIFs avec la classe .gif
    const sounds = document.querySelectorAll('audio'); // Sélectionner tous les éléments audio

    gifs.forEach((gif, index) => {
        const sound = sounds[index]; // Assurer que l'élément audio correspond au GIF

        // Vérifier si les éléments existent
        if (gif && sound) {
            // Jouer le son du GIF au survol
            gif.addEventListener('mouseover', () => {
                sound.play().catch(error => {
                    console.error("Erreur lors de la lecture du son :", error);
                });
            });

            // Déplacer le GIF à une position aléatoire au survol
            gif.addEventListener('mouseover', () => {
                const randomX = Math.random() * (window.innerWidth - gif.offsetWidth);  // Calculer une position X aléatoire
                const randomY = Math.random() * (window.innerHeight - gif.offsetHeight); // Calculer une position Y aléatoire

                // Appliquer la position aléatoire au GIF
                gif.style.position = 'absolute';
                gif.style.left = `${randomX}px`;
                gif.style.top = `${randomY}px`;
            });
        }
    });
});






