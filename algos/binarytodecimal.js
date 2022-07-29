// Decimal to Binary

function decToBinRecursive(num){
    if(num >= 1){
      return decToBinRecursive(Math.floor(num/2))+(num % 2);
    }
    return '';
  }

 console.log(decToBinRecursive(80)); 

 // Binary to Decimal

 function binToDecimalRecursive(num, i){
    if(num === 0 || num === 1) {
        return Math.pow(2,i)*num;
        
    }
 
    
    return (Math.pow(2,i) * (num % 10)) + binToDecimalRecursive(num/10, i+1);
    
    
 }

 console.log(binToDecimalRecursive(1000000, 0));