// StockDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './StockDetailsPage.css'; // Import your CSS file for styling

const StockDetailsPage = () => {
  const { symbol } = useParams(); // Get the stock symbol from the URL params
  const [stockDetails, setStockDetails] = useState();

  useEffect(() => {
    // Fetch stock details based on the symbol
    const fetchStockDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5500/api/products?SYMBOL=${symbol}`);
            const data = await response.json();
            setStockDetails(data.myData); // Accessing the myData property
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
        };

    fetchStockDetails();
  }, [symbol]); // Fetch data whenever the symbol changes
console.log(typeof[symbol]);
  return (
    <div className="stock-details-container">
      <h1>Stock Details</h1>
      {stockDetails ? (
        <div className="stock-details">
          <p>Name: {stockDetails.NAME_OF_COMPANY}</p>
          <p>Symbol: {stockDetails.SYMBOL}</p>
          <p>Category: {stockDetails.CATEGORY}</p>
          <p>Current Price: {stockDetails.CURRENT_PRICE}</p>
          {/* Add more details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockDetailsPage;
