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


    const discount_options = document.querySelectorAll(".savings .price");
    const value = document.querySelector(".savings .value");

    for(let i=0; i<discount_options.length; i++){
        discount_options[i].addEventListener("click", function(){
            this.classList.add("selected_discount");

            for(let j=0; j<discount_options.length; j++){
                if(discount_options[j] != this){
                    discount_options[j].classList.remove("selected_discount");
                }else{
                    //set total saved
                    value.innerHTML = discount_options[j].getAttribute("data-price");
                    //add background color of lighter blue to appear as part of the selected range
                    let k = j;
                    while(k >= 0){
                        discount_options[k].style.backgroundColor = "#05AAE1";
                        k--;
                    }

                    //add background color of darker blue to appear as part of the unselected range
                    let l = j+1;
                    while(l <= 3){
                        discount_options[l].style.backgroundColor = "#05AAE14D";
                        l++;
                    }
                }
            }
        })
    }
});
