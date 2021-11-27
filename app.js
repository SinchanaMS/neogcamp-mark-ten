var billAmount = document.querySelector("#bill-amount")
var cashGiven = document.querySelector("#cash-given")
var checkButton = document.querySelector("#check-button")
var notesToGive = document.querySelectorAll(".no-of-notes")
var denominationsAvailable = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", function clickHandler(){
    if (billAmount.value>0){
        if (parseInt(cashGiven.value)>=parseInt(billAmount.value)){
            var changeToBeReturned = cashGiven.value - billAmount.value
            
            calculateChange(changeToBeReturned)


        }else{
            alert("Cash amount cannot be less than the bill amount!!")
        }
    } else {
        alert("Bill amount has to be greater than 0.")
    }

    
})

function calculateChange(changeToBeReturned){
for (i=0; i<denominationsAvailable.length; i++){
    var noOfNotes = Math.trunc(changeToBeReturned/denominationsAvailable[i])
    console.log(noOfNotes)

    changeToBeReturned = changeToBeReturned%denominationsAvailable[i]

    notesToGive[i].innerText = noOfNotes
}
}


