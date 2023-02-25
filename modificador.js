 export function fnCapitalizar(coletion, atrribute){
    let result;
    let error = null;
        if(typeof coletion[0] == 'object'){
                result = coletion.map(obj => {
                const letraInicial = obj[atrribute].charAt(0).toUpperCase();
                const restoTexto = obj[atrribute].slice(1)
                obj[atrribute] = letraInicial + restoTexto
            
                return obj;
        })
    }
    else if(typeof coletion[0] == 'string'){
        result = coletion.map((obj, key) => {
            const restoTexto = obj.slice(1)
            const letraInicial = obj.charAt(0).toUpperCase()
            obj = letraInicial + restoTexto

           return obj
        })
       
       
    }
    else{
        error = 'valor invalido'
    }
   error ? console.log(error) : console.log(result)
 }


export function fnOrdenar (vector){
    return vector.sort(function(a, b){
        return a.localeCompare(b)
    })
}

