function isValidWalk(walk) {
    if (walk.length > 10 || walk.length < 10) {
        return false;
    }
    let cordXY = [0, 0];

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': {
                cordXY[0]+=1;
                break;
            }
            case 'e': {
                cordXY[1]+=1;
                break;
            }
            case 's': {
                cordXY[0]-=1;
                break;
            }
            case 'w': {
                cordXY[1]-=1;
                break;
            }
        }
    }
    return cordXY[0] === 0 && cordXY[1] === 0;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // false
console.log(isValidWalk(['w'])) // false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // false