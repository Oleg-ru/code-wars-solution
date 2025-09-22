function getCount(str) {
    const dictionaryVowels = ['a','e','i','o','u'];
    let count = 0;
    str.split("").forEach(ch => {
        if (dictionaryVowels.includes(ch))
            count++;
    });
    return count;
}