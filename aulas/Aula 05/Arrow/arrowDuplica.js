const lista = [1,2,3]

const duplica = (lista) => {
    let listaDuplicada = []

    for(i=0;i<lista.length;i++){
        listaDuplicada.push(lista[i]*2)
    }
    return listaDuplicada
}
console.log(duplica(lista))
