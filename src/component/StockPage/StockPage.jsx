import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StockPage.css";
import { FaSearch } from "react-icons/fa";

const StockPage = () => {
  const [marketData, setMarketData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=Php&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setMarketData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMarketData();
  }, []);

  const getColorClass = (value) => {
    if (value > 0) {
      return "positive";
    } else if (value < 0) {
      return "negative";
    } else {
      return "neutral";
    }
  };

  const getChangeIndicator = (value) => {
    if (value > 0) {
      return <span className="change-indicator">&#9650;</span>; // Up arrow
    } else if (value < 0) {
      return <span className="change-indicator">&#9660;</span>; // Down arrow
    } else {
      return <span className="change-indicator">&#9679;</span>; // Neutral circle
    }
  };

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    } else if (price >= 1000) {
      return `${(price / 1000).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    } else {
      return price.toLocaleString("en-US", { minimumFractionDigits: 2 });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = marketData.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="market-section-label text-start ml-5">Market Section</h2>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search CryptoCurrencies"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="market-container">
        {filteredCoins.map((coin) => (
          <div className="coin-box" key={coin.id}>
            <div className="coin-item">
              <div className="coin-image-container">
                <img src={coin.image} alt={coin.name} className="coin-image" />
              </div>
              <div className="coin-text">
                <p className="coin-name">{coin.name}</p>
                <p className={`coin-price ${getColorClass(coin.price_change_24h)}`}>
                  {formatPrice(coin.current_price)} Php
                </p>
                <p className={`coin-marketcap ${getColorClass(coin.market_cap_change)}`}>
                  {formatPrice(coin.market_cap)} Php
                </p>
                <p className={`coin-change ${getColorClass(coin.price_change_percentage_24h)}`}>
                  {getChangeIndicator(coin.price_change_percentage_24h)} {coin.price_change_percentage_24h}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockPage;


