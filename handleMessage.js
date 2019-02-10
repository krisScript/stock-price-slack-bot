const getData = require('./getData');
const handleMessage = async (message, bot, params) => {
  const messageArr = message.split('>');
  if (messageArr.length > 1) {
    const stockSymbols = messageArr[1].trim();
    if (stockSymbols) {
      const apiUrl = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockSymbols}&types=quote`;
      const stockData = await getData(apiUrl);
      if (
        Object.entries(stockData).length === 0 &&
        stockData.constructor === Object
      ) {
        bot.postMessageToChannel(
          'general',
          `Symbols that you requested weren't found!`,
          params
        );
      } else {
        let messageStr = '';
        const foundStockSymbolsArr = Object.values(stockData).map(company => {
          return company.quote.symbol;
        });
        const stockSymbolsArr = stockSymbols.split(',').filter(stockSymbol => {
          return !foundStockSymbolsArr.includes(stockSymbol.toUpperCase());
        });
        const notFoundStockSymbolsStr = stockSymbolsArr.join(',');
        Object.values(stockData).forEach(company => {
          const { symbol } = company.quote;

          const { companyName } = company.quote;
          const { latestPrice } = company.quote;
          const { latestTime } = company.quote;
          const { change } = company.quote;
          const companyStr = `/// Symbol: ${symbol}  Company Name: ${companyName}  Latest Price: ${latestPrice}  Latest Time: ${latestTime}  Change:${change} ///`;
          messageStr += companyStr;
        });
        if (notFoundStockSymbolsStr !== '') {
          messageStr += `/// Symbols: ${notFoundStockSymbolsStr} weren't found!`;
        }
        bot.postMessageToChannel('general', messageStr, params);
      }
    }
  }
};

module.exports = handleMessage;
