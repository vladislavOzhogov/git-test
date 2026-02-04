import { addThree } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(prompt("Здравствуйте! Welcome to SumPlus3! Enter your sum: ").trim())
    console.log(addThree(input))
}

start()