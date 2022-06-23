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
        if(this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUP(parentIndex);
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getLeftIndex(index);
        if(this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if(this.heap[rightIndex] < this.heap[index]) {
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

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
h.peak();
h.size();