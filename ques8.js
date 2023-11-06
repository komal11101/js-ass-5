const arr = [66, 33, 11, 44, 66, 22, 77];

function minmax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

console.log(minmax(arr));
