Array.prototype.bubbleSort = function () {
   // console.log(this);
   for(let j = 0; j < this.length - 1; j ++) {

       for(let i = 0; i < this.length -1 - j; i++) {
        // console.log(this[i], this[i + 1]);
        if(this[i] > this[i + 1]) {
            const temp = this[i];
            this[i] = this[i + 1];
            this[i + 1] = temp;
        }
       }
   }
};

const arr = [5,4,3,2,1];
arr.bubbleSort();
console.log('code runner')