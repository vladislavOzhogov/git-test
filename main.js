import { addThree } from "./libs.js"
import promptSync from 'prompt-sync'

const prompt = promptSync()

function start() {
    const input = Number(prompt("Здравстуйте, добро пожаловать в программу SumPlus3. Введите ваше число: ").trim())

    console.log(addThree(input))
}

start()