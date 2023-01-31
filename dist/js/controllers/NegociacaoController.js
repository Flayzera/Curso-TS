import { Negociacao } from "../models/NegociacaoModel.js";
import { Negociacoes } from "../models/NegociacoesModel.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negociacao = this.createNegotiation();
        this.negociacoes.add(negociacao);
        this.negociacoes.list();
        console.log(this.negociacoes.list());
        this.cleanForm();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociacao(date, quantity, value);
    }
    cleanForm() {
        this.inputData.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputData.focus();
    }
}
