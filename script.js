document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-group input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
            input.setAttribute('placeholder', '');
        });

        input.addEventListener('blur', () => {
            input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
        });
    });
});
