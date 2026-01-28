import { deductFour } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(
        prompt("Hello! Welcome to SumMinus4Twice! Enter your sum: ")
        .trim())
    console.log(deductFour(deductFour(input)))
}

start()