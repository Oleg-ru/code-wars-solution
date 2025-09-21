function accum(s) {
    let resultStr = "";
    for (let i = 0; i < s.length; i++) {
        resultStr += getMultiChar(s[i], i) + `${i === s.length - 1 ? "" : "-"}`;
    }
    return resultStr;
}

function getMultiChar(char, num)  {
    let resultString = `${char.toUpperCase()}`;
    for (let i = 0; i < num; i++) {
        resultString += char.toLowerCase();
    }
    return resultString;
}