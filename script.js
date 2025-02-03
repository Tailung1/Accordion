const questions=document.querySelectorAll('.question-div')
const answers=document.querySelectorAll('.answer')
const arrowImgs=document.querySelectorAll('img[alt=arrow-icon]')


let active=null;

questions.forEach(question => {
    question.addEventListener('click',()=> {
        let closest=question.closest('.question-div')
        if(closest) {
            let Question=closest.children[0].children[0]
            let Arrow=closest.children[0].children[1]
            let Answer=closest.children[1]

            if(closest === active) {
                Question.style.fontWeight='normal'
                Arrow.style.transform='rotate(0)'
                Answer.style.display='none'
                active=null;
            } else {
                if(active) {
                    active.children[0].children[0].style.fontWeight='normal'
                    active.children[0].children[1].style.transform='rotate(0)'
                    active.children[1].style.display='none'
                    active=null
                }
                Question.style.fontWeight='bold'
                Arrow.style.transform='rotate(180deg)'
                Answer.style.display='block'
                active=closest;
            }
        }
    })
})
