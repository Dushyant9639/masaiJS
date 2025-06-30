function createBankAccount(initialBalance) {
    let balance = initialBalance;
    const originalBalance = initialBalance; 

    return {
        deposit: function(amount) {
            if (amount <= 0) {
                return "Deposit amount must be greater than zero.";
            }
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds.";
            }
            if (amount <= 0) {
                return "Withdrawal amount must be greater than zero.";
            }
            balance -= amount;
            return balance;
        },
        getBalance: function() {
            return balance;
        },
        reset: function() {
            balance = originalBalance;
            return balance;
        }
    };
}
const account = createBankAccount(100);

console.log(account.deposit(50));     
console.log(account.withdraw(30));   
console.log(account.getBalance());   

account.reset();                     
console.log(account.getBalance());   


