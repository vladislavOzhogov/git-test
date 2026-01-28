import { addFour } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(prompt("Hello! Welcome to SumPlus4ThreeTimes! Enter your sum: ").trim())
    console.log(addFour(addFour(addFour(input))))
}

start()