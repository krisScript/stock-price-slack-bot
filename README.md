# Stock Price Slack Bot
When called with one or more company symbols the bot will return a response containing the symbol, company name, latest price, latest time and changes in the stock price.

Data provided by [IEX](https://iextrading.com/developer/)

[IEX API Developer Terms](https://iextrading.com/api-terms/)

## Example

### Request:
@stock_bot  goog,fb,sadsad,aapl,asva

### Response:  
// Symbol: GOOG  Company Name: Alphabet Inc.  Latest Price: 1095.06  Latest Time: February 8, 2019  Change:-3.65 ////// Symbol: FB  Company Name: Facebook Inc.  Latest Price: 167.33  Latest Time: February 8, 2019  Change:0.95 ////// Symbol: AAPL  Company Name: Apple Inc.  Latest Price: 170.41  Latest Time: February 8, 2019  Change:0.2001 ////// Symbols: sadsad,asva weren't found!
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Linters

Prettier with Eslint Integration.


### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

#### Yarn

```
yarn install
```

#### npm

```
npm install
```

## Running the app



#### Yarn

```
yarn start
```

#### npm

```
npm start
```


## Authors

- **Kristiyan Todorov** - [GitHub Profile](https://github.com/krisScript)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
