function firstNonRepeated(str) {
    var sArray = [];
    sArray = str.split("");
    var finalArr = [];
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var s = str_1[_i];
        for (var _a = 0, sArray_1 = sArray; _a < sArray_1.length; _a++) {
            var c = sArray_1[_a];
            if (s === c) {
                count += 1;
            }
        }
        if (count <= 1) {
            finalArr.push(s);
        }
        count = 0;
    }
    if (finalArr.length > 0)
        return finalArr[0];
    return "";
}
console.log(firstNonRepeated("aabcc"));
