document.addEventListener('DOMContentLoaded', () => {
    //accordion
    const methods = document.querySelectorAll('.method-accordion .method');

    for(let i=0; i<methods.length; i++){
        methods[i].addEventListener('click', function(){
            this.children[1].classList.toggle('display-body');
            this.children[0].children[2].classList.toggle('rotate-arrow');
        })
    }
});
