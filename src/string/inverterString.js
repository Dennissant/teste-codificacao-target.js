function inverterString(str) {
    let novaStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaStr += str[i];
    }
    return novaStr;
}

module.exports = inverterString;
