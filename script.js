const questions=document.querySelectorAll('.question-div')
const answers=document.querySelectorAll('.answer')
const arrowImgs=document.querySelectorAll('img[alt=arrow-icon]')

let active=null;

questions.forEach(question => {
    question.addEventListener('click',()=> {
        let questionDiv=question.closest('.question-div')
        questionDiv.classList.toggle('active')
        if(questionDiv) {
            if(questionDiv === active) {
                active=null;
            } else {
                if(active) {
                    active.classList.remove('active')
                    active=questionDiv
                }
                active=questionDiv         
            }
        }
    })
})
