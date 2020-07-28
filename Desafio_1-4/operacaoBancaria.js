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


// calling creatTransaction()

createTransaction({type:'Credit', value:90});
createTransaction({type:'Credit', value:220});
createTransaction({type:'Debit', value:120});
createTransaction({type:'Debit', value:80});
console.log(user)

// ======================================== RELATÓRIOS  ===========================================


/*Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:*/

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

console.log(getHigherTransactionByType('Debit'))