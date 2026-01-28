import { deductFour } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(
        prompt("Hello! Welcome to SumMinus4ThreeTimes! Enter your sum: ")
        .trim())
    console.log(deductFour(deductFour(deductFour(input))))
}

start()