const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.getElementsByClassName('hidden');
console.log(hiddenElements);
for (let index = 0; index < hiddenElements.length; index++) {
    observer.observe(hiddenElements[index]);
}