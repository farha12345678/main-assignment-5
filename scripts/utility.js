function mainButton(){
    const buttonString = ['A1','A2','A3','A4','B1','B2','B3','B4' ];
 
    

const randomNumber = Math.random()*7
   const index = Math.round(randomNumber)    
   const button = buttonString[index]



   return button
   
}



