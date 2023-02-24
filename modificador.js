 export  function fnCapitalizar(vector){
    var modificado = []

    for (let i = 0; i < vector.length; i++) {
        const letraInicial = vector[i].charAt(0).toUpperCase()
        const restoTexto = vector[i].slice(1)
        const resultado = letraInicial + restoTexto
        modificado[i] = resultado
        
    }
    return modificado;
}
export function fnOrdenar (vector){
    return vector.sort(function(a, b){
        return a.localeCompare(b)
    })
}

