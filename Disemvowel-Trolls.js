function disemvowel(str) {
    const arrVowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    let accumulator = [];
    const result = str.split('').forEach(element => {
        if (!arrVowels.includes(element)) {
            accumulator.push(element);
        }
    })
    return accumulator.join("");
}