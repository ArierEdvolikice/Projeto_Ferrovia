



/*--------------------------------------*/


(function () {
    var curYPos, curXPos, curDown;

    window.addEventListener('mousemove', function (e) {
        if (curDown) {
            window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
        }
    });

    window.addEventListener('mousedown', function (e) {
        curYPos = e.pageY;
        curXPos = e.pageX;
        curDown = true;
    });

    window.addEventListener('mouseup', function (e) {
        curDown = false;
    });
})()


/*--------------------------------------*/


function myFunctionCaucaia() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("myModal3").style.display = "none";
    document.getElementById("myModal4").style.display = "none";
    document.getElementById("myModal5").style.display = "none";
    document.getElementById("myModal6").style.display = "none";
    document.getElementById("myModal7").style.display = "none";
    document.getElementById("myModal8").style.display = "none";
    document.getElementById("myModal9").style.display = "none";
    document.getElementById("myModal11").style.display = "none";
    document.getElementById("myModal12").style.display = "none";
    document.getElementById("myModal13").style.display = "none";
    document.getElementById("myModal14").style.display = "none";
    document.getElementById("myModal15").style.display = "none";
    document.getElementById("myModal16").style.display = "none";
    document.getElementById("myModal17").style.display = "none";
    document.getElementById("myModal18").style.display = "none";
    document.getElementById("myModal19").style.display = "none";
    document.getElementById("myModal20").style.display = "none";
}

function myFunctionSaoG() {
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
    document.getElementById("myModal11").style.display = "none";
    document.getElementById("myModal12").style.display = "none";
    document.getElementById("myModal13").style.display = "none";
    document.getElementById("myModal14").style.display = "none";
    document.getElementById("myModal16").style.display = "none";
    document.getElementById("myModal17").style.display = "none";
    document.getElementById("myModal18").style.display = "none";
    document.getElementById("myModal19").style.display = "none";
    document.getElementById("myModal20").style.display = "none";
}

function myFunctionSobral() {
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
    document.getElementById("myModal11").style.display = "none";
    document.getElementById("myModal12").style.display = "none";
    document.getElementById("myModal13").style.display = "none";
    document.getElementById("myModal14").style.display = "none";
    document.getElementById("myModal15").style.display = "none";
    document.getElementById("myModal16").style.display = "none";
    document.getElementById("myModal17").style.display = "none";
    document.getElementById("myModal19").style.display = "none";
    document.getElementById("myModal20").style.display = "none";
    document.getElementById("myModal21").style.display = "none";
    document.getElementById("myModal22").style.display = "none";
    document.getElementById("myModal23").style.display = "none";
    document.getElementById("myModal24").style.display = "none";
    document.getElementById("myModal25").style.display = "none";
    document.getElementById("myModal26").style.display = "none";
    document.getElementById("myModal27").style.display = "none";
    document.getElementById("myModal28").style.display = "none";
    document.getElementById("myModal29").style.display = "none";
    document.getElementById("myModal30").style.display = "none";
}

function myFunctionFortaleza() {
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("myModal3").style.display = "none";
    document.getElementById("myModal4").style.display = "none";
    document.getElementById("myModal5").style.display = "none";
    document.getElementById("myModal6").style.display = "none";
    document.getElementById("myModal7").style.display = "none";
    document.getElementById("myModal8").style.display = "none";
    document.getElementById("myModal9").style.display = "none";
    document.getElementById("myModal10").style.display = "none";
    document.getElementById("myModal11").style.display = "none";
    document.getElementById("myModal12").style.display = "none";
    document.getElementById("myModal13").style.display = "none";
    document.getElementById("myModal14").style.display = "none";
    document.getElementById("myModal15").style.display = "none";
    document.getElementById("myModal16").style.display = "none";
    document.getElementById("myModal17").style.display = "none";
    document.getElementById("myModal18").style.display = "none";
    document.getElementById("myModal19").style.display = "none";
    document.getElementById("myModal20").style.display = "none";
}

let timer;

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(function () {
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
    document.getElementById("myModal11").style.display = "none";
    document.getElementById("myModal12").style.display = "none";
    document.getElementById("myModal13").style.display = "none";
    document.getElementById("myModal14").style.display = "none";
    document.getElementById("myModal15").style.display = "none";
    document.getElementById("myModal16").style.display = "none";
    document.getElementById("myModal17").style.display = "none";
    document.getElementById("myModal18").style.display = "none";
    document.getElementById("myModal19").style.display = "none";
    document.getElementById("myModal20").style.display = "none";
    document.getElementById("myModal21").style.display = "none";
    document.getElementById("myModal22").style.display = "none";
    document.getElementById("myModal23").style.display = "none";
    document.getElementById("myModal24").style.display = "none";
    document.getElementById("myModal25").style.display = "none";
    document.getElementById("myModal26").style.display = "none";
    document.getElementById("myModal27").style.display = "none";
    document.getElementById("myModal28").style.display = "none";
    document.getElementById("myModal29").style.display = "none";
    document.getElementById("myModal30").style.display = "none";
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
btn[0].onclick = function () {
    modal[0].style.display = "block";
}

btn[1].onclick = function () {
    modal[1].style.display = "block";
}

btn[2].onclick = function () {
    modal[2].style.display = "block";
}

btn[3].onclick = function () {
    modal[3].style.display = "block";
}

btn[4].onclick = function () {
    modal[4].style.display = "block";
}

btn[5].onclick = function () {
    modal[5].style.display = "block";
}

btn[6].onclick = function () {
    modal[6].style.display = "block";
}

btn[7].onclick = function () {
    modal[7].style.display = "block";
}

btn[8].onclick = function () {
    modal[8].style.display = "block";
}

btn[9].onclick = function () {
    modal[9].style.display = "block";
}

btn[10].onclick = function () {
    modal[10].style.display = "block";
}

btn[11].onclick = function () {
    modal[11].style.display = "block";
}

btn[12].onclick = function () {
    modal[12].style.display = "block";
}

btn[13].onclick = function () {
    modal[13].style.display = "block";
}

btn[14].onclick = function () {
    modal[14].style.display = "block";
}

btn[15].onclick = function () {
    modal[15].style.display = "block";
}

btn[16].onclick = function () {
    modal[16].style.display = "block";
}

btn[17].onclick = function () {
    modal[17].style.display = "block";
}

btn[18].onclick = function () {
    modal[18].style.display = "block";
}

btn[19].onclick = function () {
    modal[19].style.display = "block";
}

btn[20].onclick = function () {
    modal[20].style.display = "block";
}

btn[21].onclick = function () {
    modal[21].style.display = "block";
}

btn[22].onclick = function () {
    modal[22].style.display = "block";
}

btn[23].onclick = function () {
    modal[23].style.display = "block";
}

btn[24].onclick = function () {
    modal[24].style.display = "block";
}

btn[25].onclick = function () {
    modal[25].style.display = "block";
}

btn[26].onclick = function () {
    modal[26].style.display = "block";
}

btn[27].onclick = function () {
    modal[27].style.display = "block";
}

btn[28].onclick = function () {
    modal[28].style.display = "block";
}

btn[29].onclick = function () {
    modal[29].style.display = "block";
}

btn[30].onclick = function () {
    modal[30].style.display = "block";
}

btn[31].onclick = function () {
    modal[31].style.display = "block";
}

btn[32].onclick = function () {
    modal[32].style.display = "block";
}

btn[33].onclick = function () {
    modal[33].style.display = "block";
}

btn[34].onclick = function () {
    modal[34].style.display = "block";
}

btn[35].onclick = function () {
    modal[35].style.display = "block";
}

btn[36].onclick = function () {
    modal[36].style.display = "block";
}

btn[37].onclick = function () {
    modal[37].style.display = "block";
}

btn[38].onclick = function () {
    modal[38].style.display = "block";
}

btn[39].onclick = function () {
    modal[39].style.display = "block";
}

btn[40].onclick = function () {
    modal[40].style.display = "block";
}

btn[41].onclick = function () {
    modal[41].style.display = "block";
}

btn[42].onclick = function () {
    modal[42].style.display = "block";
}

btn[43].onclick = function () {
    modal[43].style.display = "block";
}

btn[44].onclick = function () {
    modal[44].style.display = "block";
}

btn[45].onclick = function () {
    modal[45].style.display = "block";
}

btn[46].onclick = function () {
    modal[46].style.display = "block";
}

btn[47].onclick = function () {
    modal[47].style.display = "block";
}

btn[48].onclick = function () {
    modal[48].style.display = "block";
}

btn[49].onclick = function () {
    modal[49].style.display = "block";
}

btn[50].onclick = function () {
    modal[50].style.display = "block";
}

btn[51].onclick = function () {
    modal[51].style.display = "block";
}

btn[52].onclick = function () {
    modal[52].style.display = "block";
}

btn[53].onclick = function () {
    modal[53].style.display = "block";
}

btn[54].onclick = function () {
    modal[54].style.display = "block";
}

btn[55].onclick = function () {
    modal[55].style.display = "block";
}





