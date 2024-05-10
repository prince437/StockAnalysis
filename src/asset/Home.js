import React, { useState } from 'react';
import './Home.css'; 
import logo from './Brand_logo.png'
import { Route, Routes } from 'react-router-dom';
import TradingViewWidget from './TradingViewWidget';

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://stockapi-production-facf.up.railway.app/api/products?SYMBOL=${query}`);
      const data = await response.json();
      setResults(data.myData); // Accessing the myData property
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  
  return (
    
    <div className='body'>
      <div className='chart'>
        <TradingViewWidget/>
      </div>

      <div className='content-section'>
        <div className='brand-logo'>
          <img src={logo} alt="Brand logo" />
        </div>
        <h1 className="brand-name">Stock analysis and screening tool for investors in India.</h1><br/>
        <div className='search'> 
          <input type="text" placeholder="Search..." className="search-input" value={query} onChange={handleChange}/>
          <button onClick={handleSearch} className="search-button">Search</button>
        </div >
       
      </div>

      <div className="stock-view">
        {results.length > 0 && (
          <div className='cardview'>
          <ul>
            {results.map((item, id) => (
              <li key={id}>
                {/* Display relevant data */}
                <p>Name: {item.NAME_OF_COMPANY}</p>
                <p>Symbol: {item.SYMBOL}</p>
                <p>Category: {item.CATEGORY}</p>
                <p>Current Price: {item.CURRENT_PRICE}</p>
              </li>
            ))}
          </ul>
          </div>
        )}
        </div>
    </div>
    
  );
};

export default Home;
