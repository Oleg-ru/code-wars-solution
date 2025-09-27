function minMax(arr){
    return [arr.sort((a, b) => {return a - b})[0],arr.sort((a, b) => {return b - a})[0]];
}