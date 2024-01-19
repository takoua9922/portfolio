document.addEventListener('DOMContentLoaded', function () {
    // Code JavaScript spécifique à la page d'accueil
  
    // Exemple : Changer la couleur du texte après le chargement de la page
    const welcomeMessage = document.querySelector('.about h2');
  
    if (welcomeMessage) {
      welcomeMessage.style.color = getRandomColor();
    }
  
    // Exemple : Ajouter une classe à un élément pour déclencher une animation CSS
    const aboutSection = document.querySelector('.about');
  
    if (aboutSection) {
      aboutSection.classList.add('animate');
    }
  
    // Fonction pour obtenir une couleur aléatoire au format hexadécimal
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });