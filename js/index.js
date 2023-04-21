



/*--------------------------------------*/

(function(){
    var curYPos, curXPos, curDown;
  
    window.addEventListener('mousemove', function(e){ 
      if(curDown){
        window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
      }
    });
  
    window.addEventListener('mousedown', function(e){ 
      curYPos = e.pageY; 
      curXPos = e.pageX; 
      curDown = true; 
    });
  
    window.addEventListener('mouseup', function(e){ 
      curDown = false; 
    });
  })()


/*--------------------------------------*/

	
function myFunction() {
	document.getElementsByClassName("modal")[0].style.display = 'none';
}

function myFunction2() {
document.getElementById("myModal3")[0].style.display = 'none';
}


window.onload = () => window.scrollTo(2000, 300);

/*--------------------------------------*/

var modal = document.getElementsByClassName('modal');
    
// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}
btn[2].onclick = function() {
    modal[2].style.display = "block";
}

btn[3].onclick = function() {
    modal[3].style.display = "block";
}

btn[4].onclick = function() {
    modal[4].style.display = "block";
}

btn[5].onclick = function() {
    modal[5].style.display = "block";
}

btn[6].onclick = function() {
    modal[6].style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
    modal[2].style.display = "none";
}

span[3].onclick = function() {
    modal[3].style.display = "none";
}

span[4].onclick = function() {
    modal[4].style.display = "none";
}

span[5].onclick = function() {
    modal[5].style.display = "none";
}

span[6].onclick = function() {
    modal[6].style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
    if (event.target == myModal2) {
        myModal2.style.display = "none";
    }
    if (event.target == myModal3) {
        myModal3.style.display = "none";
    }
    if (event.target == myModal4) {
        myModal4.style.display = "none";
    }
    if (event.target == myModal5) {
        myModal5.style.display = "none";
    }
    if (event.target == myModal6) {
        myModal6.style.display = "none";
    }
    if (event.target == myModal7) {
        myModal7.style.display = "none";
    }
}


/*--------------------------------------*/

const carouselContainer = document.querySelector('.child-3');
const listImageArea = carouselContainer.querySelector('.next-list');
const listOfImages = listImageArea.querySelectorAll('img');
const currentImage = carouselContainer.querySelector('.current-image');
const arrowLeft = carouselContainer.querySelector('.arrow-left');
const arrowRight = carouselContainer.querySelector('.arrow-right');

function styleList() {
    if (listImageArea.scrollWidth == listImageArea.offsetWidth){
        listImageArea.style.justifyContent = 'center'
    } else {
        listImageArea.style.justifyContent = 'flex-start'
    }

};

function goToRight() {
    var current = listImageArea.querySelector('.current-image-list');
    current.parentElement.nextElementSibling.children[0].classList.add('current-image-list');
    current.classList.remove('current-image-list');
    current = listImageArea.querySelector('.current-image-list');
    listImageArea.scrollLeft = current.offsetLeft;
    currentImage.attributes.src.value = current.attributes.src.value;
    currentImage.classList.add('slideInFromRight');
    setTimeout(function () {
        currentImage.classList.remove('slideInFromRight');
    }, 500);
};

function goToLeft() {
    var current = listImageArea.querySelector('.current-image-list');
    current.parentElement.previousElementSibling.children[0].classList.add('current-image-list');
    current.classList.remove('current-image-list');
    current = listImageArea.querySelector('.current-image-list');
    listImageArea.scrollLeft = current.offsetLeft;
    currentImage.attributes.src.value = current.attributes.src.value;
    currentImage.classList.add('slideInFromLeft');
    setTimeout(function () {
        currentImage.classList.remove('slideInFromLeft');
    }, 500);
};

function changeCurrentImage (newImage) {
    currentImage.classList.add('fadeIn');
    setTimeout(function () {
        currentImage.classList.remove('fadeIn');
    }, 500);
    currentImage.attributes.src.value = this.attributes.src.value;
    //listOfImages.forEach(image => image.classList.remove('current-image-list'));
    listOfImages.forEach(function (image) {
        image.classList.remove('current-image-list');
    })
    this.classList.add('current-image-list');
}

styleList();

arrowLeft.addEventListener('click', goToLeft);
arrowRight.addEventListener('click', goToRight);

window.addEventListener('resize', function (e) {
    styleList();
});

(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

//listOfImages.forEach(image => image.addEventListener('click', changeCurrentImage));
listOfImages.forEach(function(image) {
    image.addEventListener('click', changeCurrentImage);
});


