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
//Third
function sum_odd_5000 () {
    var sum = 0;
    for (var i = 0; i < 5001; i++) {
        if (i % 2 !== 0);
            sum += i;
        }
    return sum;
}
//Fourth
function interArr (arr) {
    var sum = 0;
    for (var i = 0; i <arr.length; i++) {
        sum = sum + arr [i];
    }
    return sum;
}
//Fifth
function findMax (arr) {
    var max = arr [0];
    for (var i = 1; i <arr.length; i++) {
        if (max < arr[i]){
            max = arr [i]
        }
    }
    return max;
}
//Sixth
function findAvg (arr) {
    var sum = 0;
    for (var i = 0; i <arr.length; i++) {
        sum += arr [i]
    }
    return sum/arr.length;
}
//Seventh
function oddnumbers () {
    var array = [];
    for (var i = 1; i < 50; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
}
//Eighth
function greaterY (arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > Y) {
            count ++;
        }
    }
    return count;
}
//Ninth
function squareVal (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
//Tenth
function noNeg (arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr;
}
//Eleventh
function maxMinAvg (arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max=arr[i];
        }
        if (arr[i] < min) {
            min= arr[i]
        }
        sum = sum + arr[i];
    }
    var avg= sum/ arr.length;
    var arrnew = [max, min, avg];
    return arrnew;   
}
//Twelveth
function swap (arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length-1] = temp;
    return arr;
}
//Thirteenth
function numToStr(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr; 
}