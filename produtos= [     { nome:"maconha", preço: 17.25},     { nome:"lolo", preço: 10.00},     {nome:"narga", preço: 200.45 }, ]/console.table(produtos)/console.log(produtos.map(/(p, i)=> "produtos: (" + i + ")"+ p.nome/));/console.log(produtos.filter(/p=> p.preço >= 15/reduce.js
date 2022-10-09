produtos= [
    { nome:"melancia", preço: 17.25},
    { nome:"laranja", preço: 10.00},
    {nome:"melão", preço: 200.45 },
]

//console.table(produtos)
// console.log(produtos.map(
//     (p, i)=> "produtos: (" + i + ")"+ p.nome
// ));
// console.log(produtos.filter(

//     p=> p.preço >= 15
// ))
console.log(produtos.map(p=>p.preço))
.reduce((previous, current)=> previous + current)
