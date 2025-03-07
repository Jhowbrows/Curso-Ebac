function multiplica(valor1: number, valor2: number): number {
    try {
        return valor1 * valor2;
    } catch (erro) {
        console.error('Erro na multiplicação da conta', erro);
        return 0;
    }
}

function dizNome( nome: string): string {
    try{
        return `Olá ${nome}, o resultado da multiplicação é:`
    }catch(erro) {
        console.error('Ocorreu um erro no texto, verifique!', erro);
        return '';
    }
}

console.log(dizNome('Jhonatan'));
console.log(multiplica(15, 10));