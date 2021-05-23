//First
function get_array () {
    var arr = [];
    for (var i = 1; i <256; i++){
        arr.push(i);
    }
    return arr;
}
//Second
function sum_even_numbers () {
    var sum = 0;
    for (var i = 0; i <1001; i++) {
        if (i % 2 === 0) {
        sum += i;
        }
    }
    return sum;
}