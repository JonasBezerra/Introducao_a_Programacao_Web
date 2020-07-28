const user = {
    name: 'Maria',
    transactions: [],
    balance:0 // saldo em pt-br
}

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if(transaction.type == 'Credit'){
        user.balance += transaction.value;
    }else{
        user.balance -= transaction.value
    }

}

const transaction = {
    type: 'Credit', value: 50.5
}

// calling creatTransaction()

createTransaction(transaction);
console.log(user)

const transaction2 = {
    type: 'Debit', value:100.5
}

createTransaction(transaction2);
console.log(user)
