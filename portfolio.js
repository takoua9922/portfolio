document.addEventListener('DOMContentLoaded', function () {
    
    const portfolioSection = document.querySelector('#portfolio');
  
    if (portfolioSection) {
      portfolioSection.classList.add('animate');
    }
  
   
    const skillsList = document.querySelector('#portfolio ul');
  
    if (skillsList) {
      skillsList.addEventListener('click', function (event) {
        // Vérifier si l'élément cliqué est une compétence (li)
        if (event.target.tagName === 'LI') {
          // Exemple : Afficher le texte de la compétence dans la console
          console.log('Compétence sélectionnée :', event.target.textContent);
          
          
        }
      });
    }
  
    
  
  });