function SelectionSort(arr) {
    for(let i = 0; i < arr.length-1 ; i++) {
        let minValueIndex = i;

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[minValueIndex] > arr[j]) {
                minValueIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minValueIndex];
        arr[minValueIndex] = temp;
    }
}

let arr = [2,5,3,4,1];

console.log("=== 정렬 전 ===");
console.log(arr);

console.log("=== 정렬 후 ===");
SelectionSort(arr);
console.log(arr);