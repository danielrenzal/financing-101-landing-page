document.addEventListener('DOMContentLoaded', () => {
    //accordion 1
    const methods = document.querySelectorAll('.method_accordion .method');

    for(let i=0; i<methods.length; i++){
        methods[i].addEventListener('click', function(){
            this.children[1].classList.toggle('display_body');
            this.children[0].children[2].classList.toggle('rotate-arrow');
        })
    }

    //accordion 2
    const questions = document.querySelectorAll('.faqs_accordion .question');

    for(let i=0; i<questions.length; i++){
        questions[i].addEventListener('click', function(){
            this.children[1].classList.toggle('display_body');
            this.children[0].children[1].classList.toggle('rotate-arrow');
        })
    }
});
