var modal= document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var blurDiv = document.getElementById("blur-div");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
var imgs = document.querySelectorAll("#gallery img");
var toggle = document.getElementById("toggle");
let currentIndex = 0;
const imagePopup= (imgElement)=>{
    modalImage.src = imgElement.src;
    modal.classList.remove("hidden");
    blurDiv.classList.remove("hidden")
    currentIndex = Array.from(imgs).indexOf(imgElement);

    if (currentIndex === 0){
        prevButton.classList.add("hidden");
    }else{
        prevButton.classList.remove("hidden");
    }
    
    if (currentIndex === imgs.length - 1){
        nextButton.classList.add("hidden");
    }else{
        nextButton.classList.remove("hidden");
    }
  
}
const closeModal = () =>{
    modal.classList.add("hidden")
    blurDiv.classList.add("hidden")
}

nextButton.addEventListener("click", () =>{
    currentIndex = (currentIndex + 1 ) % imgs.length;
    imagePopup(imgs[currentIndex]);
})
prevButton.addEventListener("click", () =>{
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    imagePopup(imgs[currentIndex]);
})

imgs.forEach(image =>{
    image.addEventListener("click",() => imagePopup(image))
});



const changeDarkTheme =() =>{
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    
}
const changeLightTheme =() =>{
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme","light");
}

toggle.addEventListener("click", () =>{
    const theme = localStorage.getItem('theme')
    if(theme === 'dark'){
        changeLightTheme()
        
    }else{
        changeDarkTheme()
    }

})
const theme = localStorage.getItem('theme');
if(theme === 'dark'){
    changeDarkTheme()
    toggle.setAttribute("checked", "checked");
}else{
    changeLightTheme()
}




