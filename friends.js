var array = [2, 10, 33, 55, 60, 61, 75, 80];
function numberAbove30(banana) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > 30) {
            console.log(array[i])
        }
    }
}
numberAbove30(array)