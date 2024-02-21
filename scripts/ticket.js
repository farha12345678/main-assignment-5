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
for (const seat of selectedSeat) {
    seat.addEventListener('click', function (e) {
        count = count + 1;
        document.getElementById('seat-count').innerText = count




        // receipt sec
        const seatNumber = e.target.innerText
        e.target.style.backgroundColor = 'green'
        e.target.style.color = 'white'
        const selectedContainer = document.getElementById('slected-container')
        const tr = document.createElement('tr');


        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        td1.innerText = seatNumber;
        td2.innerText = 'Economy';
        td3.innerText = '550';
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        selectedContainer.appendChild(tr);
        const totalPrice = document.getElementById('total-price').innerText
        const convertedTotal = parseInt(totalPrice);

        document.getElementById('total-price').innerText = convertedTotal + parseInt('550')
        const sum = convertedTotal + parseInt('550');
        document.getElementById('total-price').innerText = sum;




        const grandPrice = document.getElementById('gran-total').innerText

        const convertedGrand = parseInt(grandPrice)
        document.getElementById('gran-total').innerText = convertedGrand + parseInt('550');

const currentSeatElement = document.getElementById('left-btn');
const currentSeatText = currentSeatElement.innerText;
const currentSeat = parseInt(currentSeatText)
console.log(currentSeat);
const currentNewSeat = currentSeat - 1 ;
currentSeatElement.innerText = currentNewSeat;

        


couponBtn();




    })
}





// apply coupon

function couponBtn(status){
   const  totalCost = document.getElementById('gran-total').innerText
    if(status === undefined){
        

    document.getElementById('gran-total').innerText = totalCost;
    } else{
        const couponCode = document.getElementById('coupon-text').value
        if (couponCode == 'NEW15'){
const discount = totalCost * 0.15;
document.getElementById('gran-total').innerText = totalCost-discount

        } else if ( couponCode == 'COUPLE20'){
            const discount = totalCost * 0.2;
document.getElementById('gran-total').innerText = totalCost-discount

        }
         else {
            alert('please enter valid code');
        }
        
    } 
}







''










function buttonClick() {
    allButton()

}