document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!firstName || !lastName || !email || !subject || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        console.log('Datos del formulario:', {
            firstName,
            lastName,
            email,
            subject,
            message
        });

        form.reset();
        alert('¡Mensaje enviado con éxito!');
    });
});