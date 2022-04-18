//Local storage


//IS THIS AN ARRAY? 

var carList = [
    "ACCORD",
    "CRV",
    "HRV",
    "PILOT"
];

//converts array into string is array an object?
var stringCars = JSON.stringify(carList);
localStorage.setItem("carList", stringCars);
//local storage method needs and item. were setting the item to be carList
// followed by the value to be stored stringCars


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

//made array variable of values. 
//key is carList
//in order to retrieve data from local storage
//we use get items method in displayCars function
//we must include key name of the OBJECT in local storage in order to return corresponding value
// once the value has been retrieved
//we muct convert string back into an object so it can be used to display the list in the application
// json. parse method
//converted car array and can loop through its elemnts and display list on page