function InsertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let compare = arr[i];
        let j;
        for(let j = i-1; j >= 0; j--) {
            if(compare < arr[j]) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = compare;
    }
}

let arr = [5,2,3,1,4];
InsertionSort(arr);
console.log(arr);