let peso = 108
let listaPecas =["Radiador", "Vela", "Volante", "Pedal", "Amortecedor", "Disco de Freio", "Filtro", "Buzina", "Airbag", "Retrovisor"]
let nomePecas = listaPecas[5]

if(peso > 100){
    console.log("A peça possui peso adequado, pode ser cadastrada!")
} else{
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo.")
}

if(nomePecas.length > 3){
    console.log("Nome da peça é válido.")
} else{
    console.log("Nome de peça inválido, necessita ter mais de 3 caracteres.")
}

if(listaPecas.length<10){
    console.log("A lista ainda possui espaço para mais peças.")
} else{
    console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida.")
}

