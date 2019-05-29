let highNumbers = [25, 50, 75, 100]
let lowNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
let numbers = [7,3,2,2,4,50]
let round = 1
let numbersToPick = 7
let timeLeft = 30
let calculation = ['3', '*', '5', '*', '10', '*']
const operators = ['+','-','*','/','(',')']
const clickableOnce = document.querySelectorAll('.movable')
const clickableStationary = document.querySelectorAll('.fixed')
// The numbers and operations you chose are displayed
const chosen = document.getElementById('chosen')
// Where the numbers youve been given and the base operations are
const numbHolder = document.getElementById('numbers')
// Display the closest someone has got to the answer
const closest = document.getElementById('closest')
const state = 0
const goToNextState = () => {
    state++
}


// Generate a random number between 101 and 999 
const targetNumber = () => Math.floor(Math.random() * 898) + 101 

// When high number is picked remove it from its array and place it in general numbers array
const pickHigh = () => {
    if (highNumbers.length) {
        let chosen = Math.floor(Math.random() * highNumbers.length)
        numbers.push(highNumbers[chosen])
        highNumbers.splice(chosen, 1)
        numbersToPick--
    }
    else {
        return "No high numbers left"
    }
}

// When low number is picked remove it from its array and place it in general numbers array
const pickLow = () => {
    let chosen = Math.floor(Math.random() * lowNumbers.length)
    numbers.push(lowNumbers[chosen])
    lowNumbers.splice(chosen, 1)
    numbersToPick--
}

// Evaluate and display the closest number the user has got to the target, scrapped for now
// Use math.abs() to solve
const evaluateClosest = () => {
    let best = 0
    let diff = goal - best 
    if ((best - yourAnswer) < diff) {
        best = yourAnswer
    }
    closest.innerText = `The closest you have got is ${best}`
}

// Start a decreasing timer, updates the DOM and stops at 0
const timer = () => {
    let timer = document.getElementById('time')
    const timeDown = () => {
        if (timeLeft != 0) {
            timeLeft--
            timer.innerHTML = `${timeLeft} seconds left`
        } else {
            clearInterval()
            timer.innerHTML = `Times up`
        }
    }
    setInterval(timeDown, 1000)
}

// Update the DOM with randomly generated target number
const displayTargetNumber = () => {
    goal = targetNumber()
    target.innerHTML = `Your target number is ${goal}`
}

// Populate the DOM with numbers allocated
const fillDomNumbers = () => {
    for ( let i = 0; i < numbers.length; i++ ) {
        numbHolder.children[i].innerHTML = numbers[i]
    }
}

// When clicking a number, push it into the calculation function and remove from list
// const listenToNumbers = () => {
//     clickableOnce.forEach.addEventListener('click', () => {
//         console.log()
//         calculation.push(this)
//     })
// }

// When clicking an operation put it into the calculation function
// const listenToOperants = () => {
//     clickableStationary.forEach(addEventListener('click', () => {
//         console.log()
//         calculation.push(this)
//     })
// }

// Evaluate what has been entered into the calculation
const evaluate = () => {
        let sum = ""
        for (let i = 0; i < calculation.length; i++) {
        sum += calculation[i]
        }
            yourAnswer = eval(sum);
            if (typeof(yourAnswer) === "number") {
                if (yourAnswer % 1 === 0) {
                    return ( `= ${yourAnswer}` )
                } else {
                    return ' Ans`wer must be a whole number '
                }
            } else {
                return ' '
            }
}

// Render the current calculation on the page and its answer
const renderCurrentCalculation = () => {
    chosen.innerHTML = ""

    calculation.forEach( calc => {
        const newDiv = document.createElement('div')
        newDiv.innerText = calc
        chosen.append(newDiv)
    })

    const finalDiv = document.createElement('div')
    finalDiv.innerText = evaluate()

    chosen.append(finalDiv)
}


const init = () => {
    displayTargetNumber()
    timer()
    fillDomNumbers()
    evaluate()
    renderCurrentCalculation()
    evaluateClosest()
    // listenToNumbers()
    // listenToOperants()
}

init()

// 1. How to get it so user cant concatinate numbers
// 2. Sort out screen changes
// 3. How to get rounds working
// 4. Get eval to not break when it isnt a legitimate sum // check if end is not okay

