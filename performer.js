const DAbutton = document.getElementById("DogAgeButton");
DAbutton.addEventListener("click", () => {
    data = document.getElementById("Dog-age-input").value
    document.getElementById("Dog-Age").innerHTML = dogAge(data)
})

const TCButton = document.getElementById("CapitaliseButton");
TCButton.addEventListener("click", () => {
    data = document.getElementById("ToCapitalise").value
    document.getElementById("Capitalise").innerHTML = toCapitalise(data)
})


const CAbutton = document.getElementById("CircleAreaButton");
CAbutton.addEventListener("click", () => {
    data = document.getElementById("Circle-area-input").value
    document.getElementById("Circle-area").innerHTML = circle_area(data)
})

const CSbutton = document.getElementById("SpaceCountCounerButton");
CSbutton.addEventListener("click", () => {
    data = document.getElementById("Count-space-input").value
    document.getElementById("Count-spaces").innerHTML = countspaces(data)
})

const CTFbutton = document.getElementById("CelsToForButton");
CTFbutton.addEventListener("click", () => {
    data = document.getElementById("Celsius-to-Forenheit-input").value
    document.getElementById("Celsius-to-Forenheit").innerHTML = Celsius(data)
})

const TBButton = document.getElementById("BinaryButton");
TBButton.addEventListener("click", () => {
    console.log("clicked")
    data = document.getElementById("To-Binary-input").value
    document.getElementById("To-Binary").innerHTML = tobinary(data)
})

const THButton = document.getElementById("TohexButton");
THButton.addEventListener("click", () => {
    data = document.getElementById("To-hex-input").value
    document.getElementById("To-hex").innerHTML = tohex(data)
})

const CCButton = document.getElementById("CountCharacterButton");
CCButton.addEventListener("click", () => {
    data = document.getElementById("Count-Character-input").value
    document.getElementById("Count-Character").innerHTML = CharCount(data)
})

const IPButton = document.getElementById("IspalindromeButton");
IPButton.addEventListener("click", () => {
    data = document.getElementById("Is-palindrome-input").value
    document.getElementById("Is-palindrome").innerHTML = palindromefinder(data)
})

const FButton = document.getElementById("FactorialButton");
FButton.addEventListener("click", () => {
    data = document.getElementById("Factorial-input").value
    document.getElementById("Factorial").innerHTML = factorial(data)
})

const ISBNButton = document.getElementById("ISBNButton");
DAbutton.addEventListener("click", () => {
    data = document.getElementById("ISBN-input").value
        // document.getElementById("IsISBN").innerHTML = (data)
    pass
})





function dogAge(entry) {
    return entry * 7
}

function toCapitalise(entryZ) {
    const entry = entryZ.length ? entryZ.split(/\\s+/g) : [];
    var capitalised_list = []
    entry.forEach((element) => {
        element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
        capitalised_list.push(element)
    });
    console.log(capitalised_list.join(" "))
    return capitalised_list.join(" ")

}

function circle_area(entry) {
    const pi = Math.PI
    return 2 * pi * entry
}

function countspaces(string) {
    let count = 0
    const arr = string.split("")
    arr.forEach((element) => { if (element == " ") { count += 1 } })
    return count
}

function Celsius(entry) {
    return (entry * 1.8) + 32
}

function tobinary(entry) {
    return Number(entry).toString(2);
}

function tohex(entry) {
    return Number(entry).toString(16);
}

function CharCount(entry) {
    let map = {};
    const arr = entry.split("");
    arr.forEach(
        (match) => {
            if (!map[match]) { map[match] = 1 } else { map[match]++ }
        });
    return JSON.stringify(map);
}

function palindromefinder(entry) {
    const task = entry.trim()
    const textF = [];
    const textB = [];
    for (let i = 0; i < task.length; i++) {
        textF.push(task[i]);
    }
    for (let i = task.length - 1; i >= 0; i--) {
        textB.push(task[i]);
    }
    const textFr = textF.reduce((a, b) => a + b, "");
    const textBr = textB.reduce((a, b) => a + b, "");
    const status = textBr === textFr && task.length > 0;
    return status
}

function factorial(entry) {
    const numb = (() => { for (let i = entry - 1; i > 0; i--) { entry *= i } return entry })
    return numb()
}


// class Car {
//     constructor(name, year) {
//         this.name = name
//         this.year = year
//     }
//     age() {
//         const data = new Date();
//         return data.getFullYear() - this.year;
//     }
//