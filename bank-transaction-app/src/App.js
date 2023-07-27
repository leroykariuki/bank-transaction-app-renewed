import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';


const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the local server running JSON DB server
    fetch('http://localhost:3001/transactions')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTransactions(data)
      })
      // .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionTable transactions={transactions} />
      <TransactionForm transactions={transactions} />
    </div>
  );
};

export default App;
