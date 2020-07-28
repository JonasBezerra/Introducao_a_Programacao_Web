const user = {
    name: 'Maria',
    transactions: [],
    balance:0 // saldo em pt-br
}

function createTransaction(transaction) {
    if(transaction.type == 'Credit'){
        user.balance += transaction.value;
    }else{
        user.balance -= transaction.value
    }
}
const transaction = {
    type: 'Credit', value: 50.5
}