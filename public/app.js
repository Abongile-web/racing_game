//*****INFO BUTTON *****/
function info() {
    const information = document.querySelector(".information");
    information.style.display = 'flex';
}

//*****CLOSE INFO SECTION *****/
function close_btn() {
    document.querySelector(".information").style.display = "none";
}

//*****START BUTTON *****/
function start() {
    document.querySelector(".selection").style.display = "flex";

    document.querySelector(".begin").style.display = "none";
}

//*****GO BUTTON *****/
//check if user selected a car when go button is pressed
function go() {
    
    let valid = false;

    //store all inputs in the form in one variable
    var x = document.myform.color;

    //if an option is checked, make valid true. if not, keep it false
    for(let i=0; i<x.length; i++){
        if (x[i].checked){
            valid = true;
            break;
        }
    }

    //if valid is true, run the start_game function
    if (valid){
        start_game();
    }
    else { //ask user to select a car if valid is false
        document.querySelector(".selection_background span").innerHTML = "Please select a car."
        return false;
    }
}

//*****START RACING GAME***** 
function start_game(){

    //make car slection menu disappear
    document.querySelector(".selection").style.display = "none";

    //make start button disappear
    document.querySelector(".begin").style.display = "none";
    
    //assign every car a variable
    var g_car = document.getElementById("car1");
    var o_car = document.getElementById("car2");
    var r_car = document.getElementById("car3");
    var y_car = document.getElementById("car4");

    var interval = setInterval(function(){
        //assign left position of every car a variable
        var gcarLeftPos = g_car.offsetLeft; //offsetLeft is the left position
        var ocarLeftPos = o_car.offsetLeft;
        var rcarLeftPos = r_car.offsetLeft;
        var ycarLeftPos = y_car.offsetLeft;

        //give every left position of a car a random number to increment by
        g_car.style.left = gcarLeftPos + (Math.random()*Math.random() * 2)+ 'px';
        o_car.style.left = ocarLeftPos + (Math.random()*Math.random() * 2) + 'px';
        r_car.style.left = rcarLeftPos + (Math.random()*Math.random() * 2) + 'px';
        y_car.style.left = ycarLeftPos + (Math.random()*Math.random() * 2) + 'px';

        var device_width = document.documentElement.clientWidth;
        var finish_line = device_width - (device_width/100*10);

        //if car goes over finsih line then it must stop
        
        if (parseInt(g_car.style.left) >= finish_line ){
            g_car.style.left = finish_line;

            //display winner box
            document.querySelector(".winner").style.display = "flex";

            //display which car wins first
            document.querySelector(".reveal p span").innerHTML = "Green";
            //stop all cars
            clearInterval(interval);

            //Show if your car won/lost 
            yourChoice("green");
        }
        if (parseInt(o_car.style.left) > finish_line ){
            o_car.style.left = finish_line;

            document.querySelector(".winner").style.display = "flex";

            document.querySelector(".reveal p span").innerHTML = "Orange";

            clearInterval(interval);

            yourChoice("orange");
        }
        if (parseInt(r_car.style.left) > finish_line ){
            r_car.style.left = finish_line;

            document.querySelector(".winner").style.display = "flex";

            document.querySelector(".reveal p span").innerHTML = "Red";

            clearInterval(interval);

            yourChoice("red");
        }
        if (parseInt(y_car.style.left) > finish_line ){
            y_car.style.left = finish_line;

            document.querySelector(".winner").style.display = "flex";

            document.querySelector(".reveal p span").innerHTML = "Yellow";

            clearInterval(interval);

            yourChoice("yellow");
        }
    }, 0,01);
}



//Show if your car won or lost
function yourChoice(choice){
    var options = document.getElementsByName("color");
    var result = "";

    //checks which option you picked
    for (var i = 0; i < options.length; i++){
        if (options[i].checked) {
            result = options[i].value;
        }
    }

    //shows if you won or lost depending on your choice
    if (choice == result) {
        document.querySelector(".reveal h3").innerHTML = "You Won!!";
    } else {
        document.querySelector(".reveal h3").innerHTML = "You Lost";
    }
}

//Go to car slection menu
function replay_btn(){
    //reset car positions
    document.getElementById("car1").style.left = "0px";
    document.getElementById("car2").style.left = "0px";
    document.getElementById("car3").style.left = "0px";
    document.getElementById("car4").style.left = "0px";

    //close winner section
    document.querySelector(".winner").style.display = "none";

    //display car selection section
    document.querySelector(".selection").style.display = "flex";

    //remove "please select car span"
    document.querySelector(".selection_background span").style.display = "none";
}

//*****MAIN MENU *****/
//jump straight to main menu
function menu_btn(){
    //close winner section
    document.querySelector(".winner").style.display = "none";

    //reset car positions
    document.getElementById("car1").style.left = "0px";
    document.getElementById("car2").style.left = "0px";
    document.getElementById("car3").style.left = "0px";
    document.getElementById("car4").style.left = "0px";

    //display Start and Info button
    document.querySelector(".begin").style.display = "flex";

    //remove "please select car span"
    document.querySelector(".selection_background span").style.display = "none";
}