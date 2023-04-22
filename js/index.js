



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

	
let timer;

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    myFunction();
  }, 180000);
}

function myFunction() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("myModal3").style.display = "none";
  document.getElementById("myModal4").style.display = "none";
  document.getElementById("myModal5").style.display = "none";
  document.getElementById("myModal6").style.display = "none";
  document.getElementById("myModal7").style.display = "none";
  document.getElementById("myModal8").style.display = "none";
  document.getElementById("myModal9").style.display = "none";
  document.getElementById("myModal10").style.display = "none";
}

// Adicionar ou remover eventos de escuta relevantes aqui
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);
document.addEventListener("scroll", resetTimer);


	



window.onload = () => window.scrollTo(450, 10);

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

btn[7].onclick = function() {
    modal[7].style.display = "block";
}

btn[8].onclick = function() {
    modal[8].style.display = "block";
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

span[7].onclick = function() {
    modal[7].style.display = "none";
}

span[8].onclick = function() {
    modal[8].style.display = "none";
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
    if (event.target == myModal8) {
        myModal8.style.display = "none";
    }
    if (event.target == myModal9) {
        myModal9.style.display = "none";
    }
}

