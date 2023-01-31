import { NegociacaoController } from "./controllers/NegociacaoController.js"
const controller = new NegociacaoController()
const form = document.querySelector('.form')

form.addEventListener('submit', e => {
    e.preventDefault()
    controller.add()
})