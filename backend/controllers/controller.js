let visibilidadeBtn = () =>{
    const btnCamp = document.querySelectorAll('.inte');

    btnCamp.forEach(button => {   
        if (button.value === '') {
            button.style.display = 'none';
        } 
        
    });

    const links = document.querySelectorAll('.icones');

    links.forEach(item =>{
        item.dataset.value == "n" ? item.style.display = "none" : console.log(item.value);
        
    })
}

document.addEventListener('DOMContentLoaded', visibilidadeBtn);