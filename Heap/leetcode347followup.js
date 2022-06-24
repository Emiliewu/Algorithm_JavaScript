//Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// use minHeap
class MinHeap {
    constructor(){
        this.heap = [];
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    getParentIndex(i) {
        // return Math.floor((i - 1) /2);
        return (i - 1) >> 1;
    }

    getLeftIndex(i) {
        // return Math.floor((i - 1) /2);
        return i * 2 + 1;
    }

    getRightIndex(i) {
        // return Math.floor((i - 1) /2);
        return i * 2 + 2;
    }

    shiftUP(index) {
        if(index === 0) { return; }
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
            this.swap(parentIndex, index);
            this.shiftUP(parentIndex);
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if(this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUP(this.heap.length -1);
    }

    //remove heap top element
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    // get top element
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }

}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    const h = new MinHeap();
    map.forEach((value, key) => {
        h.insert({value, key});
        if(h.size() > k) {
            h.pop();
        }
    })
    return h.heap.map(a => a.key);
};
