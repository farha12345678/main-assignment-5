function allButton() {
    const button = mainButton()
    //  console.log(button)
    document.getElementById('btn-click').addEventListener('click', function (event) {
        console.log(event.target.innerText)
    })
    addColor(button)
    

}

// seat selection
const selectedSeat = document.getElementsByClassName('button')
let count = 0;
for (const seat of  selectedSeat){
    seat.addEventListener('click',function(e){
count = count + 1;
document.getElementById('seat-count').innerText = count



// const ticketName = e.target.parentNode.childNodes[1].innerText;
// const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
// receipt sec
const seatNumber = e.target.innerText
// 
const selectedContainer = document.getElementById('selected-container')
const td = document.createElement('td');
const seatName = document.createElement('td')
seatName.innerText = seatNumber;
const seatClass = document.createElement('td');
seatClass.innerText = 'Economy';
const seatPrice = document.createElement('td');
seatPrice.innerText = '550';
td.appendChild(seatName);
td.appendChild(seatClass);console.log(seatNumber)
td.appendChild(seatPrice);
selectedContainer.appendChild(td);


const totalPrice = document.getElementById('total-price').innerText

const convertedPrice = parseInt(totalPrice)
document.getElementById('total-price').innerText = convertedPrice + parseInt('550')
const grandPrice = document.getElementById('gran-total').innerText

const convertedGrand = parseInt(grandPrice)
document.getElementById('gran-total').innerText = convertedGrand  + parseInt('550')


    })
}

// apply coupon

function applyCoupon(){
    const couponInput = document.getElementById('coupon-sec').value
    if (couponInput === "NEW15") {
        
        totalPrice *= 0.15; 
      } else if (couponInput === "Couple20") 
      {
         totalPrice -= 0.2; 
      } else {
        
        alert("Invalid coupon code");
      }


}
// if (couponInput === NEW15){
//  grandPrice = totalPrice - 15%
// } 
// else if (couponInput === Couple20){
//    grandPrice = totalPrice - 20% 
// }

// }



// function setInnerText(id,value){
// document.getElementById(id).innerText=value
// }


function buttonClick() {
    allButton()

}