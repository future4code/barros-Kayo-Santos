//a) entrada: array de números, saída: ordena os números  e faz a média deles.

function obterEstatisticas(numeros:number[]): estatisticas{

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([6,3]));


//b) number e o retorno é type any

//c)
type estatisticas = {
    maior:number,
    menor: number,
    media: number
}

type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => {estatísticas:estatisticas}}
