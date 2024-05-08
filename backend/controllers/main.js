function setupButtonHandlers() {
    const buttons = document.querySelectorAll('.inte');
    const clean = document.getElementById("cleanBtn");

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

    
    clean.addEventListener('click', ()=>{
        buttons.forEach(button => {
            button.disabled = false;
            const hiddenInput = document.querySelector(`input[type="hidden"][name="${button.name}"]`);
            hiddenInput && hiddenInput.remove();
          });
    });
}

document.addEventListener('DOMContentLoaded', setupButtonHandlers);