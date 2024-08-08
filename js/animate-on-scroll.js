const boxes = document.getElementsByClassName("box")
const right_boxes = document.getElementsByClassName("box-right")

function AnimateBoxes(){
    const triggerBottom = (window.innerHeight / 5) * 4;
    AnimateLeftBoxes(triggerBottom)
    AnimateRightBoxes(triggerBottom)
}

function AnimateLeftBoxes(triggerBottom)
{
    for (const box of boxes){
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom){
            box.classList.add("show");
        }
        else
        {
            box.classList.remove("show")
        }
    }
}
function AnimateRightBoxes(triggerBottom)
{
    for (const box of right_boxes){
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom){
            box.classList.add("show");
        }
        else
        {
            box.classList.remove("show")
        }
    }
}

window.addEventListener("scroll", AnimateBoxes);
// AnimateBoxes();



function openFirstPage(){
    window.open("https://github.com/deak-daniel/Naive_Bayes_Classifier/tree/master/bayes", "_blank");
}
function openSecondPage(){
    window.open("https://github.com/deak-daniel/TextSummarizer_TFIDF", "_blank");
}
function openThirdPage(){
    window.open(url, "_blank");
}