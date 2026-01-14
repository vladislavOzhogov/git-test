import { addThree } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    var input = prompt('Hello! Welcome to SumPlus3! Enter your sum')
    console.log(addThree(input))
}

start()