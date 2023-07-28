import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction, onSearch }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTransaction(formData); // Call the parent component's function to add the transaction
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm); // Call the parent component's function to handle search
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div>
          <label>Date:</label>
          <input type="text" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Add Transaction</button>
        </div>
      </form>
      {/* Search field */}
      <div>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
      </div>
    </div>
  );
};

export default TransactionForm;
