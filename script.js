document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("YOUR_USER_ID"); // Substitua YOUR_USER_ID pelo seu ID de usuário do EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

       
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensagem enviada com sucesso!'); 

        }, function(error) {
            console.log('FAILED...', error);
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        });
    });
});
