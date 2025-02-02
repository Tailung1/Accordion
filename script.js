const questions=document.querySelectorAll('.question-div')
const answers=document.querySelectorAll('.answer')
const arrowImgs=document.querySelectorAll('img[alt=arrow-icon]')


let active=null;

questions.forEach(question => {
    question.addEventListener('click',()=> {
        let closest=question.closest('.question-div')
        let Question=closest.children[0].children[0]
        let Arrow=closest.children[0].children[1]
        let Answer=closest.children[1]

        Question.style.fontWeight='bold'
        Arrow.style.transform='rotate(180deg)'
        Answer.style.display='block'

        if(active) {
            if(active === closest) {
                Question.style.fontWeight='normal'
                Arrow.style.transform='rotate(0)'
                Answer.style.display='none'
                active=null
            }
            let activeQuest=active.children[0].children[0]
            let activeArrow=active.children[0].children[1]
            let activeAnswer=active.children[1]

            activeQuest.style.fontWeight='normal'
            activeArrow.style.transform='rotate(0)'
            activeAnswer.style.display='none'
            active=closest;
        } else {
            Question.style.fontWeight='bold'
            Arrow.style.transform='rotate(180deg)'
            Answer.style.display='block'
            active=closest
        }
    })
})
