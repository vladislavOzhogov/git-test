import { addFour } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(prompt("Hello! Welcome to SumPlus4Twice! Enter your sum: ").trim())
    console.log(addFour(addFour(input)))
}

start()