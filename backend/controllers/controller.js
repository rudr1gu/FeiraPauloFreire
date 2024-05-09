let visibilidadeBtn = () =>{
    const btnCamp = document.querySelectorAll('.inte');

    btnCamp.forEach(button => {   
        if (button.value === '') {
            button.style.display = 'none'
        } 
        
    });
}

document.addEventListener('DOMContentLoaded', visibilidadeBtn);