import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StockPage.css";

const StockPage = () => {
  const [marketData, setMarketData] = useState([]);

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

  return (
    <div>
      <h2 className="text-center text-dark">Market section</h2>
      <div className="market-container">
        {marketData.map((coin) => (
          <div className="coin-box" key={coin.id}>
            <div className="coin-item">
              <div className="coin-image-container">
                <img src={coin.image} alt={coin.name} className="coin-image" />
              </div>
              <div className="coin-text">
                <p className="coin-name">{coin.name}</p>
                <p className={`coin-price ${getColorClass(coin.current_price_change)}`}>
                  {coin.current_price} Php
                </p>
                <p className={`coin-marketcap ${getColorClass(coin.market_cap_change)}`}>
                  {coin.market_cap} Php
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


