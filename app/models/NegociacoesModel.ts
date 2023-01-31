import { Negociacao } from "./NegociacaoModel";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    add(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    list(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}

const negociacoes = new Negociacoes ()
negociacoes.list().forEach(n => {
})
