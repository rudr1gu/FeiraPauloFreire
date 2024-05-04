function setupButtonHandlers() {
    const buttons = document.querySelectorAll('.inte');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!button.disabled) {
                button.disabled = true;
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = button.name;
                input.value = button.value;
                document.getElementById('myForm').appendChild(input);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupButtonHandlers);