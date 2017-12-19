//console.log("linked");

// document.getElementById("sumDigits").onsubmit = function(event){
//     event.preventDefault();
//     console.log("form submitted");
// }
document.getElementById("submit").onclick = function(){
    //take the numbers from the text field and display then in our display area 
    var input = document.getElementById("input").value;
    //console.log(input);
    document.getElementById("display").innerHTML += input;
    document.getElementById("input").value = "";
}
document.getElementById("addDigits").onclick = function(){
    //console.log("Add Digits clicked");
    //get the sum of the digits from the display field. 
    var display = document.getElementById("display").innerHTML;
    //console.log(display);
    var runningTotal = 0;
    for(var i=0; i < display.length; i++){
        //console.log(display[i]);
        runningTotal += parseInt(display[i]);
        console.log(runningTotal);
        document.getElementById("display").innerHTML = runningTotal;
        
    }
}