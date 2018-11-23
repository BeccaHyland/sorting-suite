class BubbleSort {
  constructor(unsortedArray) {
    this.uA = unsortedArray
  }

  sortArray() {
    let x;
    for (x = 0; x < this.uA.length; x++){
      let i;
      for (i = 0; i < this.uA.length; i++){
        if (this.uA[i] > this.uA[i+1]){
          let temp = this.uA[i];
          this.uA[i] = this.uA[i+1];
          this.uA[i+1] = temp;
        }
      }
    };
    return this.uA;
  }
}

module.exports = BubbleSort;
