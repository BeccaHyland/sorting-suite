class Sorter {
  constructor() {
  }

  bubbleSortAsc(array) {
    let x;
    for (x = 0; x < array.length; x++){
      let i;
      for (i = 0; i < array.length; i++){
        if (array[i] > array[i+1]){
          let temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
        }
      }
    }
    return array
  };
}

module.exports = Sorter;
