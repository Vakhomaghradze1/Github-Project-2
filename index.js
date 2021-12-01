// Variables //

const bill = document.querySelector("#priceInput");

const fivePercentage = document.querySelector("#five");
const tenPercentage = document.querySelector("#ten");
const fifteenPercentage = document.querySelector("#fifteen");
const twentyfivePercentage = document.querySelector("#twentyfive");
const fiftyPercentage = document.querySelector("#fifty");
const costumPercentage = document.querySelector("#costum-percentage-input");

const personNumber = document.querySelector("#personNumber");

const tipPerPerson = document.querySelector("#tipPerPerson");
const totalPerPerson = document.querySelector("#totalPerPerson");

const inputError = document.querySelector(".error");
const resetBtn = document.querySelector(".reset");

// costume percentage values //
let trackCostumPercentageValue;
let zeroPercentageValue;

// values after clicking on btn 
let fivePercentageSum;
let tenPercentageSum;
let fifteenPercentageSum;
let twentyfivePercentageSum;
let fiftyPercentageSum;
let costumPercentageSum;


// functionality  ----------------------------------  //

fivePercentage.addEventListener('click', () => {

    if (bill.value == 0){
        alert("Enter The Bill");
    }

    else if (bill.value > 0){

        if (personNumber.value == 0){ 

            inputError.style.opacity = 1;
            personNumber.style.borderColor = "rgb(245, 110, 110)";  
        }

        else if (personNumber.value > 0){

            inputError.style.opacity = 0;
            personNumber.style.borderColor = "hsl(189, 41%, 97%)";

            fivePercentageSum = (Number(Number(bill.value) + Number((bill.value * 5)/100)) / Number(personNumber.value)).toFixed(2);
            
            tipPerPerson.innerText = '$' + (Number((bill.value * 5)/100) / Number(personNumber.value)).toFixed(2);
            totalPerPerson.innerText = '$' + fivePercentageSum;
        }

    }

});


tenPercentage.addEventListener('click', () => {

    if (bill.value == 0){
        alert("Enter The Bill");
    }

    else if (bill.value > 0){

        if (personNumber.value == 0){

            inputError.style.opacity = 1;
            personNumber.style.borderColor = "rgb(245, 110, 110)"; 
        }

        else if (personNumber.value > 0){

            inputError.style.opacity = 0;
            personNumber.style.borderColor = "hsl(189, 41%, 97%)";

            tenPercentageSum = (Number(Number(bill.value) + Number((bill.value * 10)/100)) / Number(personNumber.value)).toFixed(2);
            
            tipPerPerson.innerText = '$' + (Number((bill.value * 10)/100) / Number(personNumber.value)).toFixed(2);
            totalPerPerson.innerText = '$' + tenPercentageSum;
        }

    }

});



fifteenPercentage.addEventListener('click', () => {

    if (bill.value == 0){
        alert("Enter The Bill");
    }

    else if (bill.value > 0){

        if (personNumber.value == 0){

            inputError.style.opacity = 1;
            personNumber.style.borderColor = "rgb(245, 110, 110)";
        }

        else if (personNumber.value > 0){

            inputError.style.opacity = 0;
            personNumber.style.borderColor = "hsl(189, 41%, 97%)";

            fifteenPercentageSum = (Number(Number(bill.value) + Number((bill.value * 15)/100)) / Number(personNumber.value)).toFixed(2);
            
            tipPerPerson.innerText = '$' + (Number((bill.value * 15)/100) / Number(personNumber.value)).toFixed(2);
            totalPerPerson.innerText = '$' + fifteenPercentageSum;
        }

    }

});



twentyfivePercentage.addEventListener('click', () => {

    if (bill.value == 0){
        alert("Enter The Bill");
    }

    else if (bill.value > 0){

        if (personNumber.value == 0){
            inputError.style.opacity = 1;
            personNumber.style.borderColor = "rgb(245, 110, 110)";
        }

        else if (personNumber.value > 0){

            inputError.style.opacity = 0;
            personNumber.style.borderColor = "hsl(189, 41%, 97%)";

            twentyfivePercentageSum = (Number(Number(bill.value) + Number((bill.value * 25)/100)) / Number(personNumber.value)).toFixed(2);
            
            tipPerPerson.innerText = '$' + (Number((bill.value * 25)/100) / Number(personNumber.value)).toFixed(2);
            totalPerPerson.innerText = '$' + twentyfivePercentageSum;
        }

    }

});



fiftyPercentage.addEventListener('click', () => {

    if (bill.value == 0){
        alert("Enter The Bill");
    }

    else if (bill.value > 0){

        if (personNumber.value == 0){
            
            inputError.style.opacity = 1;
            personNumber.style.borderColor = "rgb(245, 110, 110)";
        }

        else if (personNumber.value > 0){

            inputError.style.opacity = 0;
            personNumber.style.borderColor = "hsl(189, 41%, 97%)";

            fiftyPercentageSum = (Number(Number(bill.value) + Number((bill.value * 50)/100)) / Number(personNumber.value)).toFixed(2);
            
            tipPerPerson.innerText = '$' + (Number((bill.value * 50)/100) / Number(personNumber.value)).toFixed(2);
            totalPerPerson.innerText = '$' + fiftyPercentageSum;
        }

    }

});



costumPercentage.addEventListener('click', () => {

    const costumPercentageFunction = () => {

        if (bill.value == 0){
            alert("Enter The Bill");
        }

        else if (bill.value > 0){
            
            if (personNumber.value == 0){

                inputError.style.opacity = 1;
                personNumber.style.borderColor = "rgb(245, 110, 110)";
            }

            else if (personNumber.value > 0){

                inputError.style.opacity = 0;
                personNumber.style.borderColor = "hsl(189, 41%, 97%)";
                
                costumPercentage.oninput = () => {

                    if (costumPercentage.value == 0){
                        tipPerPerson.innerText = '$0.00'
                        totalPerPerson.innerText = '$' + Number(bill.value / personNumber.value);
                    }
                
                    else if (costumPercentage.value > 0){
                        trackCostumPercentageValue = costumPercentage.value;
                        
                        costumPercentageSum = (Number(Number(bill.value) + Number((bill.value * trackCostumPercentageValue)/100)) / Number(personNumber.value)).toFixed(2);
                        tipPerPerson.innerText = '$' + (Number((bill.value * trackCostumPercentageValue)/100) / Number(personNumber.value)).toFixed(2);
                        totalPerPerson.innerText = '$' + costumPercentageSum;
                    }

                }

            }

        }

    }

    costumPercentageFunction();

});



resetBtn.addEventListener('click', () => {

    bill.value = "";
    costumPercentage.value = "";
    personNumber.value = "";

    tipPerPerson.innerText = '$0.00'
    totalPerPerson.innerText = '$0.00';

});