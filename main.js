import { addThree, minusThree } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(prompt("Hello! Welcome to SumPlus3! Enter your sum: ").trim())

    console.log(minusThree(input))
}

start()