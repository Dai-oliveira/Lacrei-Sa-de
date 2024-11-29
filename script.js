document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = document.getElementById('name').value
    
        const message = `Obrigado pelo contato ${nome}!`

        alert(message)
    });
});
