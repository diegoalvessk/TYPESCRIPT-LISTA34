function CompararFinal(string1: string, string2: string): boolean {
    if(string1.endsWith(string2)){
        return true
    }else{
        return false
    }
}

function SubstituirLetras(string: string): string {
    string = string.toLowerCase()
    let stringArray = string.split("")
    let arrayNovo: string[] = []
    for (let index = 0; index < stringArray.length; index++) {
        for (let index2 = 0; index2 < stringArray.length; index2++) {
            if(stringArray[index] == stringArray[index2] && index != index2){
                arrayNovo[index] = "}"
                arrayNovo[index2] = "}"
            } else if (arrayNovo[index] != "}"){
                arrayNovo[index] = "{"
            }
        }        
    }

    return arrayNovo.join("")
}

function CalcularQuadrados(n: number, b: number): string {
    let arrayNum: string[] = []
    let repeticoes: number = 0
    for (let index = 0; index <= n; index++) {
       let quadrado = index * index
        arrayNum.push(quadrado.toString())        
    }

    arrayNum.forEach(num => {
        for (let index = 0; index < num.length; index++) {
            if (num[index] == b.toString()) {
                repeticoes++
            }            
        }
    })

    return repeticoes.toString() + " (" + arrayNum + ")"
}