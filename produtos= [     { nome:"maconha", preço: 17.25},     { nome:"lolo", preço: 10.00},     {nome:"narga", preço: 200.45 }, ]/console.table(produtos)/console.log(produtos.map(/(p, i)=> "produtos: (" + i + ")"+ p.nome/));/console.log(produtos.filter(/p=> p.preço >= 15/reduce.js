produtos= [
    { nome:"maconha", preço: 17.25},
    { nome:"lolo", preço: 10.00},
    {nome:"narga", preço: 200.45 },
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
