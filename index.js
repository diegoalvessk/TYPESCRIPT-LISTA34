function CompararFinal(string1, string2) {
    if (string1.endsWith(string2)) {
        return true;
    }
    else {
        return false;
    }
}
function SubstituirLetras(string) {
    string = string.toLowerCase();
    var stringArray = string.split("");
    var arrayNovo = [];
    for (var index = 0; index < stringArray.length; index++) {
        for (var index2 = 0; index2 < stringArray.length; index2++) {
            if (stringArray[index] == stringArray[index2] && index != index2) {
                arrayNovo[index] = "}";
                arrayNovo[index2] = "}";
            }
            else if (arrayNovo[index] != "}") {
                arrayNovo[index] = "{";
            }
        }
    }
    return arrayNovo.join("");
}
function CalcularQuadrados(n, b) {
    var arrayNum = [];
    var repeticoes = 0;
    for (var index = 0; index <= n; index++) {
        var quadrado = index * index;
        arrayNum.push(quadrado.toString());
    }
    arrayNum.forEach(function (num) {
        for (var index = 0; index < num.length; index++) {
            if (num[index] == b.toString()) {
                repeticoes++;
            }
        }
    });
    return repeticoes.toString() + " (" + arrayNum + ")";
}
