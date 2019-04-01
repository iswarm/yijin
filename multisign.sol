pragma solidity >=0.4.22 <0.6.0;

contract MultiSigWallet {
    address private owner1;
    address private owner2;
    

    // Min amount of signatures needed to validate a transaction
    //验证事务所需的最小签名数
    uint constant private MIN_SIGNATURES = 2;

    // Make an auto incrementing transactionId
    //创建一个自动递增的transactionId
    uint private transactionId;
    
    // Make transaction generic
    // First a struct for transaction type
    //使事务通用
    //首先是事务类型的结构体
    struct Transaction {
        address from;
        address payable to;
        uint amount;
        uint8 signatureCount; // The number of owners who have signed this contract
        //已签署此合约的业主数目
        mapping(address => uint8) signatures; // Make sure 1 owner does not sign contract twice
        //确保一个人没有签署两次合同
    }

    // We need an array of Transactions to store them in a queue to exe one Transaction after another
    //我们需要一个事务数组来将它们存储在一个队列中，以便执行一个又一个事务
    mapping(uint => Transaction) private transactions;
    // Pending 交易
    uint[] private  pendingTransactions;

    modifier isOwner() {
        require(owner1 == msg.sender || owner2 == msg.sender);
        _;
    }
    
    // As soon as someone tries to deposit we need to get logs about the operation
    //一旦有人试图存款，我们就需要做有关操作的日志事件
    event DepositFunds(address from, uint amount);
    // As soon as someone tries to withdraw log that event
    // 一旦有人试图退出该事件的日志事件
    event TransactionCreated(address from, address to, uint amount, uint transactionId);
    event TransactionCompleted(address from, address to, uint amount, uint transactionId);
    event TransactionSigned(address by, uint transactionId);
    
    // Check if a given address is one of the owners of the wallet
    //检查给定地址是否是钱包的所有者之一
    modifier isAOwner(address _addr) {
        require(_addr == owner1 || _addr == owner1);
        _;
    }
    
    constructor (address _owner)
        public {
            require (_owner != address(0));
        owner1 = msg.sender;
        owner2 = _owner;
    }
    
    
    // Deposit funds into this wallet
    //把钱存入这个钱包
    function deposit()
        isAOwner(msg.sender)
        payable
        public {
        emit DepositFunds(msg.sender, msg.value);
    }
    
    // Allow a owner to withdra an amount which is not greater than his balance
    //允许扣减不超过其余额的金额
    function withdraw(uint amount)
        isAOwner(msg.sender)
        public {
        transferTo(msg.sender, amount);
        // require(address(this).balance >= amount);
        // msg.sender.transfer(amount);
        // WithdrawFunds(msg.sender, amount);
    }
    
    // Allow an existing owner to transfer to funds to other people
    //允许现有所有者将资金转移给其他人
    function transferTo(address payable to, uint amount)
        isAOwner(msg.sender)
        public {
        require(address(this).balance >= amount);
        // to.transfer(amount);
        // TransferFunds(msg.sender, to, amount);
        uint currentTransactionId = transactionId++;
        Transaction memory transaction;
        transaction.from = msg.sender;
        transaction.to = to;
        transaction.amount = amount;
        transaction.signatureCount = 0; // This is the beginning of the transfer so nobody has signed it yet
        //这是转会的开始，所以还没有人签合同
        // Add this to the queue as weill as pending transactions
        //将其作为挂起事务添加到队列中
        transactions[currentTransactionId] = transaction;
        pendingTransactions.push(currentTransactionId);

        // Log the created event
        emit TransactionCreated(msg.sender, to, amount, currentTransactionId);
    }

    // Utility to get pending transactions
    //获取事务队列任务
    function getPendingTransactions()
        isOwner
        public
        returns (uint[] memory pts) {
        return pendingTransactions;
    }

    function signTransacation(uint transactionToBeSignedId)
        isOwner
        public {
        // Storage, that is take the transaction thats in the storage
        //存储，就是取存储中的事务
        Transaction storage transaction = transactions[transactionToBeSignedId];

        // Make sure that transaction exists in storage
        //确保事务存在于存储中
        require(address(0) != transaction.from);
        // The sender of this message should not sign his own transaction
        //此消息的发送方不应该签署自己的事务
        require(msg.sender != transaction.from);
        // Cannout sign the same transaction more than once
        //此消息的发送方不应在自己的事务上签名超过一次
        require(transaction.signatures[msg.sender] != 1);

        // Sign the transaction
        //标志的事务
        transaction.signatures[msg.sender] = 1;
        // Increase the signature count for this contract after signing
        //增加本合同签订后的签章数量
        transaction.signatureCount++;

        // Log an event of transaction signed
        emit TransactionSigned(msg.sender, transactionToBeSignedId);

        // Check if the number of signatures match the criteria, if yes transact!
        //签收后增加本合同签收数量，检查签收数量是否符合标准，是否成交!
        if (transaction.signatureCount >= MIN_SIGNATURES) {
            // Make sure the amount request is not greater than or eqaul to this contracts balance
            //确保金额请求不大于或不超过此合同余额
            require(address(this).balance >= transaction.amount);
            // Go transact this 
            transaction.to.transfer(transaction.amount);
            // Log this event
            emit TransactionCompleted(transaction.from, transaction.to, transaction.amount, transactionToBeSignedId);
            // delete this transaction and remove it from pendingTranscation
            deleteTransaction(transactionToBeSignedId);
        }
    }

    function deleteTransaction(uint transactionToBeDeletedId)
        isOwner
        public {
        // delete from mapping: simple delete will do
        //从映射中删除:简单的删除即可
        delete transactions[transactionToBeDeletedId];

        // splicing a dynamic array, (pendingTransactions)
        uint replace = 0; // not found
        for (uint i = 0; i < pendingTransactions.length; i++) {
            if (replace == 1) {
                pendingTransactions[i - 1] = pendingTransactions[i]; // shuffling
            }
            if (pendingTransactions[i] == transactionToBeDeletedId) {
                replace = 1; // found
            }
        }

        // dynamic array has been shuffled to make the last ele redundant so delete that empty space
        //动态数组已被打乱，使最后一个ele冗余，因此删除该空空间
        delete pendingTransactions[pendingTransactions.length - 1];
        // decrease the length of pending transactions
        //减少未决事务的长度
        pendingTransactions.length--;  
    }

    // get the balance of this waller
    //平衡好
    function getWalletBalance()
        isOwner
        view
        public
        returns (uint) {
        return address(this).balance; // this is the current contract
        //这是目前的合同
    }
}