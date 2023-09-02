// const transaction = [1000, 3000, 
// 4000, 2000, -898, 3800, -45000]

// const intoDollar = transaction.map(function(ele){
//     return (ele*82.19).toFixed(2);
// })

// console.log(intoDollar)

// const num = [1,4,3,16]
// let squared = num.filter((n)=>{return n<4})
// console.log(squared)

const transaction = [1000, 3000,
    4000, 2000, -898, 3800, -45000]

let debited = transaction.filter(function(amt){
    return amt>0
}).reduce(function(acc,value){
    return acc+value
  },0)


console.log(debit)