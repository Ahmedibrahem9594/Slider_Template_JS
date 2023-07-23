//Get Elements of images
let sliderImage = Array.from(document.querySelectorAll(".slider-container img"));

//get slider counter 

let counter = sliderImage.length;

//get slider count

let currentSlider = document.querySelector(".slider-counter");

//get previous and next button

let nextBtn = document.querySelector(".nextbtn");
let prevBtn = document.querySelector(".prevbtn");

//set Current Slide 

let currentSlide = 1;

//set ul list 
let paginationElement = document.createElement("ul");

paginationElement.setAttribute("Id", "pagination-element");


//set list of ul 

for (let i=1; i <= counter; i++) {
    //Create li of ul
    let paginationItem = document.createElement("li");

    //set attribute of li
    paginationItem.setAttribute("data-index", i);

    //apped index of each slide
    paginationItem.appendChild(document.createTextNode(i));

    //append items of li to the ul
    paginationElement.appendChild(paginationItem);
}

//append ul to the page
document.querySelector(".list-slider").appendChild(paginationElement);


//get element of created ul
let createdUl = document.getElementById("pagination-element");

let bulletsPagination = Array.from(document.querySelectorAll("#pagination-element li"));



nextBtn.onclick = nextSlide;

prevBtn.onclick = prevSlide;

//function of next btn
function nextSlide() {
    if (nextBtn.classList.contains("disabled")) {
       return false;
    } else {
        currentSlide ++;
        theChecker ();
    }
}

//function of prev btn
function prevSlide() {
    if (prevBtn.classList.contains("disabled")) {
        return false;
     } else {
         currentSlide --;
         theChecker ();
     }
}

bulletsPagination.forEach((e)=> {
    e.onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker ();
    }
})

theChecker ();

function theChecker () {
    //add text content to slider number
    currentSlider.textContent = `Slider # ${currentSlide} Of ${counter}`;

    // assign active class function
    removeActive()
    //add class active to image
    sliderImage[currentSlide - 1].classList.add("active");
    
    //add class active to list (li)
    createdUl.children[currentSlide - 1].classList.add("active");

    //check if the img is the first
    if (currentSlide === 1) {
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }

    //check if the img is the last
    if (currentSlide === counter) {
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");
    }
    


}


function removeActive() {
    //[1] remove active class from all img
    sliderImage.forEach((e)=> {
        e.classList.remove("active");
    })
    //[2] remove active class from all li
    bulletsPagination.forEach((e)=> {
        e.classList.remove("active");
    })
}