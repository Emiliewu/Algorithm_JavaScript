Array.prototype.binarySearch = function (item) {
    let low = 0;
    let high = this.length - 1;
    while(low <= high) {
        const mid = Math.floor((low + hight) / 2);
        const element = this[mid];
        if(element < itme) {
            low = mid + 1;
        } else if(element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(3);