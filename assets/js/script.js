//Local storage


//IS THIS AN ARRAY? 

var carList = [
    "ACCORD",
    "CRV",
    "HRV",
    "PILOT"
];

var stringCars = JSON.stringify(carList);
localStorage.setItem("carList", stringCars);


//DIPLAYS THE carList
var displayCars = function() {
    var text = "";
// Retrieves the carList from localstorage
var cars = localStorage.getItem("carList");
// Parse the string into an object 
var carsArray = JSON.parse(cars);
for (var i=0; i < carsArray.length; i++) {
text += carList[i] + "<br>";
};

document.getElementById("list"). innerHTML = text;
};

displayCars();