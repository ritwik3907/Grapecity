//Calculate Tip
function calculateTip() {
    var bill = document.getElementById("bill").value;
    var serviceTip = document.getElementById("serviceTip").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    //validate input
    if (bill <= 0 || serviceTip <= 0) {
        if (bill <= 0){
            alert("Please enter valid bill amount");
            return;
        } else {
            alert("Please enter valid the tip%"); 
            return;
        }
    }
    
    if (numOfPeople === "" || numOfPeople < 1) {
        alert("Please enter number of people starting from 1");
        return;
    } else {
        document.getElementById("each").style.display = "block";
    }
  
    //Calculate tip
    var total = (bill * serviceTip / 100) / numOfPeople;
    var full = bill / numOfPeople + total ; 
    
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("sal").innerHTML = full;
  
}
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("each").style.display = "block";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };