const user = {
    name: 'Maria',
    transactions: [],
    balance:0 // saldo em pt-br
}

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if(transaction.type == 'credit'){
        user.balance += transaction.value;
    }else{
        user.balance -= transaction.value
    }

}


// calling creatTransaction()

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
console.log('O Saldo é: '+user.balance)

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

console.log('O objeto debit com maior valor é: ',getHigherTransactionByType('debit'))
console.log('O objeto credit com maior valor é: ',getHigherTransactionByType('credit'))

// Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:

function getAverageTransactionValue(){
    let averageValue = 0 // valor Médio
    let sum = 0 // soma
    let totValue = 0
    for(let transaction of user.transactions){
        sum += transaction.value
        totValue++;
    }

    return sum/totValue
}
console.log(`A média é: ${getAverageTransactionValue()}`);

// Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo: getTransactionsCount(); 
// { credit: 5, debit: 3 }


function getTransactionsCount(){
    let numberTrasactions = {credit:0,debit:0}
    for (const transaction of user.transactions) {
        if(transaction.type == 'credit'){
            numberTrasactions.credit +=1   
        }else{
            numberTrasactions.debit +=1   
        }
    }
    return numberTrasactions
}
console.log(getTransactionsCount())