
export function consoleLog(param) {
    console.log(param)
}

export function addListOfNumbers(numbers) {
    let sum = 0;

    for(let num of numbers) {
        if(typeof(num) != "number") throw new Error(`Invalid Parameter: On "function: add". Element ${num} is not a number`)
        sum += num
    }
    return sum
}

export function findRandomNumberInRange(minNum, maxNum) {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum
    if(randomNumber <minNum || randomNumber > maxNum) throw new Error("Congratulations! You broke my function lmao...")
    return randomNumber
}

export function findRandomColor(transparency = Math.random()) {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${transparency})`
}

export function reverseString(str) {
    if(typeof(str) !== "string") throw new Error(`Input: (${str}) is not a string`)
    str = [...str]
    let newStr = ""
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

export function consoleError(message) {
    console.error(message)
}


export function findRandomLetter(type = "any",amount = 1, letRepeat = true) {
    let letters
    let randomLetter
    switch(type) {
        case "lower":
            letters = "abcdefghijklmnopqrstuvwxyz"
        break
        case "upper":
            letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        break
        case "any":
            letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if(amount === 1) {
         randomLetter = letters[Math.floor(Math.random() * letters.length - 1)]
    } else {
        randomLetter = []
        let tempRandomLetterIndex = Math.floor(Math.random() * letters.length)
        for(let i = 0; i < amount; i++) {
            randomLetter.push(letters[tempRandomLetterIndex])
            if(letRepeat === false) {
                letters = [...letters]
               letters.splice(tempRandomLetterIndex, 1)
            }
            tempRandomLetterIndex = Math.floor(Math.random() * letters.length)
        }
    }

    return randomLetter
}


export function joinArray(array, joinParem = "") {
    if(typeof(array) !== 'object') throw new Error(`Function: 'Join Array', Type of ${array} is not 'Array'`)
    return array.join(joinParem)
}


export function generatePassword(length = 10) {
    let lowerCase = [..."abcdefghijklmnopqrstuvwxyz"]
    let upperCase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    let numbers = [..."1234567890"]
    let symbols = [..."!@#$%^&*()-_/,."]
    let passWord = []
    let tempCharType
    let tempCharTypeCount

        tempCharTypeCount = Math.floor(Math.random() * 4)

    switch(tempCharTypeCount) {
        case 0: 
            tempCharType = lowerCase
        break
        case 1: 
            tempCharType = upperCase
        break
        case 2: 
        tempCharType = numbers
        break
        case 3: 
        tempCharType = symbols
        break
    }

    for(let i = 0; i < length; i++) {
        passWord.push(tempCharType[Math.floor(Math.random() * tempCharType.length)])
        tempCharTypeCount = Math.floor(Math.random() * 4)
        switch(tempCharTypeCount) {
            case 0: 
                tempCharType = lowerCase
            break
            case 1: 
                tempCharType = upperCase
            break
            case 2: 
            tempCharType = numbers
            break
            case 3: 
            tempCharType = symbols
            break
        }
    }
    const finalPassWord = passWord.join("")
    return  finalPassWord

}