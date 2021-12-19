// Here where I found how to show a text when a user click on the images.
// https://stackoverflow.com/questions/20147442/using-onclick-on-images-to-display-text   
// I've changed the name of the funtion for each different photo
// the var div and var text are the same , and the i statement as well, is just goign to change the text.
function changeTextOne(value) {
    var div = document.getElementById("textOne");
    var text = "";

    if (value == 1) text += " Dancers: Kevin, Joe, Jeff, Rynan, Pat, Roy, Charlie";
	

    div.innerHTML = text;
}

//1-the attribute I am changing is the src attribute on the img tag
function changeTextTwo(value) {
    var div = document.getElementById("textTwo");
    var text = "";

    if (value == 1) text += " Dancers: Mikey, Jonathan, Jason, Jed, Noah, Sean, Lawrence, Victor, Anthony, Jason, Ralph, Mike, Tony";
    

    div.innerHTML = text;
}

function changeTextThree(value) {
    var div = document.getElementById("textThree");
    var text = "";

    if (value == 1) text += " Dancers: Laurent & Larry Bourgeois";
    

    div.innerHTML = text;
}

function changeTextFour(value) {
    var div = document.getElementById("textFour");
    var text = "";

    if (value == 1) text += "Dancers: Fernando, Tatiana, Jessica , Simona, Fabio, Yuri, Rodrigo, Philip, Marco, Michelle, Fabiana, Sara";
    

    div.innerHTML = text;
}

function changeTextFive(value) {
    var div = document.getElementById("textFive");
    var text = "";

    if (value == 1) text += "Dancers: Adolfo, Tania, Fabrizio, Giulia, Marco, Edyta";
    

    div.innerHTML = text;
}

function changeTextSix(value) {
    var div = document.getElementById("textSix");
    var text = "";

    if (value == 1) text += "Dancers: Gigi & Gigi, Fabio, Marco, Lorenzo, Leonardo, Riccardo";
    

    div.innerHTML = text;
}