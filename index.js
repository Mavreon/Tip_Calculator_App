'use strict';
const billInput = document.querySelector('#bill-input');
const billInputDiv = document.querySelector('.bill-input');
const percentButtons = document.querySelectorAll('.percent-btn');
const customInput = document.querySelector('#custom-percent');
const peopleInput = document.querySelector('#people-input');
const peopleInputDiv = document.querySelector('.people-input');
const errorText = document.querySelector('.error-text'); 
const totalAmountText = document.querySelector('.total-amount');
const tipAmountText = document.querySelector('.tip-amount');
const resetButton = document.querySelector('.reset-btn');
// console.log(billInput);
// console.log(percentButtons);
// console.log(customInput);
// console.log(peopleInput);
// console.log(totalAmountText);
// console.log(tipAmountText);
// console.log(resetButton);
// console.log(errorText);

let selectedPercent = 0;

billInput.addEventListener('input', ()=>{
    let input = billInput.value;
    //console.log(input);
    billInputDiv.style.boxShadow = 'none';
    //Call Calculate Function...
    Calculate();
})

customInput.addEventListener('input', ()=>{
    let input = customInput.value;
    console.log(input);
    customInput.style.boxShadow = 'none';
    selectedPercent = Number(customInput.value)/100;
    console.log(selectedPercent);
    //Call Calculate Function...
    Calculate();

})

peopleInput.addEventListener('input', ()=>{
    let input = peopleInput.value;
    //console.log(input);
    peopleInputDiv.style.boxShadow = 'none';
    errorText.style.opacity = '0';
    //Call Calculate Function...
    Calculate();
})

percentButtons.forEach(percentButton => {
    
    percentButton.addEventListener('click', ()=>{
        percentButtons.forEach(percentButton => {
            percentButton.style.backgroundColor = 'hsl(183, 100%, 15%)';
            percentButton.style.color = 'white';
        });
        customInput.style.boxShadow = 'none';
        customInput.value = "";
        let percent = percentButton.textContent.replace('%', '');
        percentButton.style.backgroundColor = 'hsl(185, 41%, 84%)'
        percentButton.style.color = 'hsl(183, 100%, 15%)';
        selectedPercent = Number(percent)/100;
        //console.log(selectedPercent);
        //Call Calculate Function...
        Calculate();
    })
});

resetButton.addEventListener('click', ()=>{
    //console.log("Reset Button Clicked");
    billInput.value = "";
    custumInput.value = "";
    totalAmountText = "";
    tipAmountText = "";
})

function Calculate()
{
    if(billInput.value != "" && peopleInput.value != "" && (customInput.value != "" || selectedPercent != 0))
    {
        let billPerPerson = Number(billInput.value/peopleInput.value);
        billPerPerson = billPerPerson.toFixed(2);

        let tipAmount = billPerPerson * selectedPercent;
        tipAmount = tipAmount.toFixed(2);

        let totalBillPerPerson = Number(billPerPerson) + Number(tipAmount);
        totalBillPerPerson = totalBillPerPerson.toFixed(2);

        totalAmountText.textContent = `$${totalBillPerPerson}`;
        tipAmountText.textContent = `$${tipAmount}`;
    }
    else{
        //console.log("No value in one of the input fields");
        if(billInput.value == "")
        {
            billInputDiv.style.boxShadow = 'inset 0 0 0 2px red';
        }
        if(peopleInput.value == "")
        {
            peopleInputDiv.style.boxShadow = 'inset 0 0 0 2px red';
            errorText.style.opacity = '1';
        }
        if(customInput.value == "" && selectedPercent == 0)
        {
            customInput.style.boxShadow = 'inset 0 0 0 2px red';
        }
    }
}