// Decimal to Binary

function decToBinRecursive(num){
    if(num >= 1){
      return decToBinRecursive(Math.floor(num/2))+(num % 2);
    }
    return '';
  }

 console.log(decToBinRecursive(100)); 

 // Binary to Decimal

 function binToDecimalRecursive(num, i)
 {
    if(num === 0 || num === 1) {
        return Math.pow(2,i)*num
        
    }
    let digit = num%10;
    return (Math.pow(2,i) * digit) + binToDecimalRecursive(num/10, ++i);
    
    
 }

 console.log(binToDecimalRecursive(1011011, 0));