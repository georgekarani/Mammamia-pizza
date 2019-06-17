
//jQuery functions and lazy load///////////////////////////////

// define variables/////
function getReceipt() {
  var text1 = "<h3>Your Order:</h3>";
  var text2 = "";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1+selectedSize+"<br>";
    }
  }
  if (selectedSize === "Small Pizza") {
    sizeTotal = 200;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 500;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 800;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 1000;
  }
  text2 = text2+":ksh"+sizeTotal+"<br>";
  runningTotal = sizeTotal;
  console.log(selectedSize+" = ksh"+sizeTotal+".00");
  getTotals(runningTotal,text1,text2);

};  

// running total for meat + cheese + crust + sauce + veggies toppings ///
function getTotals(runningTotal,text1, text2) {


/// Meat!
  var meatTotal = 0;
  var selectedMeat = [];
  var i = 0;
  var meatArray = document.getElementsByClassName("meats");
  for (var j = 0;  j < meatArray.length; j++) {
    
    if (meatArray[j].checked && i == 0) {
      selectedMeat.push(meatArray[j].value);
      console.log("selected meat item: ("+meatArray[j].value+")");
      text1 = text1+meatArray[j].value+"<br>";
      text2 = text2+":ksh0"+"<br>";
      i++;
      j++;
}
     if (meatArray[j].checked) {
      selectedMeat.push(meatArray[j].value);
      console.log("selected meat item: ("+meatArray[j].value+")");
      text1 = text1+meatArray[j].value+"<br>";
      text2 = text2+"ksh1"+"<br>";
    }
  }
  var meatCount = selectedMeat.length;
  if (meatCount > 100) {
    meatTotal = (meatCount - 100);
  } else {
    meatTotal = 0;
  }
  runningTotal = (runningTotal + meatTotal);
  console.log("total selected meat items: "+meatCount);
  console.log(meatCount+" meat - 1 free meat = "+"ksh"+meatTotal+".00");
  console.log("subtotal: ksh"+runningTotal+".00");

/// Cheese!
  var cheeseTotal = 0;
  var cheeseArray = document.getElementsByClassName("cheese");
  for (var c = 0; c < cheeseArray.length; c++) {
    if (cheeseArray[c].checked) {
      var selectedCheese = cheeseArray[c].value;
      text1 = text1+selectedCheese+"<br>";
    }
  }
  if (selectedCheese === "Extra Cheese") {
    cheeseTotal = 30;
  } else {
    cheeseTotal = 0;
  }
  text2 = text2+"ksh"+cheeseTotal+"<br>";
  runningTotal = (runningTotal + cheeseTotal);
  console.log(selectedCheese+" = ksh"+cheeseTotal+".00");
  console.log("subtotal: ksh"+runningTotal+".00");

/// Crust!
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName("crust");
  for (var j = 0; j < crustArray.length; j++) {
    if (crustArray[j].checked) {
      var selectedCrust = crustArray[j].value;
      text1 = text1+selectedCrust+"<br>";
    }
  }
  if (selectedCrust === "Cheese Stuffed Crust") {
    crustTotal = 50;
  } else {
    crustTotal = 0;
  }
  text2 = text2+"ksh"+crustTotal+"<br>";
  runningTotal = (runningTotal + crustTotal);
  console.log(selectedCrust+" = ksh"+crustTotal+".00");
  console.log("subtotal: ksh"+runningTotal+".00");


// Sauce!
  var sauceArray = document.getElementsByClassName("sauce");
  for (var i = 0; i < sauceArray.length; i++) {
    if (sauceArray[i].checked) {
      selectedSauce = sauceArray[i].value;  
    }
  }
  text2 = text2+"ksh0"+"<br>";
  text1 = text1+selectedSauce+"<br>";
  console.log("selected sauce: "+selectedSauce);

// Veggies!
  var veggieTotal = 0;
  var selectedVeggie = [];
  var i = 0;
  var veggieArray = document.getElementsByClassName("veggie");
    for (var j = 0;  j < veggieArray.length; j++) {
    
    if (veggieArray[j].checked && i == 0) {
      selectedVeggie.push(veggieArray[j].value);
      console.log("selected veggies: ("+veggieArray[j].value+")");
      text1 = text1+veggieArray[j].value+"<br>";
      text2 = text2+"ksh0"+"<br>";
      i++;
      j++;
}
     if (veggieArray[j].checked) {
      selectedVeggie.push(veggieArray[j].value);
      console.log("selected veggies: ("+veggieArray[j].value+")");
      text1 = text1+veggieArray[j].value+"<br>";
      text2 = text2+"ksh1"+"<br>";
    }
  }
  var veggieCount = selectedVeggie.length;
  if (veggieCount > 10) {
    veggieTotal = (veggieCount - 1);
  } else {
    veggieTotal = 0;
  }
  runningTotal = (runningTotal + veggieTotal);
  console.log("total selected veggies: "+veggieCount);
  console.log(veggieCount+" veggie - 1 free veggie = "+"ksh"+veggieTotal+".00");
  console.log("subtotal: ksh"+runningTotal+".00");
  console.log("veggie text1: "+text1);
  document.getElementById("showText").innerHTML=text1;
  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>ksh"+runningTotal+".00"+"</strong></h3>"+text2;

};

// cancel button
// When "Cancel It" button is clicked, form is reset

var cancelButton = document.getElementById ('cancel');

cancelButton.addEventListener('click',
    function reset() {
        $('input[type="radio"]').each(function(){
            this.checked = false;
        });
        $('input[type="checkbox"]').each(function(){
            this.checked = false;
        });
         $('getReceipt').each(function(){
            this.checked = false;
        });
            document.getElementById('preview').innerHTML = "order canceled";
    });





























