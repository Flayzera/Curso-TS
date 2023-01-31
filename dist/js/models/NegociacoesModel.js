export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    list() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.list().forEach(n => {
});
