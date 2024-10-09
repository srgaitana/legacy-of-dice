document.getElementById('toggleAside').addEventListener('click', function() {
    const aside = document.getElementById('actionHistory');
    const icon = this.querySelector('i');

    if (aside.style.display === 'none' || aside.style.display === '') {
        aside.style.display = 'block'; // Muestra el aside
        icon.classList.remove('fa-eye'); // Cambia el icono a 'ocultar'
        icon.classList.add('fa-eye-slash');
    } else {
        aside.style.display = 'none'; // Oculta el aside
        icon.classList.remove('fa-eye-slash'); // Cambia el icono a 'mostrar'
        icon.classList.add('fa-eye');
    }
});
