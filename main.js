const { addThree, deductThree } = require("./libs")
const promptSync = require("prompt-sync")

const prompt = promptSync()

function start() {
    let validInput = 0
    do {
        let input = prompt('Hello! Welcome to SumPlusOrMinus3! Choose your mode - add or deduct ')
        if(input == 'add') {
            validInput = !validInput
            let amount = prompt('Enter your sum ')
            console.log(addThree(amount))
        } else if(input == 'deduct') {
            validInput = !validInput
            let amount = prompt('Enter your sum ')
            console.log(deductThree(amount))
        } else {
            console.log('Choose mode correctly, please')
        }
    } while (!validInput)
}

start()