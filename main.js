import { addThree } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(prompt("Hello! Welcome to SumPlus3Twice! Enter your sum: ").trim())
    console.log(addThree(addThree(input)))
}

start()