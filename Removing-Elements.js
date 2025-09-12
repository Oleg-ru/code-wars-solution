function removeEveryOther(arr){
    let resultArr = [];
    for(let i = 0; i < arr.length; i+=2) {
        resultArr.push(arr[i])
    }
    return resultArr;
}