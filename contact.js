document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.querySelector('.contact__form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
      // Validez le formulaire ici
      const nameInput = document.querySelector('.contact__form-el--name');
      const emailInput = document.querySelector('.contact__form-el--email');
      const messageInput = document.querySelector('.contact__form-el--message');
  
      if (validateForm(nameInput, emailInput, messageInput)) {
        // Si le formulaire est valide, vous pouvez envoyer les données
        alert('Formulaire valide. Envoyer les données.');
      } else {
        
        alert('Veuillez remplir tous les champs du formulaire correctement.');
      }
    });
  
    function validateForm(nameInput, emailInput, messageInput) {
      
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        return false;
      }
      
  
      return true;
    }
  });