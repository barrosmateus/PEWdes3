const header = document.querySelector('.mynav');
const body = document.querySelector('body');


window.addEventListener('scroll', function(){


    if(window.scrollY >= 60) {
        header.classList.add('colored-menu');
        header.classList.remove('transparent-menu');
    }else{
        header.classList.add('transparent-menu');
        header.classList.remove('colored-menu'); 

    }

  
})